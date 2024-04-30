describe('ver mis skills', () => {
  it('pulsar skills y ver contenido', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.my-atropos2 .seccion').click()
  })
})
