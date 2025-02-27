import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaEventosState } from '../../../state/atom';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
	
	const atualizaEvento = useAtualizarEvento()

	const alteraStatus = () => {	

		const eventoAlterado: IEvento = { 
			...evento, 
			completo: !evento.completo 
		}	
		
		atualizaEvento(eventoAlterado)
	}

	const estilos = [
		'far',
		'fa-2x',
		evento.completo ? 'fa-check-square' : 'fa-square'
	]

	return (<i className={estilos.join(' ')} onClick={alteraStatus}></i>)
}

export default EventoCheckbox