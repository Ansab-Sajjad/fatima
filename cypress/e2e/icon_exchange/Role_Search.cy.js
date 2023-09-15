
function Icon_Role_Search() {

    it('R-1 Click on Roles.', () => {
        cy.get('[data-testid="mainmenu-icon-users"] > .float-end').click()    
        cy.wait(2000);
        cy.get('[data-testid="submenu-roles"]').click().wait(3000)
    expect(true).to.equal(true)
    });
    


it('Search by Role.', () => {
    cy.get('.left-icon').click({force:true})
    cy.get('#name').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});




it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search by Description.', () => {
    cy.get('.left-icon').click({force:true})
    cy.get('#description').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});




it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});



it('Search by Created By', () => {
    cy.get('.left-icon').click({force:true})
    cy.get('.custom-select__input-container').click()
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
export default Icon_Role_Search;