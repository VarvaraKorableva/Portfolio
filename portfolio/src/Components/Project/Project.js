import React from 'react'
import './Project.css'

function Project({project}) {

  return (
    <li className='project__item'>
        <div className='project__carusel'>
        <h3 className='project__carusel-project-name'>{project.title}</h3>
        <div className='project__carusel-pic-container'>
            <img src={project.pic} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picsecond} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picthird} className='project__carusel-pic' alt='NicePic from my project'></img>
        </div>
        <a href={project.description.link}></a>
        
        <p>{project.description.description}</p>
        <p>{project.description.mainIdea}</p> 
        <p>{project.description.technologies}</p>   
        </div>
    </li>
            

)
}

export default Project;