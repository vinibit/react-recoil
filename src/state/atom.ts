import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEvento } from "../interfaces/IFiltroEvento";
import { eventosAsync } from "./selectors";

export const listaEventosState = atom<IEvento[]>({
    key: 'listaEventosState',
    default: eventosAsync
})

export const filtroEventoState = atom<IFiltroEvento>({
    key: 'filtroEventoState',
    default: { estado: "todos" }
})