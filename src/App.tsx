import React from 'react';
import './App.css';
import { Title } from './title';
import { Writing } from './writing';
import { Coding } from './coding';
import { Animating } from './animating';
import { About } from './about';
import { NavBar } from './nav';

function App() {
  return (
      <header className="App-header">
      <NavBar></NavBar>
      <Title></Title>
      <Writing></Writing>
      <Coding></Coding>
      <Animating></Animating>
      <About></About>
      </header>
  );
}

export default App;
