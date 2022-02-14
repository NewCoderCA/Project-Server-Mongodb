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
        cy.get('#title').should('not.exist');
        cy.contains('#button-save').click();
        cy.url().should('include', '/blogs/new');
    })
});
