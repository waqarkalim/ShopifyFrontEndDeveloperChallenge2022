import { Image } from './types';

const _ = require('lodash');

const store = require('store');

export const repopulateLikeStatusInLocalStorage = (
	key: string,
	data: Image[]
): void => {
	console.log('Repopulating...');
	store.set(
		key,
		data.reduce((acc: Record<string, boolean>, curr: Image) => {
			if (curr.isLiked) {
				acc[curr.imageUrl] = curr.isLiked;
			}
			return acc;
		}, {})
	);
	console.log('Repopulation done!');
};

export const updateLikeStatusInLocalStorage = (
	key: string,
	array: Image[],
	index: number
): void => {
	console.log('Updating like status in local storage...');
	if (array[index].isLiked)
		store.set(key, {
			...store.get(key),
			...{ [array[index].imageUrl]: array[index].isLiked },
		});
	else store.set(key, _.omit(store.get(key), array[index].imageUrl));
	console.log('Like status updated in local storage!');
};

export default store;
