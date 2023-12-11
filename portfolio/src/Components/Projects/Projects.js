import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Projects.css'
import MestoAddPic from '../../Images/mestoaddpic.png'
import MestoMainPic from '../../Images/mestomainpic.png'

import projectData from '../../data/projectsConst'
//What-do-you-dream-about?

function Projects() {

  return (
    <section className='projects'>
        <h2 className='projects__title'>Projects</h2>
        <ul className='projects__container'>
            <li className='projects__item'>
                <div className='projects__carusel'>
                    <h3 className='projects__carusel-project-name'>What-do-you-dream-about?</h3>
                    <div className='projects__carusel-pic-container'>
                        <img src={MestoAddPic} className='projects__carusel-pic' alt='NicePic from my project'></img>
                    </div>
                    <p>This is a beautiful app for individuals who don't want to answer the question 
                        'What do you want from me for your birthday or New Year?'
                    </p>
                    <p>The main idea is that a person can add what they want on their page, and their friends, 
                        when deciding what to gift at a party, can view a wonderful and truly desired present 
                        on the person's page. It's like a wish list, but more comprehensive. You can add pictures, 
                        links, filter presents, see the nearest present date, write messages to your friends, and more.
                    </p> 
                    <p>My backend is built on Node.js (Express), my database is MongoDB, 
                        and the frontend is developed using React. I've used clean CSS.
                    </p>   
                </div>
            </li>
            <li className='projects__item'>
                <div className='projects__carusel'>
                    <h3 className='projects__carusel-project-name'>Project Mesto</h3>
                    <div className='projects__carusel-pic-container'>
                        <img src={MestoMainPic} className='projects__carusel-pic' alt='NicePic from my project'></img>
                    </div>
                    
                    <p>This small app is all about adding pictures, like Instagram, but it's simpler.</p>
                    <p>Here, you can add and change your avatar picture and name. Additionally, you can add, 
                       delete, and change your other pictures and like pictures that your friends have added.
                    </p> 
                    <p>I have a few versions of this app. One is created using vanilla JavaScript, another is developed 
                       using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express.
                    </p>   
                </div>
            </li>
            <li className='projects__item'>
                <div className='projects__carusel'>
                    <h3 className='projects__carusel-project-name'>Project Mesto</h3>
                    <div className='projects__carusel-pic-container'>
                        <img src={MestoAddPic} className='projects__carusel-pic' alt='NicePic from my project'></img>
                    </div>
                    
                    <p>This small app is all about adding pictures, like Instagram, but it's simpler.</p>
                    <p>Here, you can add and change your avatar picture and name. Additionally, you can add, 
                       delete, and change your other pictures and like pictures that your friends have added.
                    </p> 
                    <p>I have a few versions of this app. One is created using vanilla JavaScript, another is developed 
                       using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express.
                    </p>   
                </div>
            </li>
            <li className='projects__item'></li>
            <li className='projects__item'></li>
        </ul>
    </section>
)
}

export default Projects;