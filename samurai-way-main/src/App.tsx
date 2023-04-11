import React from 'react';
import './App.css';
import Tehnologies from "./components/Tehnologies";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
        <Tehnologies titleValue = {"Menu"}  />
        <Header />
    </div>
  );
}

export default App;
