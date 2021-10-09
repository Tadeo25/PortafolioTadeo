import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './Navbar.css'

export default function Navbar({ isScrolling }) {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"})
    }
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,
             { showCursor: false,
               strings: ['Welcome', 'Come Back Up' ],
             });
    }, [])
    return (
        <div>
            <nav className={`navbar ${ isScrolling > 20 ? "scrolling" : null}`}>
                <div className="navbar-logo" onClick={toTheTop}>
                    <span ref={textRef}></span>
                </div>
            </nav>
        </div>
    )
}
