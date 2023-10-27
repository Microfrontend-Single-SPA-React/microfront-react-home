describe("Should test the notes view", () => {
  beforeEach(() => {
    cy.visit('/notes')
  })
  
  it("Should exits no row test in table", () => {
    cy.contains("No rows")
  })
  
  it ("Should open a new note modal", () => {
    cy.get("button[data-testid='add_note']").click()
    const typedTitle = 'Test';
    cy.get(".MuiOutlinedInput-input")
    .should('be.visible')
    .type(typedTitle)
    .trigger('change')
    .should('have.value', typedTitle);

    const typedDescription = "This is a Testing";
    cy.get(".add_notes_modal__inputs__description[placeholder='Description']")
    .should('be.visible')
    .type(typedDescription)
    .trigger('change')
    .should('have.value', typedDescription);
    cy.get("button[data-testid='save_note']").click();
    cy.contains('No rows').should('not.exist');
    cy.contains(typedTitle);
    cy.contains(typedDescription);
  })
});
