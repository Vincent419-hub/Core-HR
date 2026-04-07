describe('Add Employee from Dashboard', () => {

  beforeEach(() => {
    cy.login();
  });

  it('should create employee successfully from dashboard', () => {
    cy.contains('Add Employee').click();

    const email = `user${Date.now()}@mail.com`;

    cy.createEmployee('Dashboard User', email);

    cy.contains('Employee created').should('be.visible');
  });

});