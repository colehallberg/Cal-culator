import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return(
  <div className="custom-container">
  <h1 className="custom-heading">Welcome to Cal-culator!</h1>
      <p className="custom-text">
        Already have an account?{" "}
        <Link to="/login" className="custom-link">
        Login
        </Link>
        <br />
        Don't have an account?{" "}
        <Link to="/register" className="custom-link">
        Register
        </Link>
      </p> 
      </div>
  );
  }
  
  export default Home;
  