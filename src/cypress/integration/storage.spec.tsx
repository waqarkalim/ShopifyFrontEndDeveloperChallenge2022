/* eslint-disable jest/valid-expect */
import store, {
	updateLikeStatusInLocalStorage,
	repopulateLikeStatusInLocalStorage,
} from '../../storage';
import { DATE_FORMAT, SHOPIFY_IS_AWESOME } from '../../constants';
import moment from 'moment';

export {};

describe('Checking local storage functions', () => {
	beforeEach(() => {
		store.clearAll();
	});

	const testData = [
		{
			id: 0,
			title: 'Test title #1',
			explanation: 'Test description #1',
			date: moment().format(DATE_FORMAT),
			imageUrl: 'https://picsum.photos/200/300',
			media_type: 'image',
			isLiked: true,
		},
	];
	it('should update local storage with the updated like status which is true', () => {
		updateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, testData, 0);
		expect(store.get(SHOPIFY_IS_AWESOME)).to.deep.equal({
			'https://picsum.photos/200/300': true,
		});
	});

	it('should update local storage with the updated like status which is false', () => {
		updateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, testData, 0);
		expect(store.get(SHOPIFY_IS_AWESOME)).to.deep.equal({
			'https://picsum.photos/200/300': true,
		});
		testData[0].isLiked = false;
		updateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, testData, 0);
		expect(store.get(SHOPIFY_IS_AWESOME)).to.deep.equal({});
	});

	it('should repopulate local storage with the like status stored in the React component state', () => {
		// store.clearAll();
		store.set(SHOPIFY_IS_AWESOME, {});
		const testData = [
			{
				id: 0,
				title: 'Test title #1',
				explanation: 'Test description #1',
				date: moment().format(DATE_FORMAT),
				imageUrl: 'https://picsum.photos/200/300',
				media_type: 'image',
				isLiked: false,
			},
			{
				id: 1,
				title: 'Test title #2',
				explanation: 'Test description #2',
				date: moment().format(DATE_FORMAT),
				imageUrl: 'https://picsum.photos/300/400',
				media_type: 'image',
				isLiked: true,
			},
		];
		repopulateLikeStatusInLocalStorage(SHOPIFY_IS_AWESOME, testData);
		expect(store.get(SHOPIFY_IS_AWESOME)).to.deep.equal({
			'https://picsum.photos/300/400': true,
		});
	});
});
