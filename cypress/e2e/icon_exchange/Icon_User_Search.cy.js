

function Icon_Users_Search() {

    it('IU-1 Click on Icon users.', () => {
        cy.get('[data-testid="mainmenu-icon-users"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-users-listing"]').click().wait(1000)
    expect(true).to.equal(true)
    });
    
    
it('Search By First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#firstName').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});


it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Last Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#lastName').click().type("imtiaz")
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});



it('Search By Email.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#email').click().type("troontechnologies.com")
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Company.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#company > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search by Created At.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#createdAt').type("cy.get('#createdAt')")
      cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});



it('Search By Created By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});



}
export default Icon_Users_Search;
