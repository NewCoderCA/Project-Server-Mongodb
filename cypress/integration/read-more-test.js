describe('Read more in a specific blog', () => {
    //When you click on specific blog to READMORE [New blog New test]
    before(() => {
        cy.visit('http://localhost:3000/blogs/620a526634a259293c94d332');
    });

    it('should display blog in full', () => { 
        cy.get('h2').should('exist');
        cy.get('.blog-date').should('exist');
        cy.get('.blog-description').should('exist');; 
    }); 

    it('should display All Blogs button and Edit blog button', () => { 
        cy.get('#button-all').should('exist');
        cy.get('#button-edit').should('exist'); 
    }); 

    it('should render page back to All Blogs when you no longer want to Read more', () => {
        cy.get('#button-all').click();
        cy.url().should('include', '/'); 
    });

    it('should display 50 characters or less when you no longer want to Read more', () => {
         cy.get('.blog-description').its('length').should('be.lt', 50);
    });
});