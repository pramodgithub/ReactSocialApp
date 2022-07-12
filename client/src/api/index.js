import axios from 'axios'

const endPoint = "http://localhost:5000/posts/"
const fetchPosts = () => axios.get(endPoint);

export default fetchPosts;
