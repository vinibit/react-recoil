import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroEventoState } from '../../state/atom';
import { EstadoEvento, IFiltroEvento } from '../../interfaces/IFiltroEvento';

const Filtro: React.FC = () => {

    const [data, setData] = useState("")
    const [estado, setEstado] = useState<EstadoEvento>("todos")
    const setFiltroEvento = useSetRecoilState(filtroEventoState)

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const filtro = { 
            data: data ? new Date(data) : null,
            estado
        } as IFiltroEvento
        setFiltroEvento(filtro)        
    }

    const opcoesEstado = [ "todos", "completo", "incompleto" ] as EstadoEvento[]

    return (<form className={style.Filtro} onSubmit={submeterForm}>
        
        <h3 className={style.titulo}>Filtrar por data</h3>        
        <input
            type="date"
            name="data"
            className={style.input}
            onChange={e => setData(e.target.value)}
            placeholder="Por data"
            value={data} />
        
        <h3 className={style.titulo}>Filtrar por estado</h3>
        <div className={style.radioGroup}>
        {
            opcoesEstado.map((opcao) => (
                <span key={opcao} className={style.radio}>
                    <input
                        id={opcao}
                        type="radio"
                        name="estado"
                        value={opcao}
                        className={style.radio}
                        onChange={e => setEstado(e.target.value as EstadoEvento)}
                        checked={opcao === estado} />
                    <label htmlFor={opcao} className={style.label}>
                        {opcao[0].toUpperCase() + opcao.slice(1)}
                    </label>
                </span>
            ))
        }
        </div>
        

        <button className={style.botao}>
            Filtrar
        </button>

    </form>)
}

export default Filtro