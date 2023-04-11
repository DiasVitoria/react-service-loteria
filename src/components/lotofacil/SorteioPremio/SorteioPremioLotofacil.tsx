import { UseLoteria } from "../../../hooks";
import logolotofacil from "../../../assets/trevo-lotofacil.png";
import "./SorteioPremioLotofacil.css"

const LotofacilPremio = () => {
  const { lotofacil } = UseLoteria();

  function VerificaValor() {
    if (lotofacil.valorEstimadoProximoConcurso != undefined) {
      const valor = lotofacil.valorEstimadoProximoConcurso.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      return valor;
    }
  }

  return (
    <>
      <div className="lotofacilWrapper">
        <img src={logolotofacil} alt="" />
        <h1>LOTOFÁCIL</h1>

        <p>
          Estimativa de prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}:
        </p>
        <h3>{VerificaValor()}</h3>
      </div>
    </>
  );
};

export default LotofacilPremio;
