import portfolioData from '../data/portfolioData.json'
import Project from '../components/Project'
import { Link, Routes, Route } from 'react-router-dom'

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
            <Link to='others'>Other Projects</Link>

        </div>
    )
}