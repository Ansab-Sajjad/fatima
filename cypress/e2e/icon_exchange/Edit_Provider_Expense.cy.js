
function Edit_Provider_Expense(){

    it('EX- Click Expenses. ', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true}).wait(2000)
    });

it('Scroll to right side.', () => {
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 },{ensureScrollable: false}).wait(2000)
});


it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
});

it(' Click on Edit button.', () => {
    cy.get('[data-testid="edit-expense"]').click({force: true}).wait(4000)
});

it('', () => {
    
});

it('EX- Select Facility  Name.', () => {
    cy.get('.custom-select__input-container').click().wait(2000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);  /////===============Array Index 0

});


it('EX- Select Expense Type.', () => {
    cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(2000)

});


it('EX- Enter Total Amount.', () => {
    cy.get('[data-testid="expenses.0.totalAmount"]').clear().type("200")
});

it('EX- Enter Expense Start Date. ', () => {
    cy.get('#rangeSelect').click().wait(1000)
    cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("09/16/2023 - 09/28/2023")
});


it('EX- Enter Description.', () => {
    cy.get('[name="expenses.0.description"]').type("This is updated description.")
});


it('Click on Update button.', () => {
    cy.get('[data-testid="save-expense"]').click({force:true})
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Expense has been updated successfully')
});


}

export default Edit_Provider_Expense;