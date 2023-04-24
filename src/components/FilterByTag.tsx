import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState, type FC, useEffect } from "react";
import TypeService from "../services/TypeService";
import { useDispatch } from "react-redux";
import { getByTag } from "../store/actions/pokemon";
import { type IUrl } from "../types/pokemon";

const FilterByTag: FC = () => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const loading = open && types.length === 0;

  useEffect(() => {
    TypeService.getAll()
      .then((res) => {
        setTypes(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchPokemons = (value: IUrl[]): void => {
    if (value.length) {
      dispatch(getByTag(value));
    }
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      multiple
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
        fetchPokemons(value);
      }}
      options={types}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Filter by type"
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

export default FilterByTag;
