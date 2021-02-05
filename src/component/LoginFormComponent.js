import React from "react"
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import '../css/loginform.css'

const axios = require('axios');

const LoginFormComponent = () => {

    let history = useHistory();

  const [username, updateUsername] = React.useState("");
  const [password, updatePassword] = React.useState("");


  const handleChangeUsername = (e) => {
    updateUsername(
       e.target.value
    );

  };

  const handleChangePassword = (e) => {
    updatePassword( 
      e.target.value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username);
    console.log(password);
    axios.post("https://reqres.in/api/login", {
      email: username,
      password: password
    })
    .then(function (response) {
      const {data:{token},status} = response
      if(status===200 && token){ 
        console.log(token);
        history.push('/userlist')
      }
      else{
        history.push('/error')
      }
      
    })
    .catch(function (error) {
      console.log(error.message);
      history.push('/loginfailed')
    });
  };

  return (
    <>
    <div className="form">
      <label>
        Username
        <input type="email" name="username" onChange={handleChangeUsername} />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" onChange={handleChangePassword} />
      </label>
      <br />
      <Button color="danger" onClick={handleSubmit}>Submit</Button>
    </div>
    </>
  );
};

export default LoginFormComponent;