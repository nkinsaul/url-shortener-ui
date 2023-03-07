describe('User dashboard flows', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "urls.json"})
    cy.visit('http://localhost:3000/')
  })

it('User should see a header when the page loads', () => {
  cy.get('[data-cy=header]').should('contain', 'URL Shortener')
})

it('User should see a form on page load with two inputs.', () => {
  cy.get('[data-cy=title-input]').should('be.visible')
  cy.get('[data-cy=url-to-shorten]').should('be.visible')
})

it('User should see a shortened URL when page loads', () => {
  cy.get('[data-cy=1]').should('be.visible')
  cy.get('[data-cy=1-title]').should('contain', 'Awesome photo')
  cy.get('[data-cy=1-short-url]').should('contain', 'http://localhost:3001/useshorturl/1')
  cy.get('[data-cy=1-long-url]').should('contain', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
})

it('User can add information into the form', () => {
  cy.get('[data-cy=title-input]').type('Stevens Forecast')
  cy.get('[data-cy=url-to-shorten]').type('https://forecast.weather.gov/MapClick.php?lat=47.7462&lon=-121.0859#.ZAd_rezMJhF')
  cy.get('[data-cy=title-input]').should('have.value', 'Stevens Forecast')
  cy.get('[data-cy=url-to-shorten]').should('have.value', 'https://forecast.weather.gov/MapClick.php?lat=47.7462&lon=-121.0859#.ZAd_rezMJhF')
})

})

