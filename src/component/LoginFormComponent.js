import React from "react"
import { useHistory } from 'react-router-dom';

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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default LoginFormComponent;