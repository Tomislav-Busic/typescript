import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const title = "Neki naslov";

  return (
    <div className="App">
      <Header title={title}/>
    </div>
  );
}

export default App;
