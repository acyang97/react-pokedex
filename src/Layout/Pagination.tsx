import React, { useContext } from "react";
import { PokedexContext } from "../contexts/PokedexContext";
import { Form } from "react-bootstrap";

const Pagination = () => {
  const { viewPreviousPokemons, viewNextPokemons, changeNumberPerPage } = useContext(PokedexContext);

  const onClickViewNextPokemons = async (): Promise<void> => {
    viewNextPokemons();
  };

  const onClickViewPreviousPokemons = async (): Promise<void> => {
    viewPreviousPokemons();
  };

  const changeNumberOfPokemonPerPage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    let numberPerPage: number = parseInt(event.target.value);
    changeNumberPerPage(numberPerPage);
  }

  return (
    <React.Fragment>
      <Form.Control
          as="select"
          custom
          onChange={changeNumberOfPokemonPerPage}
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Form.Control>
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
