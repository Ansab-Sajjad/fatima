function Pay_Periods(){

    it('Click on Settings and than Pay Periods.', () => {
        cy.get('[data-testid="mainmenu-settings"]').click().wait(2000)
        cy.get('[data-testid="submenu-pay-periods"]').click()
    });
    
    it('Search By Pay Period.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('.custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
       
    
    });
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
     });
    

         
it('Search By Time Log Deadline.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#timeLogDeadline').type("09/13/2023")
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

export default Pay_Periods;