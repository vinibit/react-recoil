import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";
import { getNewId } from "../../util/modelHelper";

const useAdicionaEvento = () => {
    
    const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState)
    
    const validaEvento = (evento: IEvento) => {
        if (evento.inicio < new Date()) {
            throw new Error("Erro: Evento não pode ser cadastrado com data retroativa.")
        }
    }
    
    return (evento: IEvento) => {
        
        validaEvento(evento)

        evento.id = getNewId()
        return setListaEventos(eventos => [...eventos, evento])
    }
}

export default useAdicionaEvento