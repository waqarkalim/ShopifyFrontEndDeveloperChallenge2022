import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
import store from '../../storage';

export {};

describe('Checking if the date picker works', () => {
	const date = moment().subtract(7, 'd').format(DATE_FORMAT);
	beforeEach(() => {
		store.clearAll();
		cy.visit('/');
	});
	it('should render the date picker properly', () => {
		cy.get('#start-date').clear().type(`${date}{enter}`);
		cy.get('[data-testid=pull-images-button').should('be.visible').click();
	});
});

describe('Checking if the pull images button works', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('should render the pull images button properly', () => {
		cy.get('[data-testid=pull-images-button').should(
			'have.text',
			'Click Here To Pull Images'
		);
	});
});
