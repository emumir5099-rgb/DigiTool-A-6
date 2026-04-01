import { useState } from "react";
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart}></Navbar>
    </>
  )
}

export default App