import './progress.css'

export function Progress(props) {
    // eslint-disable-next-line react/prop-types
    const {actualPage, totalPages} = props
    return <>
        <div id='progressContainer'>
            <h2>{actualPage}/{totalPages}</h2>
        </div>
    </>
}