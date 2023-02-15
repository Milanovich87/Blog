import React, { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import './Buttons.scss'
import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';

type ButtonProps = {
    type?: string
    link?: string
    text?: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className: string
    icon?: ReactElement
    alt?: string
    count?: any
    children?: any
}

export const dataButtons: ButtonProps[] = [
    {
        text: 'Primary',
        className: 'btn-primary',
    },
    {
        text: 'Secondary',
        className: 'btn-secondary',
    },
    {
        text: 'Secondary 2',
        className: 'btn-secondary2',
    },
    {
        icon: <SvgDisLike />,
        className: 'btn-dis-like',
    },
    {
        icon: <SvgLike />,
        className: 'btn-like',
    },
    {
        text: 'Button with icon',
        icon: <SvgBookMark />,
        className: 'btn-book-mark'
    },
]


export const Button = ({
    text,
    type = 'button',
    link,
    children,
    disabled = false,
    onClick,
    className,
    icon,
    count,
    ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button
            className={`btn--${theme} ${className}`} // для dataButtons
            // className={className}
            disabled={disabled}
            onClick={onClick}
            type={type}

            {...rest}
        >
            {icon}
            {link}
            {count}
            {children}
            {text && <span className="btn__text">{text}</span>}
        </button >
    )
}