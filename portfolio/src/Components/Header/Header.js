import React from 'react'
import './Header.css'
import myImage from '../../Images/mypic.jpg'

function Header() {

return (
    <header className="header">
        
            <nav className="header__navigation">
              <div className="header__logo-container">
                <div className="header__logo-round">VK</div>
                <p className="header__logo">Varvara Korableva</p>
              </div>
              <ul className="header__container-items">
                <li className="header__container-item">About me</li>
                <li className="header__container-item">My Stack</li>
                <li className="header__container-item">Projects</li>
                <li className="header__container-item">Experience</li>
                <li className="header__container-item">Contact</li>
              </ul>
            </nav>

        <div className="header__container">
            <div className="header__title-container">
                <h1 className="header__title">Korableva Varvara</h1>
                <h2 className="header__subtitle">Web Developer</h2>
                <p className="header__text">
                    Developer with more than two years of experience 
                    in developing commercial, educational, and pet projects. 
                    I have a strong focus on writing clean, maintainable, and scalable code. 
                    My ultimate goal is to enhance the user experience and provide a seamless 
                    and enjoyable browsing experience.
                </p>
                <button className="header__project-link">
                    Take a look on my Pojects →
                </button>
            </div>
            <img src={myImage} className="header__img"></img>
        </div>
    </header>
)
}

export default Header;