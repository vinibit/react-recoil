import { useSetRecoilState } from "recoil"
import { IEvento } from "../../../interfaces/IEvento"
import { listaEventosState } from "../../atom"

const useExcluiEvento = () => {

    const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState)

    return (evento: IEvento) => {
        setListaEventos(listaAtual => listaAtual.filter(e => e.id !== evento.id))
    }
}

export default useExcluiEvento