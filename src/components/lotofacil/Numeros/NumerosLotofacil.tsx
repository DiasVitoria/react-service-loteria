/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-cond-assign */
import { UseLoteria } from "../../../hooks";
import "./NumerosLotofacil.css"

const NumerosLotofacil = () => {
    const { lotofacil } = UseLoteria();
    let index = 0;

    function Ganhadores() {
        var ganhador = ''

        if (lotofacil.quantidadeGanhadores > 0) {
            return ganhador = ((lotofacil.quantidadeGanhadores = 1) ? lotofacil.quantidadeGanhadores + " GANHADOR" : lotofacil.quantidadeGanhadores + " GANHADORES")
        } else{
            return ganhador = "ACUMULOU!"
        }
    }

    return (
        <div className="numerosContainerLotofacil">
            <div className="numeroswrapperLotofacil">
                {lotofacil.dezenas?.map((item) => {
                    index++;

                    return (
                        <div key={item} className={index < 11 ? "numeroSorteadoLotofacil bordaNumeroSorteadoLotofacil" : "numeroSorteadoLotofacil"}>
                            {item}
                        </div>
                )})}
            </div>
            <h1>{Ganhadores()}</h1>
            <p>Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}</p>
        </div>
    );
}

export default NumerosLotofacil;