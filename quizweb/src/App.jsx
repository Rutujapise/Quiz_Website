import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Quiz from './Component/Quiz';
import Home from './Component/Home';

function App() {
 const [start, setStart] = useState(false);

  return start ? <Quiz /> : <Home onStart={() => setStart(true)} />;
};
export default App
