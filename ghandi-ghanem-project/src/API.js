import axios from 'axios';
const KEY = 'AIzaSyAWmuK4f0s7gD3-GTEf_Z4TySQmqqRf7Is'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})