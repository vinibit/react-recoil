export enum EstadoEventoEnum {
    TODOS = "Todos",
    COMPLETO = "Completo",
    INCOMPLETO = "Incompleto",
}

export interface IFiltroEvento {
    data?: Date | null
    estado: EstadoEventoEnum 
}