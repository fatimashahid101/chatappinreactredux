const INITIAL_STATE = {

user: {},
allUsers: []
  
}

const reducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
        case "GETUSER": 
        return ({
                ...state,
                user: action.user

        })
        case "GETALLUSER": 
        return ({
                ...state,
                allUsers: action.allUsers

        })
        case "GETMESSAGE": 
        return ({
                ...state,
                payload: action.payload

        })
default:
        return state
} 
}
export default reducer;