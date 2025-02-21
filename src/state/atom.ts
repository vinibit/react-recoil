import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

const listaEventosDefault: IEvento[] = [
    {
        "descricao": "Estudar React",
        "inicio": new Date("2025-02-21T09:00"),
        "fim": new Date("2025-02-21T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2025-02-22T09:00"),
        "fim": new Date("2025-02-22T11:00"),
        "completo": false,
        "id": 1642342959
    }
]

export const listaEventosState = atom<IEvento[]>({
    key: 'listaEventosState',
    default: listaEventosDefault
})