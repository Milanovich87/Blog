import React from 'react'
import './Footer.scss'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';

export const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <footer className={`footer--${theme}`}>
            <div className='wrapper'>
                <div className='footer__body'>
                    <span>©2022 Blogfolio</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}
