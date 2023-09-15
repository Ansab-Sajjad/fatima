import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";
import Random_Textt from "./Random_Text";

function Add_Provider() {

it('Click on provider.', () => {
    cy.get('[data-testid="submenu-providers-listing"] > :nth-child(2)').click()
    expect(true).to.equal(true)

}); 

it('1- Click on add Provider.', () => {
    cy.get('.px-5').click()
    expect(true).to.equal(true)
    });

   it('2- Enter First Name.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB")
   });

    it('3- Enter Middle Name.', () => {
        cy.get(':nth-child(2) > .form-group > .form-controls > input').type("xyz " + Random_Textt(), {delay:150})
    });
    
    it('4- Enter Last Name.', () => {
        cy.get(':nth-child(3) > .form-group > .form-controls > input').type("abc " + Random_Textt(), {delay:150})
    });
    
    it('Enter Email.', () => {
        cy.get(':nth-child(4) > .form-group > .form-controls > input').type(Provider_data.Provider_Email)
    });
    it('5- Enter Password.', () => {
        cy.get(':nth-child(5) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
        cy.get(':nth-child(5) > .form-group > .form-controls > .ico').click()
    });
    
    it('6- Enter Confirm Password.', () => {
        cy.get(':nth-child(6) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
        cy.get(':nth-child(6) > .form-group > .form-controls > .ico').click()
    });
    
    it('7- Click on Next Button.', () => {
        cy.get('.btn').click({force: true})
    });

it('8- Verifying the Congratulation Screen.', () => {
    cy.get('.logo').should('be.visible').wait(1000)
    cy.get('.d-flex').should('be.visible').should('have.text','Congratulations!').wait(1000)
    cy.get('.clr-brightgray').should('be.visible').wait(5000)
});
it("9- Click on 'Go Back to Provider Listing' button.", () => {
    cy.get('.btn').click()
});

}
export default Add_Provider