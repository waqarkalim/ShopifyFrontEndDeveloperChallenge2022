/* eslint-disable jest/valid-expect */
import { SHOPIFY_IS_AWESOME } from '../../constants';
import store from './../../storage';

export {};

describe('Checking if the first component renders properly', () => {
	beforeEach(() => {
		store.clearAll();
		cy.visit('/');
	});
	it('should render the title heading properly', () => {
		cy.get('.header-title').should('have.text', 'Spacestagram');
	});

	it('should render the subtitle heading properly', () => {
		cy.get('.subheader-title').should(
			'have.text',
			'Image-sharing from the final frontier'
		);
	});

	it('should check that local storage is initialized', () => {
		cy.get('.App')
			.should('be.visible')
			.click()
			.should(() => {
				expect(store.get(SHOPIFY_IS_AWESOME)).to.deep.equal({});
			});
	});
});
