import { Alert, Button } from 'reactstrap';
import { Link} from 'react-router-dom';
import '../css/style.css'

function LoginFailedComponent() {
    return(    
        <div className="center">
            <h1 style={{color:'red'}}>
                Login Unsuccessfull!
            </h1>
            <br />
            
            <Link color="primary" to="/">Login</Link> 
      
        </div>
    )
  }

  export default LoginFailedComponent;