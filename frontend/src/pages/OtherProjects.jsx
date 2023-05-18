import { Link } from "react-router-dom"
import lesserProjects from '../data/lesserProjects.json'


export default function OtherProjects() {

    const projectElements = lesserProjects.map(project => {
        return (
            
            <div className='otherproject'>
                <a href={project.url} target="_blank">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </a>
                <br />
                <hr />
            </div>
        )
    })

    return (
        <div className='others'>
            <h1>Other Projects</h1>
            {projectElements}
            <Link to='../portfolio'>Back</Link>
        </div>
    )
}