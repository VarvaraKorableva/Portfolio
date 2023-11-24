import React from 'react'
import './Footer.css'

function Footer() {

return (
    <footer className='footer'>
        <ul className='footer__contact-container'>
            <li className='footer__contact-item'>+972533646394</li>
            <li className='footer__contact-item'>varkor90@gmail.com</li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://github.com/VarvaraKorableva' target='_blank'>Github</a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://www.linkedin.com/in/varvara-korableva/' target='_blank'>Linkedin</a>
            </li>
        </ul>
    </footer>
)
}

export default Footer;