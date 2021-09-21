/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
import moment from 'moment';
import { handleError } from '../../api';
import { DATE_FORMAT, SHOPIFY_IS_AWESOME } from '../../constants';
import store from '../../storage';

export {};

describe('Checking if image container works', () => {
  beforeEach(() => {
    store.clearAll();
    cy.visit('/');
  });

  it('should check that likes are stored in local storage', () => {
    const testData = [
      {
        title: 'Test title #1',
        explanation: 'Test description #1',
        date: moment().format(DATE_FORMAT),
        url: 'https://picsum.photos/200/300',
        media_type: 'image',
      },
    ];
    cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
      'fetchedImages'
    );
    cy.wait('@fetchedImages').then((interception: any) => {
      const data = interception.response.body;
      cy.get('#like-button-0')
        .should('be.visible')
        .click()
        .should(() => {
          expect(store.get(SHOPIFY_IS_AWESOME)[data[0].url]).to.eq(true);
        });
    });
  });

  it('should check that the stored likes show up after page reload', () => {
    const testData = [
      {
        title: 'Test title #1',
        explanation: 'Test description #1',
        date: moment().format(DATE_FORMAT),
        url: 'https://picsum.photos/200/300',
        media_type: 'image',
      },
    ];
    cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
      'fetchedImages'
    );
    cy.wait('@fetchedImages').then((interception: any) => {
      cy.get('#like-button-0').should('be.visible').click();
    });
    cy.reload();
    cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
      'fetchedImages'
    );
    cy.wait('@fetchedImages').then((interception: any) => {
      cy.get('#like-button-0 > svg').should(
        'have.css',
        'fill',
        'rgb(237, 73, 86)'
      );
    });
  });

  it('should check that 500 error can be appropriatally processed', () => {
    const error = {
      response: {
        data: {
          code: 500,
        },
      },
    };
    expect(handleError(error).message).to.eq(
      'Error occurred, please try again with a start date nearer to today'
    );
  });

  it('should check that errors OTHER THAN 500 status code can be appropriatally processed', () => {
    const error = {
      response: {
        data: {
          code: 501,
        },
      },
    };
    expect(handleError(error).message).to.eq(
      'Error occurred while fetching data'
    );
  });
});
