import axios from 'axios';

export function handleFetch(request, page, imgPerPage) {
	const API_KEY = '35960135-b5affa7a28418b398b23cde19';
	const BASE_URL = 'https://pixabay.com/api/';
	return axios
		.get(`${BASE_URL}`, {
			params: {
				q: request,
				page: page,
				key: API_KEY,
				image_type: 'photo',
				orientation: 'horizontal',
				per_page: imgPerPage,
			},
		})
		.then(response => response.data)
		.catch(err => console.log(err));
}
