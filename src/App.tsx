import React, {useState} from 'react';
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Section from './Components/Section';

function App() {
  const title = "Neki naslov";
  const [count, setCount] = useState<number>(1);

  return (
    <div className="App">
      <Header title={title}/>
      <Section title="Drugi naslov">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}<Counter/>
    </div>
  );
}

export default App;
