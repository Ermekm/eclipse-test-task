import { useState, type FC, useEffect } from "react";
import PokemonService from "../services/PokemonService";
import { type PokemonExtended } from "../types/pokemon";
import TypeChips from "./TypeChips";
import { Stack } from "@mui/material";
import { getImg } from "../utils/getImg";

interface EvolutionCardProps {
  pokemonName: string;
}

const EvolutionCard: FC<EvolutionCardProps> = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState<PokemonExtended>(null);

  useEffect(() => {
    PokemonService.getOneByName(pokemonName)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    pokemon && (
      <div className="card">
        <div className="card__img">
          <img
            src={getImg(
              pokemon.sprites.other["official-artwork"].front_default
            )}
            className="img"
            alt=""
          />
        </div>
        <div>{pokemon.name}</div>
        <Stack direction="row" justifyContent="center">
          <TypeChips types={pokemon.types} />
        </Stack>
      </div>
    )
  );
};

export default EvolutionCard;
