import { UseLoteria } from "../../../hooks";


const MegasenaPremio = () => {
    const {megasena} = UseLoteria();
    function Verifica(){
        if (megasena == undefined) {
            return <></>
        }
        else{
            const valor = megasena.valorEstimadoProximoConcurso.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        }

    }

    return (
        <>
            <img src="" alt="" />
            <h1>MEGA-SENA</h1>
            
            <p>Estimativa de prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}</p>
            <h3>{Verifica()}</h3>
        </>
    )
}

export default MegasenaPremio;