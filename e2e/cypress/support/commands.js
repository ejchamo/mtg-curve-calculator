import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", (userEmail, userPassword) => {
  cy.visit("/user-sessions/new");
  cy.get("form").within(() => {
    cy.findByLabelText("Email").type(userEmail);

    cy.findByLabelText("Password").type(userPassword);

    cy.root().submit();

    cy.url().should("eq", `${Cypress.config().baseUrl}/profile`);
  });
  cy.contains("Sign Out");
});
