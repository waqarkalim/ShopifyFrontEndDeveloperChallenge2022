/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
import store from '../../storage';

export {};

describe('Checking if image card works', () => {
  beforeEach(() => {
    store.clearAll();
    cy.visit('/');
  });

  it('should check if the image card title renders properly', () => {
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
      cy.get('#image-title-0').should('have.text', 'Test title #1');
    });
  });

  it('should check if the image card expand button works', () => {
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
      cy.get('#expand-button-0 > svg')
        .click()
        .should('have.class', 'expand-open');
    });
  });

  it('should check if the image card description renders properly', () => {
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
      cy.get('#image-description-0').should('have.text', 'Test description #1');
    });
  });

  it('should check if the image card media renders properly if the media_type is an image and the url property exists', () => {
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
      cy.get('#image-media-0')
        .should('be.visible')
        .and(($img: any) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });

  it('should check if thumbnail_url is displayed correctly if the media_type is a video and the thumbnail_url property exists', () => {
    const testData = [
      {
        title: 'Test title #1',
        explanation: 'Test description #1',
        date: moment().format(DATE_FORMAT),
        url: '',
        media_type: 'video',
        thumbnail_url: 'https://picsum.photos/200/300',
      },
    ];
    cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
      'fetchedImages'
    );
    cy.wait('@fetchedImages').then((interception: any) => {
      cy.get('#image-media-0')
        .should('be.visible')
        .and(($img: any) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });

  it('should check if url is displayed correctly if media_type is a video and the thumbnail_url property is empty', () => {
    const testData = [
      {
        title: 'Test title #1',
        explanation: 'Test description #1',
        date: moment().format(DATE_FORMAT),
        url: 'https://picsum.photos/200/300',
        media_type: 'video',
        thumbnail_url: '',
      },
    ];
    cy.intercept('https://api.nasa.gov/planetary/*', testData).as(
      'fetchedImages'
    );
    cy.wait('@fetchedImages').then((interception: any) => {
      cy.get('#image-media-0')
        .should('be.visible')
        .and(($img: any) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });
});
