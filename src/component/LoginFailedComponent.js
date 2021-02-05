import { Alert } from 'reactstrap';
import { Link} from 'react-router-dom';

function LoginFailedComponent() {
    return(    
        <div>
            <Alert style={{color:'red'}}>
                Login Unsuccessfull
            </Alert>

            <li> 
                <Link to="/">Login</Link> 
            </li> 
        </div>
    )
  }

  export default LoginFailedComponent;