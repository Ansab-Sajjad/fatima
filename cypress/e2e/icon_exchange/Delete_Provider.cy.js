
function Delete_Provider(){

    it('DP-1 Click on provider.', () => {
        cy.get('[data-testid="submenu-providers-listing"] > :nth-child(2)').click()
        cy.wait(2000)
        expect(true).to.equal(true)
    
    });
    
    it('DP-2 Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('DP-3 Click on 3 dot button.', () => {
       cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('DP-4 Click on Delete button', () => {
        cy.contains('Delete').wait(1000).click();
        cy.wait(2000)
        expect(true).to.equal(true)
    });

    it('DP-5 Verify the pop-up screen text and click on Delete button.', () => {
        cy.get('.clr-navy').should('be.visible').should('have.text','Are You Sure?').wait(1000)
        cy.get('.mt--3').should('be.visible').should('have.text','Do you really want to delete the record? This process cannot be undone.').wait(1000)
        cy.get('.modal-body > .row > :nth-child(2) > .btn').click({force:true}).wait(2000)
        expect(true).to.equal(true)
    });
    it('DP-6 Scroll to the left side.', () => {
        cy.get('.tableresponsive').scrollTo("left").wait(2000)
        expect(true).to.equal(true)
    });











}
export default Delete_Provider;