import axios from 'axios';

const API_KEY = '35960135-b5affa7a28418b398b23cde19';
const BASE_URL = 'https://pixabay.com/api/';

export async function handleFetch(request, page, imgPerPage) {
	try {
		const response = await axios.get(`${BASE_URL}`, {
			params: {
				q: request,
				page: page,
				key: API_KEY,
				image_type: 'photo',
				orientation: 'horizontal',
				per_page: imgPerPage,
			},
		});
		return response.data;
	} catch (err) {
		return console.log(err);
	}
}
