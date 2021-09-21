/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
import store from './../../storage';

export {};

describe('Checking if Cypress is working', () => {
	beforeEach(() => {
		store.clearAll();
		cy.visit('/');
	});

	it('is working', () => {
		expect(true).to.equal(true);
	});

	it('should check if cypress fetch stubbing works', () => {
		const testData = [
			{
				title: 'Test title #1',
				explanation: 'Test description #1',
				date: moment().format(DATE_FORMAT),
				url: 'https://picsum.photos/200/300',
				media_type: 'video',
			},
		];
		cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
			'fetchedImages'
		);
		cy.wait('@fetchedImages').then((interception: any) => {
			const data = interception.response.body;
			expect(data).to.have.length(testData.length);
		});
	});
});
