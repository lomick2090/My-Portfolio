import portfolioData from '../data/portfolioData.json'
import Project from '../components/Project'

export default function Portfolio() {

    const projectElements = portfolioData.map(project => {
        return (
            <Project 
                key={project.title} 
                title={project.title} 
                description={project.description} 
                url={project.url} 
                picture={project.picture}
            />
        )
    })

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <hr />
            <div className="projectholder">
                {projectElements}
            </div>
        </div>
    )
}