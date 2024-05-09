describe('pulsar botón Atrás', () => {
  it('botón Atrás', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.my-atropos1 .seccion').click()
    cy.get('button').click()
  })
})
