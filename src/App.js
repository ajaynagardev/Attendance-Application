import './App.css'
import React from 'react';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <>
      <div >
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
      </>
    );
  }
}
export default App



