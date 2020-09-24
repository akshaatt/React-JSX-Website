import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import { Button } from './Button';
import logo from '../logo193.png';

function Navbar() {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true)
    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);
const showbutton = () => {
if(window.innerWidth <=960){
    setbutton(false)
}else {
    setbutton(true);
}
};

useEffect(() => {
    showbutton();
}, []);

window.addEventListener('resize', showbutton);
    return (
        <>
            <nav className="Navbar">
                <div className="Navbar-container">
                <Link to="/" className="Navbar-logo1" onClick={closeMobileMenu}>
                <img src={logo} alt={"logo"} className="BDCOE-LOGO"></img> 
        </Link> 
                   <Link to="/" className="Navbar-logo" onClick={closeMobileMenu}>
                        BDCoE
        </Link>
       
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/year' className='nav-links' onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Registrations OPEN
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Registrations OPEN</Button>}
                </div>

            </nav>
        </>

    )
}

export default Navbar
