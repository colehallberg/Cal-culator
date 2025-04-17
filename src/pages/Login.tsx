import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { loginUser } from '../services/supabaseClient'; // Assuming your Supabase login function is in this file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For redirecting after login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log to console for now
    console.log('User Email:', email);
    console.log('User Password:', password);

    // Call your Supabase login function
    const { data, error } = await loginUser(email, password);

    if (error) {
      console.error('Login error:', error.message);
      alert('Login failed: ' + error.message);
    } else {
      console.log('Logged in:', data);
      navigate('/homepage'); // Redirect to home page after successful login
    }
  };

  return (
    <div className="custom-container">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h1 className="custom-heading">Log In</h1>
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

        <button type="submit">Log In</button>
        <p className="custom-text">
          Don't have an account?{' '}
          <Link to="/register" className="custom-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
