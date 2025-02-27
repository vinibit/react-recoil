import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaEventosState } from "../atom"

const useAtualizarEvento = () => {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState)
    return (evento: IEvento) => {
        setListaEventos(listaAtual => {
            const index = listaAtual.findIndex(e => e.id === evento.id)
            return [...listaAtual.slice(0, index), evento, ...listaAtual.slice(index + 1)]
        })
    }
}

export default useAtualizarEvento