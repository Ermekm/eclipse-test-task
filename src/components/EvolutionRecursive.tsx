import { type FC } from "react";
import EvolutionCard from "./EvolutionCard";

interface EvolutionRecursiveProps {
  chain: any[];
  lvl: number;
}

const EvolutionRecursive: FC<EvolutionRecursiveProps> = ({ chain, lvl }) => {
  const classes = "chain__item" + (lvl !== 0 ? " notFirst" : "");
  return (
    <div className="chain">
      {chain &&
        chain.map((el) => (
          <div className={classes} key={el.species?.name}>
            <EvolutionCard pokemonName={el.species?.name} />
            <EvolutionRecursive chain={el.evolves_to} lvl={lvl + 1} />
          </div>
        ))}
    </div>
  );
};

export default EvolutionRecursive;
