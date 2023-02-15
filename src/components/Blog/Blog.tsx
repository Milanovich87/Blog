import React from 'react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Card/Card.data';
import { IStore } from '../../redux/types'
import { dataLoad } from '../../redux/actionCreators/postsActionCreators';

import './Blog.scss';
import { ThemeContext } from '../Posts/contexts';
import { Pagination } from '../Pagination/Pagination';

// const [ { dateCard, title, text, image } ] = dataCard

export const Blog = () => {
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.posts.posts);
    console.log(data);
    const dataCount = useSelector((state: IStore) => state.posts.countTotal);
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const searchValue = useSelector((state: IStore) => state.posts.searchValue);

    useEffect(() => {
        dispatch(dataLoad({ rowsPerPage, currentPage, searchValue }));
    }, [currentPage, rowsPerPage, searchValue])

    // useEffect(() => {
    //     dispatch(dataLoad());
    // }, [])

    return (
        <>
            <div className={`blog__body--${theme}`}>
                {/* <div className='blog__main-content'>
                    {data.map((card, i) => card === data[0] ?
                        <Card key={card.id} variant='big' date={card.date} id={card.id} title={card.title} text={card.text} image={card.image} /> :
                        <Card key={card.id} variant='middle' date={card.date} id={card.id} title={card.title} text={card.text} image={card.image} />
                    )}
                </div> */}
                <div className='blog__feat-content'>
                    {data.map((card, i) => <Card key={card.id} variant='middle' id={card.id} title={card.title} image={card.image} />)}
                </div>
            </div>
            <Pagination dataCount={dataCount} />
        </>
    )
}
