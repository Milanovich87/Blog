import React, { type PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import './AuthPageWrapper.scss'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';

type AuthPageWrapperProps = PropsWithChildren<{
    title?: string
    theme?: string
    children?: React.ReactNode
    button?: React.ReactNode
    breadcrumb?: React.ReactNode
}>

export const AuthPageWrapper = ({ breadcrumb, button, children, title }: AuthPageWrapperProps) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`auth-page-wrapper--${theme}`} >
            <div className='wrapper'>
                {breadcrumb}
                <NavLink style={{ textDecoration: 'none' }} to={'/'}>
                    {button}
                </NavLink>
                <h1 className='auth-page-wrapper__title'>{title}</h1>
                {children}
            </div>
        </div>
    )
}
