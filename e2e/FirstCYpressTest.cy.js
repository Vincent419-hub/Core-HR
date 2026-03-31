describe('Login Functionality', () => {

  it('Successful login', () => {
    cy.visit('https://main.d2zc2ibe66qiid.amplifyapp.com')
    cy.get('[name="email"]').type('admin@example.com')
    cy.get('[name="password"]').type('Admin123!')
    cy.get('.inline-flex').click()

  })
})