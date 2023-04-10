
import { createContext, useContext, useEffect, useState } from "react";
import loterias from "../services/loterias";
import { loteriaProps, Props } from "../types";

const Contexto = createContext({} as loteriaProps);

function Provider({children}:any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [lotofacil, setLotofacil] = useState({} as Props);
    
    useEffect(() => {
        (
        async () => {
            const resp = await loterias.get()
            setMegasena(resp.megasena);
            setLotofacil(resp.lotofacil);

        })();
    },[])

    return (
        <Contexto.Provider value={{ megasena, lotofacil}}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };