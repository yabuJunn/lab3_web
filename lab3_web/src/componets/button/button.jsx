import './button.css'

export function Button(props) {
    // eslint-disable-next-line react/prop-types
    const { text } = props
    return <>
        <button id='buttonComponent'>
            {text}
        </button>
    </>

}