import { useEffect } from "react";
import MegasenaPremio from "../components/Megasena/SorteioPremio/SorteioPremio";
import { Contexto, Provider } from "../contexto";
import { UseLoteria } from "../hooks"

export const PageLoteria = () => {
    const { megasena, lotofacil } = UseLoteria();

    useEffect(() => {
        console.log(megasena);
        
    })

    return (
        <MegasenaPremio />
    );
}