import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35960135-b5affa7a28418b398b23cde19';
export const getImg = (searchQuery, page) => {
	
	return axios.get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
};


