import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Provider_Expense(){

    // it('EX-6 CLick on Complete Profile later button. ', () => {
    //     cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true})
    //     cy.wait(3000)
    // });


    it('EX- Click Expenses. ', () => {
        cy.get('[data-testid="mainmenu-expenses"]').click({force:true}).wait(2000)
    });


    it('EX-Click on Add Expense. ', () => {
        cy.get('[data-testid="add-expense"]').click({force:true})
        cy.wait(5000)
    });


    it('EX- Select Facility  Name.', () => {
        cy.get('.custom-select__input-container').click({force:true}).wait(2000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);  /////===============Array Index 0

    });


    it('EX- Select Expense Type.', () => {
        cy.get('[id="expenses.0.expenseType"]').click().wait(2000)
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
        cy.wait(2000)

    });


    it('EX- Enter Total Amount.', () => {
        cy.get('[data-testid="expenses.0.totalAmount"]').type("20")
    });


    it('EX- Enter Expense Start Date. ', () => {
        cy.get('#rangeSelect').click().wait(1000)
        cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("09/06/2023 - 09/22/2023")
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.0.description"]').type("This is description.")
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

    it('EX- Select Expense Type.', () => {
        cy.get('[id="expenses.1.expenseType"]').click().wait(2000)
        cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);   /////===============Array Index 0
        cy.wait(2000)

    });


    it('EX- Enter Total Amount.', () => {
        cy.get('[data-testid="expenses.1.totalAmount"]').type("20")
    });


    it('EX- Enter Expense Start Date. ', () => {
        cy.get('#rangeSelect').click().wait(1000)
        cy.get('[name="expenses.1.expenseSpentStartDate"]').click({force:true}).type("09/08/2023 - 09/20/2023")
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.1.description"]').type("This is computer generated description.")
    });
    it('Ex- Upload Attahment.', () => {
        cy.get(':nth-child(3) > .row > :nth-child(5) > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > [data-testid="browsebtn"]').click()
        const filepath11 = "a11.jpg"
        cy.get(':nth-child(3) > .row > :nth-child(5) > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > [data-testid="browsebtn"]').attachFile(filepath11,{subjectType: 'drag-n-drop'})
        cy.wait(5000)
    });




    it('EX- Click on Create button. ', () => {
        // cy.wait(30000)
        cy.get('[data-testid="save-expense"]').click({force:true})
    });
    
    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });




}
export default Provider_Expense;