function Provider_Expense_Search(){

    it('EX- Click Expenses. ', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true}).wait(2000)
    });
   ///////////////////////////////////////////////////////////

    it('Search by Facility Name.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////


    it('Search by Expense Type.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#expenseType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    
    it('Search by Total Amount.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="totalAmount"]').click({force:true}).wait(2000).type("50").wait(2000)
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    it('Search by Expense Spent Date.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#expenseSpentStartDate').click({force:true}).wait(2000).type("09/7/2023").wait(2000)
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    
    it('Search by Aprroval Status.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#approvalStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    it('Search by Created At.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#createdAt').type("09/13/2023")
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////



    it('Search by Created By.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
       cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////



}

export default Provider_Expense_Search;