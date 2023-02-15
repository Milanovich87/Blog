

import { takeEvery, put } from 'redux-saga/effects'

import { IPost } from '../types';

import { LOAD_MY_POSTS, LOAD_POSTS, SET_MY_POSTS, SET_SEARCH_VALUE } from '../actionTypes/postsActionTypes';

import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SET_COUNT_TOTAL,
    ADD_POST,
    SET_NEW_POST_IMAGE,
    SET_NEW_POST_LESSON,
    SET_NEW_POST_TEXT,
    SET_NEW_POST_TITLE,
} from '../actionTypes/postsActionTypes';

import { SET_POSTS } from '../actionTypes/postsActionTypes';

import { getToken } from './userActionCreators';

const setMyPosts = (my_posts: IPost[]) => ({
    type: SET_MY_POSTS,
    my_posts,
})

const loadMyPosts = () => ({
    type: LOAD_MY_POSTS,
})

const addPost = (postInfo: any) => ({
    type: ADD_POST,
    postInfo,
})

const setNewPostTitle = (title: string) => ({
    type: SET_NEW_POST_TITLE,
    title,
})

const setNewPostText = (text: string) => ({
    type: SET_NEW_POST_TEXT,
    text,
})

const setNewPostLesson = (lesson: number) => ({
    type: SET_NEW_POST_LESSON,
    lesson,
})

const setNewPostImage = (image: any) => ({
    type: SET_NEW_POST_IMAGE,
    image,
})

function* fetchLoadPosts(action: any) {
    const { payload } = action;
    const { rowsPerPage, currentPage, searchValue } = payload;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts?limit=${rowsPerPage}&offset=${(currentPage - 1) * rowsPerPage}&search=${searchValue}`);
    const data: { count: number, results: IPost[] } = yield response.json();
    const { results, count } = data;
    yield put(setPostsTotal(count));
    yield put(setPosts(results));
    console.log(data);
    console.log(results);
}

const dataLoad = (payload: { currentPage: number, rowsPerPage: number, searchValue: string }) => ({
    type: LOAD_POSTS,
    payload,
})

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts,
});

const setPostsTotal = (count: number) => ({
    type: SET_COUNT_TOTAL,
    count,
});

const addFavorite = (id: number) => ({
    type: ADD_FAVORITE,
    id,
});

const removeFavorite = (id: number) => ({
    type: REMOVE_FAVORITE,
    id,
});

function* fetchMyPosts() {
    const token: string = yield getToken();
    const response: Response = yield fetch('https://studapi.teachmeskills.by/blog/posts/my_posts/', {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data: IPost[] = yield response.json();
    yield put(setMyPosts(data))
}

function* fetchAddPost(action: any) {
    const { postInfo } = action;
    const formData = new FormData();
    Object.entries(postInfo).forEach(([key, value]) => {
        formData.append(key, value as any);
    });
    const token: string = yield getToken();
    const data: Response = yield fetch('https://studapi.teachmeskills.by/blog/posts/', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data'
        },
    })
    console.log(data);
}

function* watcherPosts() {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
    yield takeEvery(ADD_POST, fetchAddPost)
    yield takeEvery(LOAD_MY_POSTS, fetchMyPosts)
}

export {
    setPosts,
    dataLoad,
    addFavorite,
    removeFavorite,
    setPostsTotal,
    watcherPosts,
    setSearchValue,
    addPost,
    setNewPostTitle,
    setNewPostImage,
    setNewPostText,
    setNewPostLesson,
    setMyPosts,
    loadMyPosts,
}