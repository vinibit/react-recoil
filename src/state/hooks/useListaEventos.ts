import { useRecoilValue } from "recoil"
import { listaEventosState } from "../atom"

const useListaEventos = () => {
    
    return useRecoilValue(listaEventosState)
}

export default useListaEventos
