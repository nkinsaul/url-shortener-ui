describe('User dashboard flows', () => {

  it('User can submit a new url via the form', () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture:"urls.json"})
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=title-input]').type('Stevens Forecast')
    cy.get('[data-cy=url-to-shorten]').type('https://forecast.weather.gov/MapClick.php?lat=47.7462&lon=-121.0859#.ZAd_rezMJhF')
    cy.get('[data-cy=title-input]').should('have.value', 'Stevens Forecast')
    cy.get('[data-cy=url-to-shorten]').should('have.value', 'https://forecast.weather.gov/MapClick.php?lat=47.7462&lon=-121.0859#.ZAd_rezMJhF')
    cy.intercept('POST', "http://localhost:3001/api/v1/urls", {response: "post.json"}).as('postUrl')
    cy.get('[data-cy=submit]').click()
  })

  it('User should see updated urls', () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture:"updatedUrls.json"})
    cy.visit('http://localhost:3000/')
  })
})