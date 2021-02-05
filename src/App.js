import React from "react"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginFailedComponent from "./component/LoginFailedComponent";
import LoginFormComponent from "./component/LoginFormComponent";
import ErrorComponent from "./component/ErrorComponent"
import UserListContainer from "./container/UserListContainer";


function App() {
  return ( 
    <Router> 
        <div> 
         <Switch> 
           <Route exact path='/' component={LoginFormComponent}></Route> 
           <Route exact path='/userlist' component={UserListContainer}></Route> 
           <Route exact path='/loginfailed' component={LoginFailedComponent}></Route>
           <Route exact path='/error' component={ErrorComponent}></Route>
         </Switch> 
       </div> 
    </Router> 
); 
}

export default App;
