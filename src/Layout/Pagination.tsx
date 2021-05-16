import React, { useContext } from "react";
import { PokedexContext } from "../contexts/PokedexContext";

const Pagination = () => {
  const { viewPreviousPokemons, viewNextPokemons } = useContext(PokedexContext);

  const onClickViewNextPokemons = () => {
    viewNextPokemons();
  };

  const onClickViewPreviousPokemons = () => {
    viewPreviousPokemons();
  };

  return (
    <React.Fragment>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickViewPreviousPokemons}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClickViewNextPokemons}
        >
          Next
        </button>
      </div>
      {/* <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> */}
    </React.Fragment>
    
  );
};

export default Pagination;
