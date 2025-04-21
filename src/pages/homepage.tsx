import { useState } from 'react';
import './style.css';

async function getCalories(userInput: string) {
  //const response = await fetch("http://localhost:8000/api/calculate-calories", {
   // method: "POST",
   // headers: { "Content-Type": "application/json" },
   // body: JSON.stringify({ food_log: userInput }),
  //});

  //const data = await response.json();
  //return data.calories;
  console.log(userInput);
  return userInput
}

function Homepage() {
  const [userInput, setUserInput] = useState('');
  const [calories, setCalories] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await getCalories(userInput);
    setCalories(result);
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

      {calories && (
        <p className="result-text">Estimated calories: <strong>{calories}</strong></p>
      )}
    </div>
  );
}

export default Homepage;
