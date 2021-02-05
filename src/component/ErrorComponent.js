import { Alert } from 'reactstrap';
import { Link} from 'react-router-dom';

function ErrorComponent() {
    return(    
        <div>
            <Alert style={{color:'red'}}>
                Something Went wrong
            </Alert>

            <li> 
                <Link to="/">Login</Link> 
            </li> 
        </div>
    )
  }

  export default ErrorComponent;