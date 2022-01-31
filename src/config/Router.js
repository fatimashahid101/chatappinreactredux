import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Login from "../containers/Login"
  import Home from "../containers/Home";
  import Signup from "../containers/Signup"


  
  export default function AppRouter() {
      return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/user/:id" component={Home} />
            </Switch>
        </Router>
      )
  }
  