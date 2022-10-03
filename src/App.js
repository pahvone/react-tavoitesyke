import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age , setAge] =useState(0);
  const [limitUpper , setUpper] =useState(1);
  const [limitLower , setLower] =useState(2);

  function calculate () {
    setUpper ((220 - age) * 0.85);
    setLower ((220 - age) * 0.65);

  }
  return (
    <div class="container">
      <h3 class="pt-2">Heart rate limits calculator</h3>
      <form>
        <div class="py-2">
          <label>Age </label>
          <input type="number" class="form-control" placeholder="Enter age" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div class="pb-2">
          <label>Heart rate limits </label>
          <output class="form-control">{limitLower.toFixed(2)} - {limitUpper.toFixed(3)}</output>
        </div>
        <button type="button" class="btn btn-primary" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
