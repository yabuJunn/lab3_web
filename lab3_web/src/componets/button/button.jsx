import './button.css'

export function Button(props) {
    // eslint-disable-next-line react/prop-types
    const { text, action } = props
    return <>
        <button id='buttonComponent' onClick={action}>
            {text}
        </button>
    </>

}