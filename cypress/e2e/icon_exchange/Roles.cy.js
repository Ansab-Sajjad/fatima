import Random_Textt from "./Random_Text";

function Create_Icon_Roles() {

    it('R-1 Click on Roles.', () => {
        cy.get('[data-testid="mainmenu-icon-users"] > .float-end').click()    
        cy.wait(2000);
        cy.get('[data-testid="submenu-roles"]').click().wait(3000)
    expect(true).to.equal(true)
    });
    

it('R-2 Create Roles.', () => {
    cy.get('[data-testid="create-role-btn"]').click() 
    cy.wait(2000)
expect(true).to.equal(true)
});

 it('R-3 Enter Role Name.', () => {
    cy.get('.form-controls > input').type("ANSAB  " + Random_Textt(), {delay:150})
 expect(true).to.equal(true)
});


it('R-4 Enter Description.', () => {
    cy.get('textarea').type("This is description " + Random_Textt(), {delay:150})
expect(true).to.equal(true)
});

it('R-5 Assign Roles.', () => {
    cy.get(':nth-child(2) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(3) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(4) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(5) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
expect(true).to.equal(true)
});

it("R-6 Click on Create button.", function(){
    cy.get('[data-testid="createbtn"]').click()
})

it('R-7 Verifying the Toast message.', () => {
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Role has been created successfully')
    cy.wait(4000)
expect(true).to.equal(true)
});


}

export default Create_Icon_Roles;