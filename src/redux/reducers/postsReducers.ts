// import { SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/postsActionTypes';
// import { ADD_FAVORITE, REMOVE_FAVORITE, SET_NEW_POST_IMAGE, SET_NEW_POST_LESSON, SET_NEW_POST_TEXT, SET_NEW_POST_TITLE } from '../actionTypes/postsActionTypes';

// import { IPostsStore } from '../types';
// import { SET_POSTS } from '../actionTypes/postsActionTypes';

// const initialState = {
//     posts: [],
//     favorites: [],
//     countTotal: 0,
//     searchValue: '',
// }

// const postsReducer = (state: IPostsStore = initialState, action: any) => {
//     switch (action.type) {
//         case SET_COUNT_TOTAL: {
//             const { count } = action;
//             return ({
//                 ...state,
//                 countTotal: count,
//             })
//         }
//         case SET_POSTS: {
//             const { posts } = action;
//             return ({
//                 ...state,
//                 posts,
//             })
//         }
//         case ADD_FAVORITE: {
//             const { id } = action;
//             return ({
//                 ...state,
//                 favorites: [...state.favorites, id],
//             })
//         }
//         case REMOVE_FAVORITE: {
//             const { id } = action;
//             return ({
//                 ...state,
//                 favorites: state.favorites.filter((el) => el !== id),
//             })
//         }
//         case SET_NEW_POST_IMAGE: {
//             return ({
//                 ...state,
//                 newPostImage: action.image,
//             })
//         }
//         case SET_NEW_POST_TITLE: {
//             return ({
//                 ...state,
//                 newPostTitle: action.title,
//             })
//         }
//         case SET_NEW_POST_TEXT: {
//             return ({
//                 ...state,
//                 newPostText: action.text,
//             })
//         }
//         case SET_NEW_POST_LESSON: {
//             return ({
//                 ...state,
//                 newPostLesson: action.lesson,
//             })
//         }
//         case SET_SEARCH_VALUE: {
//             const { value } = action;
//             return ({
//                 ...state,
//                 searchValue: value,
//             })
//         }
//         default: return state;
//     }
// }

// export { postsReducer };

import { SET_COUNT_TOTAL, SET_MY_POSTS, SET_SEARCH_VALUE } from '../actionTypes/postsActionTypes';
import { ADD_FAVORITE, REMOVE_FAVORITE, SET_NEW_POST_IMAGE, SET_NEW_POST_LESSON, SET_NEW_POST_TEXT, SET_NEW_POST_TITLE } from '../actionTypes/postsActionTypes';

import { IPostsStore } from '../types';
import { SET_POSTS } from '../actionTypes/postsActionTypes';

const initialState = {
    posts: [],
    favorites: [],
    countTotal: 0,
    searchValue: '',
    my_posts: [],
}

const postsReducer = (state: IPostsStore = initialState, action: any) => {
    switch (action.type) {
        case SET_COUNT_TOTAL: {
            const { count } = action;
            return ({
                ...state,
                countTotal: count,
            })
        }
        case SET_POSTS: {
            const { posts } = action;
            return ({
                ...state,
                posts,
            })
        }
        case ADD_FAVORITE: {
            const { id } = action;
            return ({
                ...state,
                favorites: [...state.favorites, id],
            })
        }
        case REMOVE_FAVORITE: {
            const { id } = action;
            return ({
                ...state,
                favorites: state.favorites.filter((el) => el !== id),
            })
        }
        case SET_NEW_POST_IMAGE: {
            return ({
                ...state,
                newPostImage: action.image,
            })
        }
        case SET_NEW_POST_TITLE: {
            return ({
                ...state,
                newPostTitle: action.title,
            })
        }
        case SET_NEW_POST_TEXT: {
            return ({
                ...state,
                newPostText: action.text,
            })
        }
        case SET_NEW_POST_LESSON: {
            return ({
                ...state,
                newPostLesson: action.lesson,
            })
        }
        case SET_MY_POSTS: {
            return ({
                ...state,
                my_posts: action.my_posts.results,
            })
        }
        case SET_SEARCH_VALUE: {
            const { value } = action;
            return ({
                ...state,
                searchValue: value,
            })
        }
        default: return state;
    }
}

export { postsReducer };