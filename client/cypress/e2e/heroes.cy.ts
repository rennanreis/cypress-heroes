describe('Heroes App - Basic Features', () => {
  beforeEach(() => {
    // go to the main page
    cy.visit('/heroes');
  });

  it('should display the login button and open modal', () => {
    // check if login button is visible and click it
    cy.contains('Login', { timeout: 5000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    // check if login modal is displayed
    cy.get('form').should('exist');
  });

  it('should allow adding a new hero', () => {
    // to be implemented
  });

  it('should allow deleting a hero', () => {
    // to be implemented
  });
});
