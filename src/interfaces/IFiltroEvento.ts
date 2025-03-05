export enum EstadoEventoEnum {
    TODOS = "Todos",
    COMPLETO = "Completo",
    INCOMPLETO = "Incompleto",
}

export type EstadoEvento = "todos" | "completo" | "incompleto"

export interface IFiltroEvento {
    data?: Date | null
    estado: EstadoEvento
}