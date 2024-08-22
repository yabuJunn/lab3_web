import './responseCard.css'

export function ResponseCard(props) {
    // eslint-disable-next-line react/prop-types
    const { type, text, image } = props

    switch (type) {
        case "text":
            return <>
                <div id="responseCardTextContainer">
                    <p>{text}</p>
                </div>
            </>
        case "image":

            {


                console.log(image)

                return <>
                    <div id='responseCardImage'>
                        <div></div>

                        <img src={image} alt="" />
                    </div >
                </>

            }


    }
}