import Firebase from "../config/Firebase";

const signupUser = (user) => {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
    Firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)
    alert("user signed up successful")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}
const loginUser = (user) => {
    return (dispatch) => {
        return new Promise((resolve , reject) => {
            Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
        Firebase.database().ref('/').child(`users/${res.user.uid}`)
        .once('value', (data) => {
            dispatch({type: "GETUSER" , user: data.val() })
            resolve(res.user.uid)
            // history.push('/home')
            // console.log(data.val())
        })
        console.log(res)
        alert("user login successful")
            })
            .catch((err) => {
                reject(err.message)
            })
        })
     
    }
}

const getUser = (uid) => {
    return (dispatch) => {
        Firebase.database().ref('/').child(`users/${uid}`)
        .once('value', (data) => {
            dispatch({type: "GETUSER" , user: {...data.val(), id: uid }})
        })
    }
}
const getAllUser = (uid) => {
    return (dispatch) => {
        Firebase.database().ref('/').child(`users`)
        .once('value', (data) => {
            var arr = []
            for(var key in data.val()){
                arr.push({...data.val()[key], id: key})
            }
            console.log(arr)
            dispatch({type: "GETALLUSER" , allUsers: arr })
        })
    }
}

const sendMessage = (message, user1, user2) => {
    return (dispatch) => {
        var mainID ;
        if (user1.id < user2.id){
            mainID = user1.id + user2.id
        } else {
            mainID = user2.id + user1.id
        }
    Firebase.database().ref('/').child(`chats/${mainID}`)
    .set({
        user1,
        user2,
        message
    })
    }
} 
const getMessage = (message, user1, user2) => {
    console.log(message, user1, user2)
    return (dispatch) => {
    Firebase.database().ref('/').child(`chats/${message}`)
  .once('value', (data) => {
      console.log("data=======>", data.val())
    dispatch({type: "GETMESSAGE" , payload: {...data.val()} })
  })
    }
}




export {
    signupUser,
    loginUser,
    getUser,
    getAllUser,
    sendMessage,
    getMessage
}