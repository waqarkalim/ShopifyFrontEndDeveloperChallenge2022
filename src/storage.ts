import { Image } from './types';

const _ = require('lodash');

const store = require('store');

export const repopulateLikeStatusInLocalStorage = (
  key: string,
  data: Image[]
): void => {
  store.set(
    key,
    data.reduce((accumulator: Record<string, boolean>, current: Image) => {
      if (current.isLiked) {
        accumulator[current.imageUrl] = current.isLiked;
      }
      return accumulator;
    }, {})
  );
};

export const updateLikeStatusInLocalStorage = (
  key: string,
  array: Image[],
  index: number
): void => {
  if (array[index].isLiked)
    store.set(key, {
      ...store.get(key),
      ...{ [array[index].imageUrl]: array[index].isLiked },
    });
  else store.set(key, _.omit(store.get(key), array[index].imageUrl));
};

export default store;
