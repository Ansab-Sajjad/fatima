function Delete_Pay_Rate(){

 //===================> which list you want to Delete.?
 const index = 2;

    it('AP -1 Click on Provider Rates.', () => {
        cy.get('[data-testid="mainmenu-providers"]').click()
        cy.get('[data-testid="submenu-provider-rates"]').click()
        expect(true).to.equal(true)
    });

        it('PD-3 Scroll Listing to the Right Side. ', () => {
            cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
        });


        it('PD-4 Click on 3 dots. ', () => {
            cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`).click({force: true}).wait(2000)
        });


        it('PD-5 Click on Delete button.', () => {
            cy.get('[data-testid="deletebtn"]').click({force: true})
            cy.wait(3000)
        });

        it('PD-6 Confirm Delete.', () => {
            cy.get(':nth-child(2) > [data-testid="deletebtn"]').click({force: true})
        });




}
export default Delete_Pay_Rate;