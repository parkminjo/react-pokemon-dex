import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonCard = ({ pokemon }) => {
  const { id, img_url, korean_name, types } = pokemon;

  const { pokemonList, addPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  /** 포켓몬 카드 UI */
  return (
    <Card onClick={() => navigate(`/detail?id=${id}`)}>
      <P>No. {id}</P>
      <H1>{korean_name}</H1>

      <img src={img_url} alt="포켓몬 사진" />

      <TypesDiv>
        {types.map((type) => (
          <Type key={type}>{type}</Type>
        ))}
      </TypesDiv>

      <AddButton
        onClick={(event) => {
          event.stopPropagation();
          addPokemon(pokemon);
        }}
      >
        {pokemonList.some((pokemon) => pokemon.id === id) ? (
          <FontAwesomeIcon icon={faSolidHeart} />
        ) : (
          <FontAwesomeIcon icon={faRegularHeart} />
        )}
      </AddButton>
    </Card>
  );
};

export default PokemonCard;

/** styled component */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 260px;
  background-color: white;
  border: 4px solid #ffcb03;
  border-radius: 1rem;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    opacity: 80%;
  }
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const TypesDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 10px 0 1rem 0;
`;

const Type = styled.button`
  width: 20px;
  background-color: #ced4d9;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
`;

const AddButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: #697076;
  cursor: pointer;
  &:hover {
    color: #ee4e4e;
  }
`;
