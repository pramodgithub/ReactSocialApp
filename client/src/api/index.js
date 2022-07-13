import axios from 'axios'

const endPoint = "http://localhost:5000/posts/";

export const fetchPosts = () => axios.get(endPoint);
