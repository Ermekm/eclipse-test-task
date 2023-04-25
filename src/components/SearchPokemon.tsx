import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, type FC, useState } from "react";
import PokemonService from "../services/PokemonService";
import { getByName } from "../store/actions/pokemon";
import { useDispatch } from "react-redux";

const SearchPokemon: FC = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const loading = open && pokemons.length === 0;

  useEffect(() => {
    PokemonService.getAll(2000, 0)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const search = (name: string | undefined): void => {
    if (name) {
      dispatch(getByName(name));
    }
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      onChange={(e, value) => {
        search(value?.name);
      }}
      options={pokemons}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search by name"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchPokemon;
