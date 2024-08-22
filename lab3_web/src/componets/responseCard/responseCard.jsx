import './responseCard.css'

export function ResponseCard(props) {
    // eslint-disable-next-line react/prop-types
    const { type, text, image, numQ, actionRes } = props

    switch (type) {
        case "text":
            return <>
                <div id="responseCardTextContainer" onClick={() => { console.log(numQ, text) }}>
                    <p>{text}</p>
                </div>
            </>
        case "image":

            {


                console.log(image)

                return <>
                    <div id='responseCardImage' onClick={() => { console.log(numQ, image) }}>
                        <div></div>

                        <img src={image} alt="" />
                    </div >
                </>

            }


    }
}