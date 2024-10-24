import axios from 'axios';
import Config from 'react-native-config';

const API_KEY = Config.API_KEY || "";   // If API_KEY is undefined because of .env file, hard-code your API_KEY here.
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

async function searchMovieByTitle(title) {
    const endpoint = `${BASE_URL}&t=${title}`;
    
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) { console.error(error); }
}

export { searchMovieByTitle };