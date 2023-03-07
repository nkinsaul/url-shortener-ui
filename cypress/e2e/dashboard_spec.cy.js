describe('User dashboard flows', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "urls.json"})
    cy.visit('http://localhost:3000/')
  })

it('User should see a dashboard when the page loads', () => {
  cy.get('h1').should('contain', 'URL Shortener')
})

})