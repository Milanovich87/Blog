import React from 'react'

import { Button } from '../../Button/Button'
import './FormSuccess.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../Posts/contexts';
import { THEMES } from '../../Posts/constants';

export const FormSuccess = () => {
    const { theme } = useContext(ThemeContext)
    const themeStyle = {
        [THEMES.light]: {
            // backgroundColor: 'lightgray',
            // color: 'black'
        },
        [THEMES.dark]: {
            backgroundColor: '#313037',
            color: '#FFFFFF'
        }
    }

    return (
        <form className='form__success' style={{ ...themeStyle[theme] }}>
            <p className='form__text'>Email confirmed.</p>
            <p className='form__text'>Your registration is now completed.</p>
            <div className='form__submit'>
                <Button className='form__btn' type='button' children='Go to home' />
            </div>
        </form>
    )
}
