import { selector } from "recoil"
import { filtroEventoState, listaEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"

const extraiData = (dataTempo: Date) => dataTempo.toISOString().slice(0, 10)
    
const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        
        const filtro = get(filtroEventoState)        
        const todosEventos = get(listaEventosState)        
    
        const eventos = todosEventos.filter(evento => {            
            
            // Filtra por data            
            const filtraData = !filtro.data 
                || extraiData(filtro.data) === extraiData(evento.inicio) 

            // Filtra por estado
            const filtraEstado = filtro.estado === "todos" 
                || (filtro.estado === "completo" && evento.completo) 
                || (filtro.estado === "incompleto" && !evento.completo)
                        
            return filtraData && filtraEstado
        })

        return eventos
    }
})

const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        
        const res = await fetch("http://localhost:8080/eventos")
        const eventos: IEvento[] = await res.json()
        return eventos.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})

export { eventosFiltradosState, eventosAsync }