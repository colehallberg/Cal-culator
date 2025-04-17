import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { registerUser } from '../services/supabaseClient'; // Ensure you have registerUser function

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== repassword) {
      setError('Passwords do not match!');
      return;
    }
    // Proceed with registration if no issues
    const { data, error } = await registerUser(email, password);

    if (error) {
      console.error('Registration error:', error.message);
      return;
    } else {
      console.log("User registered:", data);
      navigate("/login"); // Redirect to login page after successful registration
    }
  };

  return (
    <div className="custom-container">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h1 className="custom-heading">Register</h1>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Re-enter Password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          required
        />
        
        {error && <p className="error-message">{error}</p>} {/* Display error message if passwords don't match */}
        
        <button type="submit">Register</button>

        <p className="custom-text">
          Already have an account?{' '}
          <Link to="/login" className="custom-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;