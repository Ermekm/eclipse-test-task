import { type FC, useEffect, useState } from "react";
import PokemonService from "../services/PokemonService";
import EvolutionRecursive from "./EvolutionRecursive";

interface EvolutionListProps {
  name: string;
}

const EvolutionList: FC<EvolutionListProps> = ({ name }) => {
  const [chain, setChain] = useState({ species: null });

  const fetchChain = async (): Promise<any> => {
    try {
      const species = await PokemonService.getSpeciesByName(name);
      const chain = await PokemonService.getEvolutionChainByUrl(
        species.data.evolution_chain.url
      );
      setChain(chain.data.chain);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChain().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="evolution">
      <h2 className="header">Evolution chain</h2>
      {chain.species && <EvolutionRecursive chain={[chain]} lvl={0} />}
    </div>
  );
};

export default EvolutionList;
