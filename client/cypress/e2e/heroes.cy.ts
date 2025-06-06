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

  it('should log in with valid credentials', () => {
    // open login modal
    cy.contains('Login').click({ force: true });

    // fill form and submit
    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('admin@test.com'); // email input
      cy.get('input[type="password"]').type('test123');     // password input
      cy.contains('Sign in').click();                       // submit button
    });

    // check if logged in successfully
    cy.contains('Logout').should('be.visible');
  });

  it('should allow adding a new hero', () => {
      // open login modal
      cy.contains('Login').click({ force: true });

      // login with valid credentials
      cy.get('form').within(() => {
        cy.get('input[type="email"]').type('admin@test.com');
        cy.get('input[type="password"]').type('test123');
        cy.contains('Sign in').click();
      });

      // wait for login to complete
      cy.contains('Logout').should('be.visible');

      // click "Create New Hero"
      cy.contains('Create New Hero').click();

      // fill out the hero form
      cy.get('form').within(() => {
        cy.get('input[name="name"]').type('Cypress Hero');
        cy.get('input[name="price"]').type('88');
        cy.get('input[name="fans"]').type('47');
        cy.get('input[name="saves"]').type('99');
        cy.get('select[name="powers"]').select('Flying');
        cy.contains('Submit').click();
      });

      // confirm hero appears on the list
      cy.contains('Cypress Hero').should('exist');
    });

    it('should allow deleting a hero created in this test', () => {
      const heroName = `Cypress Hero ${Date.now()}`;

    // open login modal and log in
    cy.contains('Login').click({ force: true });
    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('admin@test.com');
      cy.get('input[type="password"]').type('test123');
      cy.contains('Sign in').click();
    });
    cy.contains('Logout').should('be.visible');

    // go to create hero form
    cy.contains('Create New Hero').click();

    // fill hero creation form
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type(heroName);
      cy.get('input[name="price"]').type('77');
      cy.get('input[name="fans"]').type('33');
      cy.get('input[name="saves"]').type('11');
      cy.get('select[name="powers"]').select('Fireball');
      cy.contains('Submit').click();
    });

    // confirm hero exists
    cy.contains(heroName).should('exist');

    // delete hero
    cy.contains(heroName)
      .parents('[data-cy=hero-card]')
      .within(() => {
        cy.get('[data-cy=trash]').click();
      });

    cy.contains('button', 'Yes').click();

    // confirm hero no longer exists
    cy.contains(heroName).should('not.exist');
  });
});
