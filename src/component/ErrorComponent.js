import { Alert } from 'reactstrap';
import { Link} from 'react-router-dom';

function ErrorComponent() {
    return(    
        <div className="center">
            <h1 style={{color:'red'}}>
                Something Went Wrong!
            </h1>
            <br />
            
            <Link color="primary" to="/">Login</Link> 
      
        </div>
    )
  }

  export default ErrorComponent;