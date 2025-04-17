import './style.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="custom-container">
      <form className="custom-form">
        <h1 className="custom-heading">Log In</h1>
        <p className="custom-text">
          Don't have an account?{" "}
          <Link to="/register" className="custom-link">
            Register
          </Link>
        </p>

        <div className="form-group">
          <label htmlFor="email" className="custom-label">Email</label>
          <input type="email" id="email" name="email" className="custom-input" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="custom-label">Password</label>
          <input type="password" id="password" name="password" className="custom-input" placeholder="Enter your password" />
        </div>

        <button type="submit" className="custom-button">Log In</button>

        <Link to="/forgot-password" className="custom-small-link">
          Forgot Password?
        </Link>
      </form>
    </div>
  );
}

export default Login;
