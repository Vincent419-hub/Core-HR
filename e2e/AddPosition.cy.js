describe('Create Position', () => {

  it('should create a position successfully', () => {

     cy.visit('https://staging.d15w5iepb3k3l1.amplifyapp.com/');

    cy.get('#identifier').type('vincent.dorkenoo@thedigicoast.com');
    cy.get('#password').type('Cenzoo@89');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.visit('https://staging.d15w5iepb3k3l1.amplifyapp.com/#/dashboard/employees/positions');

    cy.get('.cursor-pointer > .flex-1').click();

    cy.get('.bg-\[\#AAB5C7\]').click();

    cy.get('.bg-primary').click();

    cy.get('.space-y-5 > :nth-child(1) > .w-full').type('Software Engineer');

    cy.get('.space-y-5 > :nth-child(2) > .w-full').type('software operations')

    cy.get('.bg-\[\#4a5568\]').click();

    cy.contains('Software Engineer').should('be.visible');
  });

});