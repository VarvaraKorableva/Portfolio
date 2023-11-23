import React from 'react'
import './MyStrongSides.css'

function MyStrongSides() {

return (
    <section className='MyStrongSides'>
        <h2 className='MyStrongSides__title'>My Strong Sides</h2>{/*Software Development Life Cycle ES6+*/}
        <ul className='MyStrongSides__grid-container'>
            <li className='MyStrongSides__grid-item'>
                <h3 className='MyStrongSides__grid-item-title'>Responsive Design</h3>
                <p className='MyStrongSides__grid-item-text'>Development of websites and applications adaptable to any device and screen size. Transforming Figma designs into responsive layouts, paying meticulous attention to pixel-perfect implementation.</p>
            </li>
            <li className='MyStrongSides__grid-item'>
                <h3 className='MyStrongSides__grid-item-title'>APIs</h3>
                <p className='MyStrongSides__grid-item-text'>Working with APIs for interaction with servers and databases, creating custom APIs, and interfacing with third-party services.</p>
            </li>
            <li className='MyStrongSides__grid-item'>
                <h3 className='MyStrongSides__grid-item-title'>Optimize applications</h3>
                <p className='MyStrongSides__grid-item-text'>Optimize applications for maximum performance and scalability. Development of new projects and providing support for existing web services.</p>
            </li>
            <li className='MyStrongSides__grid-item'>
                <h3 className='MyStrongSides__grid-item-title'>Responsive Design</h3>
                <p className='MyStrongSides__grid-item-text'>Development of websites and applications adaptable to any device and screen size</p>
            </li>
        </ul>
    </section>
)
}

export default MyStrongSides;