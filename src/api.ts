import axios from 'axios';
import axiosRetry from 'axios-retry';

import { API_URL } from './constants';

const client = axios.create({
	baseURL: API_URL, // assigning base URL for endpoints
	timeout: 10_000, // setting timeout to 10 seconds
});

axiosRetry(client, {
	retries: 3, // number of retries before giving up
	shouldResetTimeout: true, // resetting timeout between each retry
	retryDelay: retryCount => {
		return retryCount * 2000; // time interval between retries
	},
});

export default client;
