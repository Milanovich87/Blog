import React from 'react'
import './SvgLike.scss'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';

export const SvgLike = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <svg className={`like--${theme}`} width="24" height="24" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M19.292 20.15C19.218 20.636 18.794 21 18.292
            21H18.28H8V11.212L11.608 3.094C12.415 3.352 13 4.108 13 
            5V9C13 9.552 13.447 10 14 10H19.674C19.728 10.002 19.78
            10.003 19.832 10.011C20.097 10.051 20.33 10.192 20.488 
            10.407C20.646 10.622 20.712 10.885 20.672 11.148L19.292 
            20.15ZM6 21H4C3.449 21 3 20.551 3 20V13C3 12.448 3.449 12
            4 12H6V21ZM22.099 9.22C21.623 8.575 20.925 8.154 20.132
            8.033C19.972 8.009 19.814 8.004 19.66 8H15V5C15 2.794
            13.206 1 11 1C10.605 1 10.247 1.233 10.086 1.593L6.35 
            10H4C2.346 10 1 11.345 1 13V20C1 21.654 2.346 23 4 
            23H18.269H18.304C19.776 23 21.048 21.909 21.269 20.451L22.648
            11.45C22.77 10.657 22.574 9.866 22.099 9.22Z" fill="currentColor" />
        </svg>

    )
}