import React from 'react'
import './Project.css'
import Slider from '../Slider/Slider'
import * as projectData from '../../data/projectsConst'

function Project({project}) {

  /*
          <div className='project__carusel-pic-container'>
            <img src={project.pic} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picsecond} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picthird} className='project__carusel-pic' alt='NicePic from my project'></img>
        </div>
  */  

  return (
    <li className='project__item'>
        <div className='project__carusel'>
        <h3 className='project__carusel-project-name'>{project.title}</h3>
        <Slider
          projectData={projectData.pictures}
        />
        <a href={project.description.link}>Link</a>
        <p>{project.description.description}</p>
        <p>{project.description.mainIdea}</p> 
        <p>{project.description.technologies}</p>   
        </div>
    </li>
            

)
}

export default Project;