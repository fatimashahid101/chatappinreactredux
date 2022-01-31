import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import "./style.css"
import { signupUser } from '../store/action'
export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const user_signin = () => {
        let user = {
            username,
            email,
            password
        }
     dispatch(signupUser(user))
    }
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card login-card">
                <h1 className="h1">Signup</h1>
                <form>
                <div className="mb-3">
<label for="exampleInputEmail1">Username:</label>
<input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div className="mb-3">
<label for="exampleInputEmail1">Email address:</label>
<input  onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
<label for="exampleInputEmail1">Password:</label>
<input  onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"/>
                </div>
                <div className="d-grid gap-2">
                <button onClick={user_signin} type="button" className="btn btn-primary btn-lg btn-block">Signup</button>
                </div>
                <Link to="/">Already have an account? </Link>
                </form>

                </div>
            </div>
        </div>
    </div>
    )
}
