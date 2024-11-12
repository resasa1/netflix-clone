import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(()=> {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
            <img
                className='nav__logo' 
                src='https://imgs.search.brave.com/2BhSv6raW7E3wOPTAUGGWArZjbqzyZvd68eVqR8ezn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw' 
                alt='netflix logo' />

            <img 
                className='nav__avatar'
                src='https://i.pinimg.com/564x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg'
                alt='netflix avatar'/>
              
            </div>
        </div>
    )
}

export default Nav;