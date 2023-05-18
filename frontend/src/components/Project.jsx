
export default function Project(props) {
    return (
        <a href={props.url} target="_blank">
            <div className='project'>
                <h1>{props.title}</h1>
                <img src={props.picture} />
                <p>{props.description}</p>
            </div>
        </a>
    )
}