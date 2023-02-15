import { useState } from 'react'

import { Button } from '../Button/Button'
import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';
import { IconMore } from '../MyIcons/IconMore'
import { Image } from '../Image/Image'

import './Card.scss'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';
import { useDispatch, useSelector } from 'react-redux';
import { IStore, IPost } from '../../redux/types';
import { addFavorite, removeFavorite } from '../../redux/actionCreators/postsActionCreators';


// type CardsProps = {
//     variant?: string
//     date?: string
//     id?: number
//     text?: string
//     children?: any
//     image?: string
//     title?: string

// }
interface ICard extends IPost {
    variant: string
}

export const Card = ({ variant, date, title, text, image, id }: ICard) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: IStore) => state.posts.favorites)
    const [count, setCount] = useState(0)
    const onClick = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const onClick2 = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2
    const { theme } = useContext(ThemeContext)
    const isInclude = favorites.includes(id);
    console.log(isInclude)
    const handleToggleFavorite = () => {
        dispatch(isInclude ? removeFavorite(id) : addFavorite(id))
    }


    return (
        <div className={`card--${variant}--${theme}`}>
            <div className='card__main'>
                <div className='card__info'>
                    <div className='card__date'>
                        {date}
                    </div>
                    <a href='#' className='card__title'>
                        <h3>{title}</h3>
                    </a>
                    <div className='card__description'>
                        {text}
                    </div>
                </div>
                <div className='card__image'>
                    <Image className={`photo--${variant}`} image={image} alt={title} />
                </div>
            </div>
            <div className='card__footer'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' onClick={onClick} icon={<SvgLike />}><span>{countstr}</span></Button>
                    <Button className='btn-card btn-dislike' onClick={onClick2} icon={<SvgDisLike />}><span>{countstr2}</span></Button>
                </div>
                <div className='card__edit'>
                    <Button className={`btn-card--btn-mark--${isInclude}`} icon={<SvgBookMark />} onClick={handleToggleFavorite} ></Button>
                    {/* <Button className='btn-card btn-mark' icon={<SvgBookMark color={isInclude ? 'red' : 'black'} />} onClick={handleToggleFavorite} /> */}
                    <Button className='btn-card btn-edit' icon={<IconMore />} />
                </div>
            </div>
            <div className="card__line"></div>
        </div>
    )
}

