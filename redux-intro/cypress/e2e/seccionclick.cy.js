describe('portfolio spec', () => {
  it('cambia el fondo', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.my-atropos1 .seccion').click()
  })
})
