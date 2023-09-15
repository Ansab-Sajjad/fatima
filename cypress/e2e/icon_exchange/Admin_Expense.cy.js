
//================================================ Admin_Expense ================================================//


function Admin_Expense(){

    it('E-1 Click on Expenses.', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });
    
    
    it('EX-Click on Add Expense. ', () => {
        cy.get('[data-testid="add-expense"]').click({force:true})
        cy.wait(5000)
    });


    it('EX- Select Provider  Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000);
    });

    it('EX- Select Facility  Name.', () => {
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(2000);
    });


    it('EX- Select Expense Type.', () => {
        cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(2000);

    });


    it('EX- Enter Total Amount.', () => {
        cy.get('[data-testid="expenses.0.totalAmount"]').clear().type("20")
    });

    it('EX- Enable Range Toggle Button.', () => {
        cy.get('#rangeSelect').click().wait(1000)
    });

    it('EX- Enter Expense Start Date. ', () => {
        cy.get('.customdate').click({force:true}).type("04/19/2023 - 04/21/2023").type('{enter}').wait(1000)
    });


    it('EX- Enter Description.', () => {
        cy.get(':nth-child(1) > .row > :nth-child(4) > .form-group > .form-controls > textarea').type("This is description.")
    });
    it('Ex- Upload Attahment.', () => {
        cy.get('[data-testid="browsebtn"]').click({force:true})
        const filepath11 = "a11.jpg"
        cy.get('[data-testid="browsebtn"]').attachFile(filepath11,{subjectType: 'drag-n-drop'})
        cy.wait(5000)
    });





    it('EX- Click on Add more.', () => {
        cy.get('[data-testid="addmorebtn"]').click({force:true}).wait(3000)
    });


    it('EX-Slect Expense Type. ', () => {
        cy.get('[id="expenses.1.expenseType"]').click().wait(2000)  
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(3000);
        
    });


    it('EX- Enter total amount. ', () => {
        cy.get('[data-testid="expenses.1.totalAmount"]').click({force:true}).type("56")
    });


    it('EX- Enter Expense Spent date. ', () => {
        cy.get('[name="expenses.1.expenseSpentStartDate"]').click({force:true}).type("05/22/2023 - 05/25/2023").type('{enter}').wait(1000)
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.1.description"]').type("This is description.")
    });
    it('Ex- Upload Attahment.', () => {
        cy.get(':nth-child(3) > .row > :nth-child(5) > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > [data-testid="browsebtn"]').click({force:true})
        const filepath11 = "a11.jpg"
        cy.get(':nth-child(3) > .row > :nth-child(5) > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > [data-testid="browsebtn"]').attachFile(filepath11,{subjectType: 'drag-n-drop'})
        cy.wait(5000)
    });

    it('EX- Click on Save & Approve. ', () => {
        cy.get('[data-testid="approve-expense"]').click({force:true})
    });
    
    it('EX- ', () => {
        
    });


}

//================================================ View_Admin_Expense ================================================//


function View_Admin_Expense(){

    it('E-1 Click on Expenses.', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
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
    cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)
});

it('Scroll Top.', () => {
    cy.scrollTo('top',{ duration: 4000 }).wait(2000)
});

it('', () => {
    
});




}

//================================================ Edit_Admin_Expense ================================================//


function Edit_Admin_Expense(){
    it('E-1 Click on Expenses.', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });
    
    
it('Scroll to right side.', () => {
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
});


it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
});

it(' Click on Edit button.', () => {
    cy.get('[data-testid="edit-expense"]').click({force: true}).wait(4000)
});

// it('EX- Select Provider  Name.', () => {
//     cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
// cy.get('#react-select-14-option-1').click({force: true})   /////===============Array Index 1
// cy.wait(2000)

// });

// it('EX- Select Facility  Name.', () => {
//     cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
//     cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 1

// cy.wait(2000)

// });

it('EX- Select Expense Type.', () => {
    cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
    cy.get('.custom-select__option:eq(1)').click({force: true}).wait(2000);

});


it('EX- Enter Total Amount.', () => {
    cy.get('[data-testid="expenses.0.totalAmount"]').clear().type("20")
});

it('EX- Enable Range Toggle Button.', () => {
    cy.get('#rangeSelect').click().wait(1000)
});

it('EX- Enter Expense Start Date. ', () => {
    cy.get('.customdate').click({force:true}).clear().type("04/25/2023 - 04/18/2023").type('{enter}').wait(1000)
});


it('EX- Enter Description.', () => {
    cy.get(':nth-child(1) > .row > :nth-child(4) > .form-group > .form-controls > textarea').clear().type("This is updated description.")
});

it('Click on Update button.', () => {
    cy.get('[data-testid="approve-expense"]').click({force:true})
});

it('Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Expense has been updated successfully')
});


}

//================================================ admin_Expense_Condition ================================================//


function admin_Expense_Condition(){

    it('E-1 Click on Expenses.', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });
    
    
    it('Check condition.', () => {
    
        cy.get(':nth-child(1) > :nth-child(6) > .text-capitalize').then(($td) => {
              const value = $td.text().trim();
              if (value === 'approved') {
                cy.wait(2000)
                //                          Click for View.()
               
               

                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)

    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)

    cy.get('[data-testid="view-expense"]').click({force: true}).wait(4000)

    cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)

    cy.scrollTo('top',{ duration: 4000 }).wait(2000)


            
              } else {
                cy.wait(3000)
      
                //Expense_Edit()
                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
    cy.get('[data-testid="edit-expense"]').click({force: true}).wait(4000)

    cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
    cy.get('.custom-select__option:eq(1)').click({force: true}).wait(2000);

    cy.get('[data-testid="expenses.0.totalAmount"]').clear().type("20")
    cy.get('#rangeSelect').click().wait(1000)
    cy.get('.customdate').click({force:true}).clear().type("04/25/2023 - 04/18/2023").type('{enter}').wait(1000)
    cy.get(':nth-child(1) > .row > :nth-child(4) > .form-group > .form-controls > textarea').clear().type("This is updated description.")
    cy.get('[data-testid="approve-expense"]').click({force:true})
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Expense has been updated successfully')

              }
            });
        });

    
}

export default {Admin_Expense, View_Admin_Expense, Edit_Admin_Expense, admin_Expense_Condition}
