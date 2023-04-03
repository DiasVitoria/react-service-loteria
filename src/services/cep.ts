import axios from "axios";
import { cepProps } from "../types";
import api from "./api";

class Cep{
    async get(cep: string):Promise<cepProps>{
        const {data} = await api.get(`/${cep}/json`)
        return data;
    }
}

export default new Cep();