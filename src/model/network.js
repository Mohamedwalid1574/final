import axios from 'axios';

const DBconnection=axios.create({
    baseURL:'https://fakestoreapi.com/'
})
export default DBconnection; 