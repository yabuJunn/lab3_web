import './responseOptions.css'

import { ResponseCard } from '../responseCard/responseCard'


export function ResponseOptions(props) {
    // eslint-disable-next-line react/prop-types
    const { type, quant, numQ, setRespuestas, respuestas } = props

    if (type === "text") {
        return <>
            <div id='respondeOptions'>
                {quant.map((response) => (<ResponseCard type="text" text={response} key={response} numQ={numQ} setRespuestas={setRespuestas} respuestas={respuestas}></ResponseCard>))}
            </div>
        </>
    }

    if (type === "image") {
        return <>
            <div id='respondeOptions'>
                {quant.map((image) => (<ResponseCard type="image" image={image} key={image} numQ={numQ} setRespuestas={setRespuestas} respuestas={respuestas}></ResponseCard>))}
            </div>
        </>
    }

}