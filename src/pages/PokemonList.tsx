import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Toolbar,
} from "@mui/material";
import { useEffect, type FC, useState } from "react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { useAppSelector } from "../hooks/useAppSelector";
import { getAllPokemons } from "../store/actions/pokemon";
import { useDispatch } from "react-redux";
import SearchPokemon from "../components/SearchPokemon";
import FilterByTag from "../components/FilterByTag";
import AppPagination from "../components/AppPagination";

const PokemonList: FC = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, count } = useAppSelector(
    (state) => state.pokemons
  );
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);

  useEffect(() => {
    dispatch(getAllPokemons(limit, limit * page));
  }, [page, limit]);

  return (
    <>
      <AppBar sx={{ p: 1, backgroundColor: "#E3F0FF" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <SearchPokemon />
            <FilterByTag />
          </Toolbar>
        </Container>
      </AppBar>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ mt: 12 }}>
          {pokemons.map((pokemon) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      )}
      <AppPagination
        count={count}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </>
  );
};

export default PokemonList;
