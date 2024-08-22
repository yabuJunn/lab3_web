import './responseCard.css'

export function ResponseCard(props) {
    // eslint-disable-next-line react/prop-types
    const { type, text, image, numQ, setRespuestas, respuestas } = props

    switch (type) {
        case "text":
            return <>
                <div id="responseCardTextContainer" onClick={() => {
                    console.log(numQ)

                    switch (numQ) {
                        case 1:
                            setRespuestas((prevState) => ({ ...prevState, pregunta1: text }))
                            break;
                        case 3:
                            setRespuestas((prevState) => ({ ...prevState, pregunta3: text }))
                            break;
                        case 4:
                            setRespuestas((prevState) => ({ ...prevState, pregunta4: text }))
                            break;
                        case 6:
                            setRespuestas((prevState) => ({ ...prevState, pregunta6: text }))
                            break;
                        case 9:
                            setRespuestas((prevState) => ({ ...prevState, pregunta9: text }))
                            break;
                        case 10:
                            setRespuestas((prevState) => ({ ...prevState, pregunta10: text }))
                            break;
                    }

                }}>
                    <p>{text}</p>
                </div>
            </>
        case "image":

            {
                return <>
                    <div id='responseCardImage' onClick={() => {
                        switch (numQ) {
                            case 2:
                                setRespuestas((prevState) => ({ ...prevState, pregunta2: image }))
                                break;
                            case 5:
                                setRespuestas((prevState) => ({ ...prevState, pregunta5: image }))
                                break;
                            case 7:
                                setRespuestas((prevState) => ({ ...prevState, pregunta7: image }))
                                break;
                            case 8:
                                setRespuestas((prevState) => ({ ...prevState, pregunta8: image }))
                                break;
                        }
                    }}>
                        <div></div>

                        <img src={image} alt="" />
                    </div >
                </>

            }


    }
}