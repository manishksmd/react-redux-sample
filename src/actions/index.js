import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts'
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PAPERCLIPMANISH1234';

export function fetchPosts() {console.log('fetchposts---')
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

// save posts
export function createPosts(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return {
        type: CREATE_POSTS,
        payload: request
    }
}

// get post by id
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

// delete post
export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}
