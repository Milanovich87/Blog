import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../Posts/contexts';
import { loadMyPosts } from '../../redux/actionCreators/postsActionCreators'
import { IStore } from '../../redux/types';
import { Card } from '../Card/Card.data';
// import { cardsData } from '../Card/CardsData';
// import { CardsDataType } from '../Card/CardsData';
// import { Pagination } from '../Pagination/Pagination';

export const MyPosts = () => {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const data = useSelector((state: IStore) => state.posts.my_posts)

    console.log(data)
    useEffect(() => {
        dispatch(loadMyPosts())
    }, [])

    return (
        <>
            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>

                    {
                        data.map((card, i) => <Card key={card.id} variant='middle' id={card.id} title={card.title} image={card.image} />)}
                </div>
            </div>
        </>
    )
}