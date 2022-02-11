describe('New Blog page renders', () => {
    before(() => {
        cy.visit('localhost:3000');
    });

    it('should contain New blog button and render New page when clicked', () => {  
        cy.get('#new-blog-button').click();
        cy.url().should('include', '/blogs/new');
    }); 

    it('should contain a New blog form element, cancel and save buttons', () => {
        const form = cy.get('form');
        form.should('exist');
        cy.get('#title').should('exist');
        cy.get('#description').should('exist');
        cy.get('.button-cancel').should('exist');
        cy.get('.button-save').should('exist');
    });

    it('should change route path when Cancel button clicked', () => {
        cy.get('.button-cancel').click();
        cy.url().should('include', '/');
    });

  });

describe('Route path changed to new blog', () => {
    before(() => {
        cy.visit('localhost:3000');
    });

    it('should not change route path if form not completed', () => {
        // cy.contains('#title');
        // cy.contains('#description');
        cy.get('#title').should('not.exist');
        cy.contains('#button-save').click();
        cy.url().should('include', '/blogs/new');
    })
});





  // PRACTICE TEMPLATE e2e/tests/index.test.js
// it("should send http request with login payload when submit button clicked", () => {
//   cy.server();
//   cy.route("POST", "/submit").as("submit");
//   cy.get('input#username').type("test");
//   cy.get('input#password').type("123abc");
//   cy.get('button[type="submit"]').click();
// cy.wait("@submit").should("have.property", "status", 200);
// cy.get("@submit").should((xhr) => {
//     expect(xhr.request.body).to.deep.equal({ username: "test", password: "123abc" });
//     expect(xhr.response.body).to.equal("submit success!");
//   });
// });
// });
//});