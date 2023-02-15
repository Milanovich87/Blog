import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card.data';
import { IStore } from '../../redux/types'
import { IPost } from '../../redux/types'

import { ThemeContext } from '../Posts/contexts';
import { THEMES } from '../Posts/constants';
// import { Pagination } from '../Pagination/Pagination';

// const [ { dateCard, title, text, image } ] = dataCard

export const Favorites = () => {
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

    const [data, setData] = useState([] as IPost[]);
    const posts = useSelector((state: IStore) => state.posts.posts);
    const favorites = useSelector((state: IStore) => state.posts.favorites)

    useEffect(() => {
        const resultData = [] as IPost[];
        posts.forEach((post) => {
            if (favorites.includes(post.id)) {
                resultData.push(post);
            }
        });
        setData(resultData);
    }, [favorites])

    return (
        <>
            <div className='blog__body' style={{ ...themeStyle[theme] }}>
                <div className='blog__main-content'>
                    {data.map((card, i) => <Card key={card.id} id={card.id} variant='small' date={card.date} title={card.title} image={card.image} />)}
                </div>
            </div>
        </>
    )
}
