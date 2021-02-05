import axios from "axios";
import {useEffect,useState} from "react"
import UserListComponent from "../component/UserListComponent"
import "../index.css"

function UserListContainer() {

    const [users,updateUsers]= useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            const {status,data}=response
            const {data:userdata}=data
            if(status===200)
            {
              updateUsers(userdata)
            }

            // console.log(userdata)
            // console.log(users)

        })
        .catch(function (error) {
            console.log(error);
        })
      });

      return (
         
          <div className="users">
            {users.map((user, index) => (
            <UserListComponent 
            key={index} 
            id={user.id} 
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
            />
            ))}
          </div>
      );
    }
export default UserListContainer;
