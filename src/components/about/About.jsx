import React from 'react'
import './About.css';
import Foto from '../../media/Foto1.png'
export default function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you about me</h3>
                <p>Hello, I am a full stack jr programmer and database developer, I studied at rolling code school,
                   I have been programming since June 2020 I work using HTML5, CSS, JavaScript, React, Bootstrap, Node Js, MondoDB, I use Trello and the Scrum methodology to work as a team. .
                   I'm also an amateur editor, I work with camstasia studio 8.
                </p>
                <p className="text">
                Hola yo soy programador en full stack jr y base de datos developer estudie en escuela rolling code programo desde junio del 2020 trabajo utilizando HTML5, CSS, JavaScript, React, Bootstrap, Node Js, MondoDB, uso Trello y la metodologia Scrum para trabajar en equipo.
                   Tambien soy editor amateur trabajo con camstasia studio 8  
                </p>
            </div>
            <div className="about-img">
                <img src={Foto} alt="" />
            </div>
        </div>
    )
}
