import { useEffect, type FC, useState } from "react";
import PokemonService from "../services/PokemonService";
import { useNavigate, useParams } from "react-router-dom";
import { type PokemonExtended } from "../types/pokemon";
import EvolutionList from "../components/EvolutionList";
import TypeChips from "../components/TypeChips";
import { getImg } from "../utils/getImg";

const PokemonDetails: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonExtended | null>(null);

  useEffect(() => {
    PokemonService.getOneByName(name)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toMainPage = (): void => {
    navigate("/");
  };

  return (
    pokemon && (
      <>
        <div className="header pr">
          <span className="btn-back btn" onClick={toMainPage}>
            Back
          </span>{" "}
          <h2 className="header__name">{pokemon.name}</h2>
        </div>
        <div className="pokemon">
          <div className="pokemon__img">
            <img
              src={getImg(
                pokemon.sprites.other["official-artwork"].front_default
              )}
              alt=""
              className="img"
            />
          </div>
          <div className="pokemon__info table">
            <h3>Info</h3>
            <table>
              <tbody>
                <tr>
                  <th>Type</th>
                  <td>
                    <TypeChips types={pokemon.types} />
                  </td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{pokemon.weight / 10} kg</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{pokemon.height / 10} m</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pokemon__stats table">
            <h3>Stats</h3>
            <table>
              <tbody>
                {pokemon.stats.map((stat, i) => (
                  <tr key={i}>
                    <th>{stat.stat.name}</th>
                    <td>{stat.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <EvolutionList name={pokemon.species.name} />
      </>
    )
  );
};

export default PokemonDetails;
