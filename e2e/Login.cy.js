describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://staging.d15w5iepb3k3l1.amplifyapp.com/');

    cy.get('#identifier').type('vincent.dorkenoo@thedigicoast.com');
    cy.get('#password').type('Cenzoo@89');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });
});