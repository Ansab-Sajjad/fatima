
function Provider_condition(){

  it('EX- Click Expenses. ', () => {
    cy.get('[data-testid="mainmenu-expenses"]').click({force:true}).wait(2000)
});


it('Scroll to right.', () => {
  cy.get('.scroll-table').scrollTo('right').wait(2000)
});

it('Check condition.', () => {
    
  cy.get(':nth-child(1) > :nth-child(5) > .text-capitalize').then(($td) => {
        const value = $td.text().trim();
        if (value === 'approved') {
          cy.wait(2000)
          
          cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click().wait(2000)
    
          cy.get('[data-testid="view-expense"]').click({force: true}).wait(3000)
        
      
              cy.scrollTo('bottom').wait(3000)
              cy.scrollTo('top').wait(3000)
      
        } else {
          cy.wait(3000)

          cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click().wait(2000)
   
          cy.get('[data-testid="edit-expense"]').click({force: true}).wait(3000)
         

  cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
  cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);   /////===============Array Index 0
  cy.wait(2000)

  cy.get('[data-testid="expenses.0.totalAmount"]').type("200")

  cy.get('#rangeSelect').click().wait(1000)
  cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("09/16/2023 - 09/28/2023")
  cy.get('[name="expenses.0.description"]').type("This is updated description.")
  cy.get('[data-testid="save-expense"]').click({force:true})

          cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Expense has been updated successfully')
        }
      });
});






}
    export default Provider_condition;