import {
  type PokemonState,
  type PokemonAction,
  PokemonActionTypes,
} from "../../types/pokemon";

const initalState: PokemonState = {
  pokemons: [],
  isLoading: false,
  error: null,
  count: 0,
  next: null,
  previous: null,
};

export const pokemonReducer = (
  state = initalState,
  action: PokemonAction
): PokemonState => {
  switch (action.type) {
    case PokemonActionTypes.GET_ALL_POKEMONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PokemonActionTypes.GET_ALL_POKEMONS_SUCCESS:
      console.log("payload", action.payload);
      return {
        isLoading: false,
        error: null,
        pokemons: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case PokemonActionTypes.GET_ALL_POKEMONS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
