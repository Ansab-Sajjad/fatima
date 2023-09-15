function Pay_Rate_View(){

    it('AP -1 Click on Provider Rates.', () => {
        cy.get('[data-testid="mainmenu-providers"]').click()
        cy.get('[data-testid="submenu-provider-rates"]').click()
        expect(true).to.equal(true)
    });
  

        it('PV-3 Scroll Listing to the Right Side. ', () => {
            cy.get('.scroll-table').scrollTo('right',{ duration: 3000 }).wait(2000)
        });


        it('PV-4 Click on 3 dots. ', () => {
            cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force: true}).wait(2000)
        });


        it('PV-5 Click on View button.', () => {
            cy.contains("View").click({force: true})
            cy.wait(3000)
        });


        it('PV-6 Scroll to Bottom. ', () => {
            cy.scrollTo('bottom',{ duration: 5000 }).wait(2000)
           });


           it('PV-7 Scroll to Top. ', () => {
            cy.scrollTo('top',{ duration: 5000 }).wait(2000)
           });





}
export default Pay_Rate_View;