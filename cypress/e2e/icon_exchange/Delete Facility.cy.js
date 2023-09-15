function delete_facility() {

    
 //===================> which list you want to Delete.?
 const index = 1;


 it('F1- Click on the Facilities.', () => {
    cy.wait(3000)
    cy.get('[data-testid="mainmenu-facilities"] > .ml-4').click().wait(3000)
    expect(true).to.equal(true)
});
    
    it('D2- Click on 3 dots. ', () => {
        cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`).click({force: true}).wait(2000)
           });
    
    
    it('D3- Click on Delete button', () => {
        cy.get('[data-testid="deletebtn"]').wait(1000).click();
        expect(true).to.equal(true)
    
    });
    
it('D4- Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Facility is deleted successfully')
    
});


    }
    
    export default delete_facility;