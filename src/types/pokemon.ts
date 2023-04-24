export interface IUrl {
  name: string;
  url: string;
}

interface IPagination {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokemonShort extends IUrl {}

export interface PokemonAbility {
  ability: IUrl;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies extends IUrl {}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: IUrl;
}

export interface PokemonType {
  slot: number;
  type: IUrl;
}

export interface PokemonExtended {
  abilities: PokemonAbility[];
  height: number;
  id: number;
  name: string;
  species: PokemonSpecies;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonShortListPagination extends IPagination {
  results: PokemonShort[];
}

export interface PokemonExtendedListPagination extends IPagination {
  results: PokemonExtended[];
}

export enum PokemonActionTypes {
  GET_ALL_POKEMONS_START = "GET_ALL_POKEMONS_START",
  GET_ALL_POKEMONS_SUCCESS = "GET_ALL_POKEMONS_SUCCESS",
  GET_ALL_POKEMONS_FAILED = "GET_ALL_POKEMONS_FAILED",
}

export interface PokemonState extends IPagination {
  pokemons: PokemonExtended[];
  isLoading: boolean;
  error: null | string;
}

interface getAllPokemonsStart {
  type: PokemonActionTypes.GET_ALL_POKEMONS_START;
}
interface getAllPokemonsSuccess {
  type: PokemonActionTypes.GET_ALL_POKEMONS_SUCCESS;
  payload: PokemonExtendedListPagination;
}
interface getAllPokemonsFailed {
  type: PokemonActionTypes.GET_ALL_POKEMONS_FAILED;
  payload: string;
}

export type PokemonAction =
  | getAllPokemonsStart
  | getAllPokemonsSuccess
  | getAllPokemonsFailed;
