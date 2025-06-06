describe('Heroes App - Basic Features', () => {
  beforeEach(() => {
    // navigate to the main page
    cy.visit('/heroes');
  });

  it('should open login modal when login button is clicked', () => {
    cy.contains('Login', { timeout: 5000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    cy.get('form').should('exist');
  });

  it('should log in successfully with valid credentials', () => {
    cy.contains('Login').click({ force: true });

    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('admin@test.com');
      cy.get('input[type="password"]').type('test123');
      cy.contains('Sign in').click();
    });

    cy.contains('Logout').should('be.visible');
  });

  it('should display an error when using invalid credentials', () => {
    // open login modal
    cy.contains('Login').click({ force: true });

    // attempt to log in with invalid credentials
    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('invalid@user.com');
      cy.get('input[type="password"]').type('wrongpass');
      cy.contains('Sign in').click();
    });

    // validate error message
    cy.contains('Invalid email or password').should('be.visible');
  });


  it('should create a new hero successfully', () => {
    cy.contains('Login').click({ force: true });

    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('admin@test.com');
      cy.get('input[type="password"]').type('test123');
      cy.contains('Sign in').click();
    });

    cy.contains('Logout').should('be.visible');
    cy.contains('Create New Hero').click();

    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('Cypress Hero');
      cy.get('input[name="price"]').type('88');
      cy.get('input[name="fans"]').type('47');
      cy.get('input[name="saves"]').type('99');
      cy.get('select[name="powers"]').select('Flying');
      cy.contains('Submit').click();
    });

    cy.contains('Cypress Hero').should('exist');
  });

  it('should delete a hero created during this test', () => {
    const heroName = `Cypress Hero ${Date.now()}`;

    cy.contains('Login').click({ force: true });

    cy.get('form').within(() => {
      cy.get('input[type="email"]').type('admin@test.com');
      cy.get('input[type="password"]').type('test123');
      cy.contains('Sign in').click();
    });

    cy.contains('Logout').should('be.visible');
    cy.contains('Create New Hero').click();

    cy.get('form').within(() => {
      cy.get('input[name="name"]').type(heroName);
      cy.get('input[name="price"]').type('77');
      cy.get('input[name="fans"]').type('33');
      cy.get('input[name="saves"]').type('11');
      cy.get('select[name="powers"]').select('Fireball');
      cy.contains('Submit').click();
    });

    cy.contains(heroName).should('exist');

    cy.contains(heroName)
      .parents('[data-cy=hero-card]')
      .within(() => {
        cy.get('[data-cy=trash]').click();
      });

    cy.contains('button', 'Yes').click();

    cy.contains(heroName).should('not.exist');
  });
});
