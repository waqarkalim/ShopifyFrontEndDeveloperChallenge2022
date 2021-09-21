import { API_KEY } from '../config';
import { API_URL } from './../constants';
import { Image } from './../types';
import axios from 'axios';

const client = axios.create({
  baseURL: API_URL, // assigning base URL for endpoints
});

export const fetchImages = (
  startDate: string,
  endDate: string,
  thumbs: boolean
): Promise<Image[]> => {
  return client
    .get(
      `${API_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=${JSON.stringify(
        thumbs
      )}`
    )
    .then(response => response.data);
};

export const handleError = (error: any): Error => {
  if (error.response.data.code === 500)
    return new Error(
      'Error occurred, please try again with a start date nearer to today'
    );

  return new Error('Error occurred while fetching data');
};
