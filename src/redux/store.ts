import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { postsReducer } from './reducers/postsReducers';
import { settingsReducer } from './reducers/settingsReducer';
import { all } from 'redux-saga/effects'
import { watcherPosts } from './actionCreators/postsActionCreators';
import { watcherUser } from './actionCreators/userActionCreators';
import { userReducer } from './reducers/usersReducer';

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherPosts(),
        watcherUser(),
    ])
}

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
    users: userReducer,
})

export default createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);