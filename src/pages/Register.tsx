import './style.css';
import { Link } from 'react-router-dom';

function Register() {
  return(
  <div className="custom-container">
    <h1 className="custom-heading">Register</h1>
        <p className="custom-text">
          Already have an account?{" "}
          <Link to="/login" className="custom-link">
          Login
          </Link>
        </p> 
        </div>
  );
}

export default Register;