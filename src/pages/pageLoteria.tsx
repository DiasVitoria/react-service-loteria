import MegasenaPremio from "../components/Megasena/SorteioPremio/SorteioPremio";
import NumerosMegasena from "../components/Megasena/Numeros/Numeros";
import "./pageLoteria.css"
import LotofacilPremio from "../components/lotofacil/SorteioPremio/SorteioPremioLotofacil";
import NumerosLotofacil from "../components/lotofacil/Numeros/NumerosLotofacil";

export const PageLoteria = () => {

  return (
    <>
      <div className="megasenaContainer">
        <MegasenaPremio />
        <NumerosMegasena />
      </div>
      <div className="bordinha" />
      <div className="lotofacilContainer">
        <LotofacilPremio />
        <NumerosLotofacil />
      </div>
      <div className="bordinha" />

    </>
  );
};
