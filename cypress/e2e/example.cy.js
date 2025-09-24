describe('About Page', () => {
  it('renders the About content', () => {
    // Visit the About page
    cy.visit('http://localhost:3000/'); // which is the root page in this case

    // Check heading
    cy.get('h1').should('have.text', 'About Page'); //looking for the html tags and the content inside of it

    // Check paragraph
    cy.get('p').should('contain.text', 'This is another React component in Next.js.'); //looking for the html tags and the content inside of it
  });
});