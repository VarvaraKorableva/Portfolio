import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import './Contact.css'

function Contact() {

return (
    <section className='contact'>
        <form action="https://formspree.io/v.korableva1990@yandex.ru" method="POST">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
)
}

export default Contact;