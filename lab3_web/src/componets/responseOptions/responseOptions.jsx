import './responseOptions.css'

import { ResponseCard } from '../responseCard/responseCard'


export function ResponseOptions(props) {
    // const {type, quant} = props

    return <>
        <div id='respondeOptions'>
            <ResponseCard type="text" text="Respuesta"></ResponseCard>
            <ResponseCard type="text" text="Respuesta"></ResponseCard>
            <ResponseCard type="text" text="Respuesta"></ResponseCard>
            <ResponseCard type="text" text="Respuesta"></ResponseCard>
        </div>
    </>
}