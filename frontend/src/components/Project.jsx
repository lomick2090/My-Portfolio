
export default function Project(props) {
    console.log(props.picture)


    return (
        //<a href={props.url}>
            <div className='project'>
                <h1>{props.title}</h1>
                <img src={props.picture} />
                <p>{props.description}</p>

            </div>
        //</a>
    )
}