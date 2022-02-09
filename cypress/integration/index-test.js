describe("Index Page renders", () => {
    before(() => {
      cy.visit("localhost:3000");
    });
    it("should contain title, date and description", () => {
      cy.get('.blog-title').should('exist');
      cy.get('.blog-date').should('exist');
      cy.get('.blog-description').should('exist');
      cy.get('button[type="submit"]').should('exist');
    });
   it("should contain a form element with Delete button", () => {
       const form = cy.get("form");
       form.should("exist");
       form.contains('Delete').should("exist");
       form.get('button[type="submit"]').should('exist');
     });

});

