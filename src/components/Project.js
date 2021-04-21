import React from 'react'
import {useState, useEffect} from 'react'
import sanityClient from '../Client'
import '../css/Project.css'

const Project = () => {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            description, 
            image{
                asset ->{
                    _id,
                    url
                },
                alt
            },
            url
            
        }`)
            .then(data => setProjectData(data))
            .catch(console.error)
    }, [])

    const renderProjects = () => projectData.map(project => {
        return <article className='project-card' key={project.title}>
            <div className='project-card-top'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.url}>Link to GitHub</a>
            </div>
            <div className='project-card-bottom'>
                <img src={project.image.asset.url} alt={project.image.alt}/>
            </div>



        </article>
    })


    return (
<main className='post-page-container'>
        <div className='top-filler'>

        </div>
        
        <div className='title-card-container'>
            <div className='project-container'>
                <div className='projects-all'>
                    <h2 className='my-projects'>My Projects!</h2>
                    <div className='project-card-container'>
                        {projectData && renderProjects()}
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    )
}

export default Project
