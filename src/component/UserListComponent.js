
function UserListComponent({id,first_name,last_name,email,avatar}) {

      return (
              <div >
                <h2>{id}</h2>
                <h3>{first_name +" " +last_name}</h3>
                <p>{email}</p>
                <img src={avatar}/>
              </div>
      );
    }
export default UserListComponent;