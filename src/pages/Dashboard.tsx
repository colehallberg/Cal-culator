import { useState } from 'react';
import './style.css';
import '../components/Header';
import Header from '../components/Header';

async function getCalories(userInput: string) {
  const response = await fetch("http://localhost:8000/services/calculator", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ food_log: userInput }),
  });

  const data = await response.json();
  return data.calories;
  
}

function Dashboard() {
  const [userInput, setUserInput] = useState('');
  const [calories, setCalories] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await getCalories(userInput);
      setCalories(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />

      <div className="custom-container">
        <form className="custom-form" onSubmit={handleSubmit}>
          <h1 className="custom-heading">Cal-culator</h1>

          <input
            type="text-area"
            placeholder="Enter what you ate today, be as specific as possible so we can give you the most accurate estimate"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>

        {calories && (
          <p className="result-text">Estimated calories: <strong>{calories}</strong></p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
