import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonList from "./components/PokemonList";
import Header from "./Layout/Header";
import PokemonContextProvider from './contexts/PokedexContext';
import Pagination from './Layout/Pagination';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="App">
        <PokemonContextProvider>
          <Header />
          <div className="pagination">
            <Pagination />
          </div>
          <PokemonList />
        </PokemonContextProvider>
      </div>
    </React.Fragment>
  );
};

export default App;
