describe('Index Page renders', () => {
  before(() => {
    cy.visit('localhost:3000');
  });
  
  it('should contain New Blog button', () => {
    cy.contains('New Blog').should('exist');
  });

  it('should contain Blog title, date and description in form', () => {
    cy.get('.blog-title').should('exist');
    cy.get('.blog-date').should('exist');
    cy.get('.blog-description').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should contain a form element with Delete button', () => {
    const form = cy.get('form');
    form.should('exist');
    form.contains('Delete').should('exist');
    form.get('button[type="submit"]').should('exist');
  });

  it('should contain a Read more button and render blog id page when clicked', () => {
    cy.contains('Read more')
    cy.contains('a', 'Read more').should('have.attr', 'href');
    cy.get('#read-more-button').click();
    cy.url().should('include', '/blogs/'); 
  });
});