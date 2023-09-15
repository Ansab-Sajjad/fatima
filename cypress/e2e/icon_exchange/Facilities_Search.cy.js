

function Facility_Search() {

    it('F1- Click on the Facilities.', () => {
        cy.wait(3000)
        cy.get('[data-testid="mainmenu-facilities"] > .ml-4').click().wait(3000)
        expect(true).to.equal(true)
    });

it('Search First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#name').type("ANSAB").wait(1000)
     cy.get('[data-testid="search"]').click({force:true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });


 it('Search Facility Email.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#email').type("troontechnologies.com").wait(1000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });

 it('Search Phone Number..', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#phone').type("4567895376").wait(1000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });



 ////////////
 it('Search Facility Contract.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#contractedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });

 ////////////
 it('Search Created At.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#createdAt').type('09/13/2023')
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });


 it('Search Created By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });










}
export default Facility_Search;