

function View_Provider_Expense(){

    it('EX- Click Expenses. ', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true}).wait(2000)
    });


it('Scroll to right side.', () => {
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
});


it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
});

it(' Click on View button.', () => {
    cy.get('[data-testid="view-expense"]').click({force: true}).wait(4000)
});


it('Scroll Down.', () => {
    cy.scrollTo('bottom',{ duration: 4000 }, {ensureScrollable: false}).wait(2000)
});

it('Scroll Top.', () => {
    cy.scrollTo('top',{ duration: 4000 }, {ensureScrollable: false}).wait(2000)
});

it('', () => {
    
});

it('', () => {
    
});

it('', () => {
    
});

it('', () => {
    
});




}

export default View_Provider_Expense;