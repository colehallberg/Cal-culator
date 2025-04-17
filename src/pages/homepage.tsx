import { useState } from 'react';
import './style.css';

function Homepage() {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      };
    return (
    <div className="custom-container">
    <form className="custom-form" onSubmit={handleSubmit}>
      <h1 className="custom-heading">Cal-culator</h1>
      
      <input
        type="text"
        placeholder="Enter what you ate today"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        required
      />
      
   <button type="submit">Submit</button>
    </form>
  </div>
);
}
  
  export default Homepage;
  