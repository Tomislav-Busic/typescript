import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Section from './Components/Section';

function App() {
  const title = "Neki naslov";

  return (
    <div className="App">
      <Header title={title}/>
      <Section title="Drugi naslov">This is my section</Section>
      <Counter />
    </div>
  );
}

export default App;
