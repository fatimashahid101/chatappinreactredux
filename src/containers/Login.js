import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./style.css"
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/action'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()

    const user_login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user, history))
        .then((uid) => {
            history.push(`user/${uid}`)
        })
        .catch ((err) => {
            alert (err)
        })
        console.log(user)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card login-card">
                    <h1 className="h1">Login</h1>
                    <form>
                    <div className="mb-3">
    <label for="exampleInputEmail1">Email address:</label>
    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="mb-3">
    <label for="exampleInputEmail1">Password:</label>
    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"/>
                    </div>
                    <div className="d-grid gap-2">
                    <button onClick={user_login} type="button" className="btn btn-primary btn-lg btn-block">Login</button>
                    </div>
                  <Link to="/signup">Create new account</Link>
                    </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
