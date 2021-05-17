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
    </React.Fragment>
  );
};

export default Pagination;
