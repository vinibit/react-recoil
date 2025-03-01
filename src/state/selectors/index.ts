import { selector } from "recoil";
import { filtroEventoState, listaEventosState } from "../atom";
import { EstadoEventoEnum } from "../../interfaces/IFiltroEvento";

const extraiData = (dataTempo: Date) => dataTempo.toISOString().slice(0, 10)
    
const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        
        const filtro = get(filtroEventoState)
        console.log(filtro)
        const todosEventos = get(listaEventosState)        
    
        const eventos = todosEventos.filter(evento => {            
            
            // Filtra por data            
            const filtraData = !filtro.data 
                || extraiData(filtro.data) === extraiData(evento.inicio) 

            // Filtra por estado
            const filtraEstado = filtro.estado === EstadoEventoEnum.TODOS 
                || (filtro.estado === EstadoEventoEnum.COMPLETO && evento.completo) 
                || (filtro.estado === EstadoEventoEnum.INCOMPLETO && !evento.completo)
            
            console.log(filtraData, filtraEstado)
            return filtraData && filtraEstado
        })

        return eventos
    }
})

export default eventosFiltradosState