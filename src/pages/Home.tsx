import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1 className="main-heading">Cal-culator</h1>
        <p className="sub-heading">
          Easy to use application to track your daily calorie intake
        </p>
        
        <br></br>
        <div className="auth-options">
          <div className="auth-option">
            <span>Already have an account? </span>
            <Link to="/login" className="custom-link auth-link">
              Login
            </Link>
          </div>
          <div className="auth-option">
            <span>Don't have an account? </span>
            <Link to="/register" className="custom-link auth-link">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;