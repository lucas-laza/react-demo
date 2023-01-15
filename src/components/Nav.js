// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav() {
    return <>
        <nav>
            <Link to='/' className='nav_link'>Compteur</Link>
            <Link to='/names' className='nav_link'>Générateur de noms</Link>
        </nav>
    </>;
}

export default Nav;