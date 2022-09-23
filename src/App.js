import { useState } from 'react';
import './App.css';
import Guns from './components/Guns/Guns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () =>{
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Navbar count={count}/>
      <Guns countIncrease={countIncrease}/>
    </div>
  );
}

export default App;
