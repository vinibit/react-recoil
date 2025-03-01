import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { EstadoEventoEnum, IFiltroEvento } from "../interfaces/IFiltroEvento";

const listaEventosDefault: IEvento[] = [
    {
        "descricao": "Estudar React",
        "inicio": new Date("2025-02-24T09:00"),
        "fim": new Date("2025-02-24T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2025-02-25T09:00"),
        "fim": new Date("2025-02-25T11:00"),
        "completo": false,
        "id": 1642342959
    }
]

export const listaEventosState = atom<IEvento[]>({
    key: 'listaEventosState',
    default: listaEventosDefault
})

export const filtroEventoState = atom<IFiltroEvento>({
    key: 'filtroEventoState',
    default: { estado: EstadoEventoEnum.TODOS }
})