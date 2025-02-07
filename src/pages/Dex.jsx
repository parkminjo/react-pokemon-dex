import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const Dex = ({ pokemonList, setPokemonList }) => {
  /** 포켓몬 도감 UI */
  return (
    <Div>
      <Header />
      <Container>
        <Dashboard pokemonList={pokemonList} setPokemonList={setPokemonList} />
        <PokemonList
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </Container>
    </Div>
  );
};

export default Dex;

/** styled component */
const Div = styled.div`
  background-color: #121212;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 3rem 0 3rem;
  padding: 1rem 0 5rem 0;
  min-height: auto;
`;
