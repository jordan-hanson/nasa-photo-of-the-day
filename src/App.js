import React from "react";
// import "./App.css";
import HomePage from './components/home'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  )
}
export default App