import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { type FC } from "react";
import { type PokemonExtended } from "../../types/pokemon";
import IconSword from "../../assets/icons/swords.svg";
import IconHeart from "../../assets/icons/heart.svg";
import IconShield from "../../assets/icons/shield.svg";
import { useNavigate } from "react-router-dom";
import TypeChips from "../TypeChips";
import { getImg } from "../../utils/getImg";

interface PokemonCardProps {
  pokemon: PokemonExtended;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const navigateToPokemon = (): void => {
    navigate(pokemon.name);
  };

  return (
    <Card onClick={navigateToPokemon} sx={{ backgroundColor: "#f1f5ff" }}>
      <CardMedia
        component="img"
        image={getImg(pokemon.sprites.other["official-artwork"].front_default)}
        sx={{
          padding: "1em 1em 0 1em",
          objectFit: "contain",
        }}
        height="150"
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ textTransform: "capitalize" }}
        >
          {pokemon.name}
        </Typography>
        <Stack direction="row" justifyContent="center">
          <TypeChips types={pokemon.types} />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <IconSword />
          <div>{pokemon.stats[0].base_stat}</div>
          <IconHeart />
          <div>{pokemon.stats[1].base_stat}</div>
          <IconShield />
          <div>{pokemon.stats[2].base_stat}</div>{" "}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
