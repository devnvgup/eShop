import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useStateValue } from './components/Provider/StateProvider';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';


function App() {
  const [{ userLogin }, _] = useStateValue()
  const navigate = useNavigate()
  useEffect(() => {
    if (!userLogin) {
      navigate("/login")
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App; 
