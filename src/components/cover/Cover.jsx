import React from 'react'
import "./Cover.css"
import Foto2 from "../../media/Foto 2.jpg"

export default function Cover() {
    return (
        <>
        <div className="cover-container">

           <img className="video" src={Foto2} alt="" />
            <h1>Tadeo Mocoroa</h1>
            <p>Developer Jr | Video editor | Emprendedor | Content Creator</p>

        </div>
            
        </>
    )
}
