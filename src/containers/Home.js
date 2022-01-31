import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getUser, getAllUser, sendMessage, getMessage } from '../store/action';
import { useEffect, useState } from 'react';
import './style.css'

export default function Home() {
    const user = useSelector(state => state.user)
    const allUsers = useSelector(state => state.allUsers)
    const receive= useSelector(state => state.payload)
    const {id} = useParams()
    const dispatch = useDispatch()
    const [currentChat, setCurrentChat] = useState({});
    const [message, setMessage] = useState("");

 const send_message = () => [
// console.log(message, user, currentChat)
dispatch(sendMessage(message, user, currentChat))
 ]

    console.log(id)
    useEffect(() => {
        dispatch(getUser(id))
        dispatch(getAllUser())
        dispatch(getMessage())
    }, [])
    console.log(allUsers)
    console.log(receive)
    return (
        <div>
            <h1>Home</h1>
            <h1>{user.username}</h1>
            <span>{user.email}</span>
    <hr />
        <div className="d-flex">
        <div className="card users-card">
            <h1>All users</h1>
            <ul>
            {allUsers.map((v,i)=> {
return v.email !== user.email && <li key={i}>
    <div>
        <h3>  {v.username}</h3>
        <span>{ v.email }</span>
        <button onClick={()=> setCurrentChat(v)}>chat</button>
    </div>
    </li>
            })}
            </ul>
        </div>
        {Object.keys(currentChat).length ? <div className="card chat-card">
            <h1>Chat ( {currentChat.username} )</h1>
            <div className="messages">

            </div>
            <div>
<input value={message} onChange={(e) => setMessage(e.target.value)} type="text " placeholder="Enter message"/>
<button onClick={send_message}>Send</button>
            </div>
        </div> : null }
        </div>
       
        </div>
    
    )
}
