import "../index.css"

function UserListComponent({id,first_name,last_name,email,avatar}) {

      return (
              <div >
                <h3>{first_name +" " +last_name}</h3>
                <p>{email}</p>
                <p>{id}</p>
                <img src={avatar}/>
              </div>
      );
    }
export default UserListComponent;
