/// <reference types="cypress" />

context('Movies page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9001')
  })

  it('Count movies in DOM', () => {
    cy.get('.movie-listing>div')
      .siblings()
      .should('have.length', 10)
  })

  it('Filter by type', () => {
    cy.get('.movie-type-filter>li')
      .siblings().should('have.length', 6)
  })

  it('Filter by type', () => {
    cy.get('.movie-type-filter>li')
      .eq(1).click()
    cy.get('.movie-listing>div')
      .eq(1).find('.genre')
      .should('contain', 'Documentary')
  })

  it('Filter by type', () => {
    cy.get('.movie-type-filter>li')
      .eq(1).click()
    cy.get('.movie-listing>div')
      .eq(1).find('.genre')
      .should('contain', 'Documentary')
  })

  it('Filter by key', () => {
    cy.get('input')
      .type('Transformer')
    cy.get('button[type=submit]').click()
    cy.get('.movie-listing>div')
      .eq(1).find('.title')
      .should('contain', 'Transformer')
  })

  it('Open add movie form', () => {
    cy.get('button.add-movie-button')
      .click()
    cy.get('.add-movie-button')
      .should('be.visible')
  })

})
