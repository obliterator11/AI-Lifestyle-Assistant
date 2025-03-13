import React, { useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState("summer");
  const [occasion, setOccasion] = useState("casual");
  const [age, setAge] = useState("25");
  const [recommendation, setRecommendation] = useState("");

  const getRecommendation = async () => {
    const response = await axios.get(`http://localhost:8080/recommend`, {
      params: { weather, occasion, age },
    });
    setRecommendation(response.data);
  };

  return (
    <div>
      <h1>AI Lifestyle Assistant</h1>
      <label>Weather: </label>
      <select onChange={(e) => setWeather(e.target.value)}>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
      </select>
      <label> Occasion: </label>
      <select onChange={(e) => setOccasion(e.target.value)}>
        <option value="casual">Casual</option>
        <option value="party">Party</option>
      </select>
      <label> Age: </label>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <button onClick={getRecommendation}>Get Recommendation</button>
      <p>{recommendation}</p>
    </div>
  );
}

export default App;
