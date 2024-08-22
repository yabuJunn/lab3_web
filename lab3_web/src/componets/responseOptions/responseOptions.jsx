import './responseOptions.css'

import { ResponseCard } from '../responseCard/responseCard'


export function ResponseOptions(props) {
    // eslint-disable-next-line react/prop-types
    const { type, quant, numQ, actionRes } = props

    if (type === "text") {
        return <>
            <div id='respondeOptions'>
                {quant.map((response) => (<ResponseCard type="text" text={response} key={response} numQ={numQ} actionRes={actionRes}></ResponseCard>))}
            </div>
        </>
    }

    if (type === "image") {
        return <>
            <div id='respondeOptions'>
                {quant.map((image) => (<ResponseCard type="image" image={image} key={image} numQ={numQ} actionRes={actionRes}></ResponseCard>))}
            </div>
        </>
    }

}