import { UseLoteria } from "../../../hooks";
import logoMegasena from "../../../assets/trevo-megasena.png";
import "./SorteioPremio.css"

const MegasenaPremio = () => {
  const { megasena } = UseLoteria();

  function VerificaValor() {
    if (megasena.valorEstimadoProximoConcurso != undefined) {
      const valor = megasena.valorEstimadoProximoConcurso.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
      return valor;
    }
  }

  return (
    <>
      <div className="megasenaWrapper">
        <img src={logoMegasena} alt="" />
        <h1>MEGA-SENA</h1>

        <p>
          Estimativa de prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}:
        </p>
        <h3>{VerificaValor()}</h3>
      </div>
    </>
  );
};

export default MegasenaPremio;
