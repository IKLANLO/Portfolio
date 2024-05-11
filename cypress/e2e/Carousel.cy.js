describe('moverse por carrusel de proyectos', () => {
  it('carrusel', () => {
    cy.visit('https://iklanlo.github.io/Portfolio/')
    cy.get('.my-atropos3 .seccion').click()
    cy.get('.embla__button--next > .embla__button__svg').click()
    cy.get('.embla__button--next > .embla__button__svg').click()
    cy.visit('https://iklanlo.github.io/Portfolio/')
  })
})
