import PokemonList from "../pages/PokemonList";
import PokemonDetails from "../pages/PokemonDetails";

import { Navigate, type RouteProps } from "react-router-dom";

export enum AppRoutes {
  POKEMON_LIST = "pokemonList",
  POKEMON_DETAILS = "pokemonDetails",
  DEFAULT = "default",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.POKEMON_DETAILS]: "/:name",
  [AppRoutes.POKEMON_LIST]: "/",
  [AppRoutes.DEFAULT]: "*",
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
  [AppRoutes.DEFAULT]: {
    path: RoutePath.default,
    element: <Navigate to={RoutePath.pokemonList} />,
  },
};
