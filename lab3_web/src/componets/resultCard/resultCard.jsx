import './resultCard.css'

export function ResultCard(props) {
    const { image, title, desc } = props

    return <>
        <div className="resultCard">
            <div id='textContainer'>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <img src={image} alt="" />
        </div>
    </>
}