/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-cond-assign */
import { UseLoteria } from "../../../hooks";
import "./Numeros.css"

const NumerosMegasena = () => {
    const { megasena } = UseLoteria();

    function Ganhadores() {
        var ganhador = ''

        if (megasena.quantidadeGanhadores > 0) {
            return ganhador = ((megasena.quantidadeGanhadores = 1) ? megasena.quantidadeGanhadores + " GANHADOR" : megasena.quantidadeGanhadores + " GANHADORES")
        }else{
            return ganhador = "ACUMULOU!"
        }
    }

    return (
        <div className="numerosContainer">
            <div className="numeroswrapper">
                {megasena.dezenas?.map((item) => (
                    <div key={item} className="numeroSorteado">
                        {item}
                    </div>
                ))}
            </div>
            <h1>{Ganhadores()}</h1>
            <p>Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}</p>
        </div>
    );
}

export default NumerosMegasena;