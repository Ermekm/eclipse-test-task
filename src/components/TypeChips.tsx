import { Chip } from "@mui/material";
import { type PokemonType } from "../types/pokemon";
import { type FC } from "react";

interface TypeChipsProps {
  types: PokemonType[];
}

const TypeChips: FC<TypeChipsProps> = ({ types }) => {
  return (
    <>
      {types.map((type) => (
        <Chip
          className="type"
          label={type.type.name}
          sx={{
            backgroundColor: "types." + type.type.name,
            color: "#FFF",
          }}
          key={type.type.name}
        />
      ))}
    </>
  );
};

export default TypeChips;
