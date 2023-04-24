import {
  type PokemonExtendedListPagination,
  type PokemonExtended,
  type IUrl,
} from "./../../types/pokemon";
import { type Dispatch } from "redux";
import {
  PokemonActionTypes,
  type PokemonAction,
  type PokemonShort,
} from "../../types/pokemon";
import PokemonService from "../../services/PokemonService";
import TypeService from "../../services/TypeService";

async function shortPokemonToExtendedPokemon(
  pokemonsShort: PokemonShort[]
): Promise<PokemonExtended[]> {
  console.log("pokemon short", pokemonsShort);
  const PokemonExtendedList = await Promise.all(
    pokemonsShort.map(async (pokemonShort: PokemonShort) => {
      const pokemonExtendedItemReponse = await PokemonService.getOneByUrl(
        pokemonShort.url
      );
      return pokemonExtendedItemReponse.data;
    })
  );

  return PokemonExtendedList;
}

export const getAllPokemons = (limit: number, offset: number): any => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.GET_ALL_POKEMONS_START });
      const pokemonShortListResponse = await PokemonService.getAll(
        limit,
        offset
      );
      const pokemonExtendedList = await shortPokemonToExtendedPokemon(
        pokemonShortListResponse.data.results
      );
      const pokemonExtendedListPagination = {
        ...pokemonShortListResponse.data,
        results: pokemonExtendedList,
      };
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_SUCCESS,
        payload: pokemonExtendedListPagination,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_FAILED,
        payload: error.message,
      });
    }
  };
};

export const getByTag = (types: IUrl[]): any => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.GET_ALL_POKEMONS_START });
      const responses = await Promise.all(
        types.map(async (type) => {
          const response = await TypeService.getOneByName(type.name);
          return response.data.pokemon;
        })
      );
      console.log(responses.flat());
      const pokemonShortList = responses
        .flat()
        .map((el) => el.pokemon)
        .filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.name === value.name)
        );
      const pokemonExtendedList = await shortPokemonToExtendedPokemon(
        pokemonShortList
      );
      const payload: PokemonExtendedListPagination = {
        count: 0,
        next: null,
        previous: null,
        results: pokemonExtendedList,
      };
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_SUCCESS,
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_FAILED,
        payload: error.message,
      });
    }
  };
};

export const getByName = (name: string): any => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      dispatch({ type: PokemonActionTypes.GET_ALL_POKEMONS_START });
      const response = await PokemonService.getOneByName(name);
      const payload: PokemonExtendedListPagination = {
        count: 0,
        next: null,
        previous: null,
        results: [response.data],
      };
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_SUCCESS,
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: PokemonActionTypes.GET_ALL_POKEMONS_FAILED,
        payload: error.message,
      });
    }
  };
};
