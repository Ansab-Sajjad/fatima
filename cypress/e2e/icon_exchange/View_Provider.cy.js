
function View_Provider(){

    it('VP-1 Click on provider.', () => {
        cy.get('[data-testid="mainmenu-providers"] > .float-end').click()
        cy.wait(2000)
        expect(true).to.equal(true)
    
    });
    
    it('VP-2 Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('VP-3 Click on 3 dot button.', () => {
        cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('VP-4 Click on View Provider button', () => {
        cy.contains('View Provider').wait(1000).click();
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('VP-5 Scroll.', () => {
        cy.scrollTo("center").wait(2000)
        cy.scrollTo("bottom").wait(2000)
        cy.scrollTo("top").wait(2000)
        
    });

// it('VP-6 Click on Documents button.', () => {
//     cy.get('[data-testid="view-documents-tab"] > .tabname').click().wait(2000)
// });

// it('VP-7 Scroll.', () => {
//     // cy.scrollTo("center").wait(2000)
//     cy.scrollTo("bottom").wait(2000)
//     cy.scrollTo("top").wait(2000)
    
// });

// it('VP-8 Click on Credentialling History.', () => {
//     cy.get('[data-testid="credentialing-history-tab"] > .tabname').click().wait(2000)
// });

// it('VP-9 Scroll.', () => {
//     // cy.scrollTo("center").wait(2000)
//     cy.scrollTo("bottom").wait(2000)
//     cy.scrollTo("top").wait(2000)
    
// });

// it('VP-10 Click on Profile History.', () => {
//     cy.get('[data-testid="profile-history-tab"] > .tabname').click().wait(2000)
// });

// it('VP-11 Scroll.', () => {
//     // cy.scrollTo("center").wait(2000)
//     cy.scrollTo("bottom").wait(2000)
//     cy.scrollTo("top").wait(2000)
    
// });

it('VP-12 Click on Facilities.', () => {
    cy.get('[data-testid="facilities-tab"] > .tabname').click().wait(2000)
});


it('VP-13 Scroll.', () => {
    // cy.scrollTo("center").wait(2000)
    cy.scrollTo("bottom").wait(2000)
    cy.scrollTo("top").wait(2000)
    
});



}
export default View_Provider;