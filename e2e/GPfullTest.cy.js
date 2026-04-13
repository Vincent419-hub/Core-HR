describe('HR Application Full Automation Flow', () => {

  const login = () => {
    cy.visit('https://staging.d15w5iepb3k3l1.amplifyapp.com/');
    cy.get('#identifier').type('vincent.dorkenoo@thedigicoast.com');
    cy.get('#password').type('Cenzoo@89');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  };

  // =========================
  // LOGIN TESTS
  // =========================

  it('Negative Login - Invalid Credentials', () => {
    cy.visit('https://staging.d15w5iepb3k3l1.amplifyapp.com/');
    cy.get('#identifier').type('wrong@mail.com');
    cy.get('#password').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid').should('be.visible');
  });

  it('Positive Login - Valid Credentials', () => {
    login();
    cy.contains('Dashboard').should('be.visible');
  });

  // =========================
  // MAIN APP TESTS
  // =========================

  describe('Main Application Flow', () => {

    beforeEach(() => {
      login();
    });

    it('Dashboard - Add Employee Button Visible', () => {
      cy.contains('Add Employee').should('be.visible');
    });

    it('Employee Directory - Search & Filter', () => {
      cy.get(':nth-child(2) > .cursor-pointer > .flex-1').click();
      cy.get('[data-testid="sidebar-sub-employee-directory"]').click();
      cy.get('input[data-slot="input"]').type('Vincent Dorkenoo');
      cy.contains('Vincent Dorkenoo').should('be.visible');
      cy.get('[name="filter-button"]').click();
      cy.contains('Active').should('be.visible');
    });

    it('Departments - Search & Add Department Button', () => {
      cy.get(':nth-child(2) > .cursor-pointer > .flex-1').click();
      cy.get('[data-testid="sidebar-sub-departments"]').click();
      cy.get('input[data-slot="input"]').type('Finance');
      cy.contains('Finance').should('exist');
      //cy.contains('Add Department').should('be.visible');
    });

    it('Teams - Search, Add Team & Pagination', () => {
       cy.get(':nth-child(2) > .cursor-pointer > .flex-1').click();
      cy.get('[data-testid="sidebar-sub-teams"]').click();
      cy.get('input[data-slot="input"]').type('Oslo');
      cy.contains('Oslo').should('exist');
      //cy.contains('Add Team').should('be.visible');
      //cy.contains('button', 'Next').then(($btn) => {
        //if (!$btn.is(':disabled')) cy.wrap($btn).click();
      //});
      //cy.contains('button', 'Previous').then(($btn) => {
        //if (!$btn.is(':disabled')) cy.wrap($btn).click();
      //});
    });

    it('Positions - Search, Add Position & Pagination', () => {
       cy.get(':nth-child(2) > .cursor-pointer > .flex-1').click();
      cy.contains('Position').click();
      //cy.contains('["name=position-add-button"]').should('be.visible');
      
      cy.get('input[data-slot="input"]').type('Stock Broker');
      cy.contains('Stock Broker').should('exist');
      //cy.contains('Next').then(($btn) => {
        //if (!$btn.is(':disabled')) cy.wrap($btn).click();
      //});
      //cy.contains('Previous').then(($btn) => {
        //if (!$btn.is(':disabled')) cy.wrap($btn).click();
      //});
    });

  });

});
