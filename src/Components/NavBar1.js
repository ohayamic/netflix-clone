import React from 'react'
import Logo from '../logo.svg'
import Face from '../face.png'

import './NavBar.css'
const NavBar1 = () => {
    return (
        <div className="nav">
            <section className="net_logo">
                <img src={Logo} alt="netflix" />
            </section>
            <section className="net_face">
                <img src={Face} alt="net_face" />
            </section>
            
        </div >
    )
}
export default NavBar1