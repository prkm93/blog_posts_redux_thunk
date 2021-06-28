import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostAndUsers = () => async (dispatch, getState) => {
    console.log(' about to fetch posts');
    await dispatch(fetchPosts());
    console.log('fetched posts!');

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // refactoring
    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUser(id)))
     .value();
}

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        // console.log("response", response);
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

export const fetchUser = (id) => async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

//Solution 1 - Memoizing function to prevent duplicate calls with id
// export const fetchUser = (id) => dispatch =>{
//     _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
    
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// })

// Another method to write (using arrow function in closure)
// export const fetchPosts = () => async dispatch => {
//     const response = await jsonPlaceholder.get('/posts');
//     // console.log("response", response);
//     dispatch({
//         type: 'FETCH_POSTS',
//         payload: response
//     })
// }
