describe("Should test the notes view", () => {
  beforeEach(() => {
    cy.visit('/notes')
  })
  
  it("Should exits no row test in table", () => {
    cy.contains("No rows")
  })

  function executeAddTest() {
    cy.get("button[data-testid='add_note']").click()
    const typedTitle = 'Test';
    cy.get("input[name='title_note']")
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
  }
  
  it("Should open a new note modal", () => {
    executeAddTest();
  })

  it("Should open edit note modal", () => {
    executeAddTest();
    cy.get("button[data-testid='open_options']").click()
    cy.get("li[data-testid='edit_note']").click()
    cy.contains("Edit Note");
    const typedTitle = 'Test edit';
    cy.get(".MuiOutlinedInput-input")
    .should('be.visible')
    .clear()
    .type(typedTitle)
    .trigger('change')
    .should('have.value', typedTitle);

    const typedDescription = "This is a testing edited";
    cy.get(".add_notes_modal__inputs__description[placeholder='Description']")
    .should('be.visible')
    .clear()
    .type(typedDescription)
    .trigger('change')
    .should('have.value', typedDescription);
    cy.get("button[data-testid='save_note']").click();
    cy.contains('No rows').should('not.exist');
    cy.contains(typedTitle);
    cy.contains(typedDescription);
  })
});
