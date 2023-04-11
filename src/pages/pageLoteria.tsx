import { useEffect } from "react";
import MegasenaPremio from "../components/Megasena/SorteioPremio/SorteioPremio";
import { UseLoteria } from "../hooks";
import NumerosMegasena from "../components/Megasena/Numeros/Numeros";
import "./pageLoteria.css"

export const PageLoteria = () => {
  const { megasena, lotofacil } = UseLoteria();

  useEffect(() => {
    console.log(megasena);
  });

  return (
    <>
      <div className="megasenaContainer">
        <MegasenaPremio />
        <NumerosMegasena />
      </div>
    </>
  );
};
