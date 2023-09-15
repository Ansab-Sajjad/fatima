function Delete_Roles() {
    it('R-1 Click on Roles.', () => {
        cy.get('[data-testid="mainmenu-icon-users"] > .float-end').click()    
        cy.wait(2000);
        cy.get('[data-testid="submenu-roles"]').click().wait(3000)
    expect(true).to.equal(true)
    });
    
    it('DR-2 Click on 3 dots.', () => {
        cy.get(':nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });
    
    it('DR-3 Click on Delete button', () => {
        cy.contains('Delete').wait(1000).click();
        cy.wait(2000)
        expect(true).to.equal(true)
    });


    it('DR- 4 Confirm Delete Role.', () => {
        cy.get(':nth-child(2) > [data-testid="deletebtn"]').click()
    });

    
it('DR- 5 Verifying the Toast message.', () => {
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Role has been deleted successfully')
    cy.wait(4000)
expect(true).to.equal(true)
});


}

export default Delete_Roles;