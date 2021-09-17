import axios from 'axios';

import { API_URL } from './constants';

export const client = axios.create({
	baseURL: API_URL, // assigning base URL for endpoints
});

export const handleError = (error: any): Error => {
	if (error.response.data.code === 500)
		return new Error(
			'Error occurred, please try again with a start date nearer to today'
		);

	return new Error('Error occurred while fetching data');
};
