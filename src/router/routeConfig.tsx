import PokemonList from "../pages/PokemonList";
import PokemonDetails from "../pages/PokemonDetails";

import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
  POKEMON_LIST = "pokemonList",
  POKEMON_DETAILS = "pokemonDetails",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.POKEMON_LIST]: "/",
  [AppRoutes.POKEMON_DETAILS]: "/:name",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.POKEMON_LIST]: {
    path: RoutePath.pokemonList,
    element: <PokemonList />,
  },
  [AppRoutes.POKEMON_DETAILS]: {
    path: RoutePath.pokemonDetails,
    element: <PokemonDetails />,
  },
};
