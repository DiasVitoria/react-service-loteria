import axios from "axios";
import { cepProps } from "../types";

class Cep{
    async get(cep: string):Promise<cepProps>{
        const {data} = await axios.get(cep)
        return data;
    }
}

export default new Cep();