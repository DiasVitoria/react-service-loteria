/* eslint-disable no-cond-assign */
import { UseLoteria } from "../../../hooks";
import "./Numeros.css"

const NumerosMegasena = () => {
    const { megasena } = UseLoteria();

    function Ganhadores(){
        var ganhador = ''
        
        if (megasena.quantidadeGanhadores > 0) {
            return ganhador = ((megasena.quantidadeGanhadores = 1) ? megasena.quantidadeGanhadores + " ganhador" : megasena.quantidadeGanhadores + " ganhadores")
        }
    }

    return (
        <div className="numeroswrapper">
            {megasena.dezenas?.map((item) => (
                <div key={item} className="numeroSorteado">
                    {item}
                </div>
            ))}
            <h1>{Ganhadores()}</h1>
        </div>
    );
}

export default NumerosMegasena;