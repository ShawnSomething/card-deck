import React from 'react';
import './App.css';
import { Title } from './title';
import { Writing } from './writing';
import { Coding } from './coding';
import { Animating } from './animating';
import { About } from './about';

function App() {
  return (
      <header className="App-header">
      <Title></Title>
      <Writing></Writing>
      <Coding></Coding>
      <Animating></Animating>
      <About></About>
      </header>
  );
}

export default App;
