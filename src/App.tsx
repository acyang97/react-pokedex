import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonList from "./components/PokemonList";
import Header from "./Layout/Header";
import PokemonContextProvider from './contexts/PokedexContext';
import CapturedPokemonContextProvider from './contexts/CapturedPokemonContext';
import Pagination from './Layout/Pagination';
import CapturedPokemonList from "./components/CapturedPokemonList";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="App">
        <PokemonContextProvider>
          <CapturedPokemonContextProvider>
            <Header />
            <div className="pagination">
              <Pagination />
            </div>
            <CapturedPokemonList />
            <div className="empty-space">
            </div>
            <PokemonList />
          </CapturedPokemonContextProvider>
        </PokemonContextProvider>
      </div>
    </React.Fragment>
  );
};

export default App;
