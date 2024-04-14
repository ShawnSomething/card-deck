import React from 'react';
import './App.css';
import { Hero } from './hero';
import { Writing } from './writing';
import { Coding } from './coding';
import { Animating } from './animating';
import { About } from './about';
import { NavBar } from './nav';
import { WritingCards } from './writing_cards';

function App() {
  return (
      <>
        <main className="App-main">
          <header>
            <NavBar></NavBar>
          </header>
          <body> 
            <Hero></Hero>
          </body>
          <body className="Card-decks">
            <ul>
              <li><Writing></Writing></li>
              <li><Coding></Coding></li>
              <li><Animating></Animating></li>
            </ul>
          </body>
          <footer>
            <About></About> 
          </footer>
        </main>
      </>


  );
}

export default App;
