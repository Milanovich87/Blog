import React from 'react'

import './PaginationPost.scss'
import { Button } from '../Button/Button'
import { IconLeftArrow } from '../MyIcons/IconLeftArrow'
import { IconRightArrow } from '../MyIcons/IconRightArrow'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';


export const PaginationPost = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`pagination--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='button__left'><IconLeftArrow />{'Prev'}
                        </Button>
                        <span className='text__left'>10 Things to Know About Salvador Dalí</span>
                    </div>
                    <div className='pagination__right'>
                        <Button className='button__right'>{'Next'}<IconRightArrow /></Button>
                        <span className='text__right'>8 Beautiful Villas Belonging to Artists You Need to See</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
