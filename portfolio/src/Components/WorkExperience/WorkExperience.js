import React from 'react'
import './WorkExperience.css'

function WorkExperience() {

return (
   <section className="experience">
        <h2 className="experience__title">Experience</h2>
          <div className="experience__wrapper">
            <h3 className="experience__subtitle">Dec 2022 - Present: Web-Developer, Veles Research, (Software Development)</h3>
            <ul className="experience__container">
                <li>Application development (learning platform, testing task platform, 
                    online store, social network)
                </li>
                <li>
                    Participation in the design and architecture of applications and websites
                </li>
                <li>
                    Collaborate with Backend Developers (Python, Django, DRF, PostgeSQL, 
                    Ruby on Rails,NodeJS) to create API, merge and review code
                </li>
                <li>Refactoring of the codebase, including branch management and merging changes
                </li>
            </ul>
            <h3 className="experience__subtitle">Nov 2021 - Oct 2022: Web-Developer (Student) in Practicum by Yandex (Educational Platform)</h3>
            <ul className="experience__container">
                <li>Developed applications and websites using React, JavaScript, Object-Oriented
                    Programming (OOP), HTML, and CSS</li>
                <li>Developed the server-side of the application (including API creation, database
                    management, Node.js, Express, MongoDB)</li>
                <li>Deployed web applications to servers using Webpack, NGINX, pm2</li>
            </ul>
            <h3 className="experience__subtitle">May 2021 - Oct 2022: Web-Developer (Junior Developer) AUTO49 (Selling goods store)</h3>
            <ul className="experience__container">
                <li>Website design and web page coding (HTML,CSS)</li>
                <li>Creating layouts in Figma</li>
            </ul>
            <h3>Sep 2011 - May 2018: Lawyer, Several companies</h3>
            <ul className="experience__container">
                <li>Protected interests of companies in court</li>
                <li>Negotiated and represented the company in authorities</li>
                <li>Handled lease agreements and supply contracts, etc</li>
            </ul>
          </div>
    </section>
)
}

export default WorkExperience;