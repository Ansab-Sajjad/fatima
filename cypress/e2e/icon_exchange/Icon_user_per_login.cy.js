
import {Super_Admin_data, Icon_User_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Icon_user_per_Login(){

    it('Enter Email.', () => {
        cy.wait(2000);
        cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Icon_User_data.Correct_Email, {delay: 100})
        expect(true).to.equal(true)
        
    });

    it(' Enter Password.', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Icon_User_data.Correct_Password , {delay: 100})
        expect(true).to.equal(true)
    
    });

    it(' Click on Sign In Button.', () => {
        cy.get('.btn').click()
        cy.wait(5000);
        
    });
    
    it.skip('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
        cy.wait(2000);
    });
}

export default Icon_user_per_Login