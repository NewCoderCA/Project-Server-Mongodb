describe('Edit and make changes to a blog', () => {
    //When you EDIT a specific blog [New blog New test]
    before(() => {
        cy.visit('http://localhost:3000/blogs/620a526634a259293c94d332');
    });
    it('should contain an Edit button, change url when Edit button clicked', () => {
       cy.get('#button-edit').click();
       cy.url().should('include', 'http://localhost:3000/blogs/edit/620a526634a259293c94d332');  
    });

    before(() => {
            cy.visit('http://localhost:3000/blogs/620a526634a259293c94d332');
        });
    it('should contain an All blogs button, change url when All button clicked', () => {
        cy.get('#button-all').click();
        cy.url().should('eq', '/'); 
    });

    // before(() => {
    //     cy.visit('http://localhost:3000/blogs/edit/620a526634a259293c94d332');
    // });
    // it('should save changes after blog has been EDITED', () => {
       
    // });


});