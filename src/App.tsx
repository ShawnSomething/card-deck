import './App.css';
import { Hero } from './hero';
import { Writing } from './writing';
import { Coding } from './coding';
import { Animating } from './animating';
import { About } from './about';
import { NavBar } from './nav';

function App() {
  return (
      <>
        <main className="App-home">
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
          <body><About></About></body>
        </main>
      </>


  );
}

export default App;
