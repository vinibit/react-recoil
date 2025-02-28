
import React from 'react'
import { IEvento } from '../../interfaces/IEvento';
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { listaEventosState } from '../../state/atom';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';

interface IKalendEvento {
	id?: number
	startAt: string
	endAt: string
	summary: string
	color: string
}

const Calendario: React.FC = () => {

	const eventosKalend = new Map<string, IKalendEvento[]>()
	//const [eventosKalend, setEventosKalend] = useState<Map<string, IKalendEvento[]>>(new Map<string, IKalendEvento[]>());
	const eventos = useRecoilValue(listaEventosState)	
	const atualizarEvento = useAtualizarEvento()

	eventos.forEach(evento => {
		const chave = evento.inicio.toISOString().slice(0, 10)
		if (!eventosKalend.has(chave)) {
		  eventosKalend.set(chave, [])
		}
		eventosKalend.get(chave)?.push({
		  id: evento.id,
		  startAt: evento.inicio.toISOString(),
		  endAt: evento.fim.toISOString(),
		  summary: evento.descricao,
		  color: 'blue'
		})
	  })

	const aoArrastarEvento: OnEventDragFinish = (
		kalendEventoInalterado: CalendarEvent,
		kalendEventoAtualizado: CalendarEvent
	) => {		
		const evento = eventos.find(evento => evento.descricao === kalendEventoAtualizado.summary)
		console.log(evento)
		if (evento) {
			console.log(evento?.descricao)
			
			const eventoAlterado = {
				id: kalendEventoAtualizado.id,
				descricao: kalendEventoAtualizado.summary,				
				inicio: new Date(kalendEventoAtualizado.startAt),
				fim: new Date(kalendEventoAtualizado.endAt),
				completo: evento.completo
			} as IEvento
			
			console.log(eventoAlterado)
			atualizarEvento(eventoAlterado)
		}
	}

	// useEffect(() => {
	// 	console.log(eventos)
	// 	eventos.forEach(evento => {
	// 		const chave = evento.inicio.toISOString().slice(0, 10)
	// 		setEventosKalend(eventosKalendAtual => {
	// 			const eventosKalend = new Map(eventosKalendAtual)
	// 			if (!eventosKalend.has(chave)) {
	// 				eventosKalend.set(chave, [])
	// 			}
	// 			eventosKalend.get(chave)?.push({
	// 				id: evento.id,
	// 				startAt: evento.inicio.toISOString(),
	// 				endAt: evento.fim.toISOString(),
	// 				summary: evento.descricao,
	// 				color: 'blue'
	// 			})
	// 			return eventosKalend
	// 		}) 
	// 	})
	// }, [eventos])

	return (
		<div className={style.Container}>
			<Kalend
				events={Object.fromEntries(eventosKalend)}
				initialDate={new Date().toISOString()}
				hourHeight={60}
				initialView={CalendarView.WEEK}
				timeFormat={'24'}
				weekDayStart={'Monday'}
				calendarIDsHidden={['work']}
				language={'customLanguage'}
				customLanguage={ptBR}
				onEventDragFinish={aoArrastarEvento}
			/>
		</div>
	)
}

export default Calendario