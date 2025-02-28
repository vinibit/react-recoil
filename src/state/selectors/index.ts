import { selector } from "recoil";
import { filtroEventoState, listaEventosState } from "../atom";

const extraiData = (dataTempo: Date) => dataTempo.toISOString().slice(0, 10)
    
const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        
        const filtro = get(filtroEventoState)
        const todosEventos = get(listaEventosState)        
    
        const eventos = todosEventos.filter(evento => {
            if (!filtro.data) return true
            
            const diaFiltro = extraiData(filtro.data)
            const diaEvento = extraiData(evento.inicio)
            return diaFiltro === diaEvento        
        })

        return eventos
    }
})

export default eventosFiltradosState