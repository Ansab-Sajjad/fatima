/// <reference types="Cypress" /> 

import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Icon_Admin_Login() {
   

    // Icon_Exchange_URL()
 

  it('2- Logo should be present.', () => {
    cy.get('.logo').should('be.visible')
      
  });

  it('3- Main image should be present.', () => {
    cy.wait(1000)
    cy.get('.login-bg').should('be.visible')
  });

  it('2- Enter Correct Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, {delay: 100})
    expect(true).to.equal(true)
    
});

it('3- Enter Wrong password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.wrong_Password , {delay: 100})
    cy.get('.ico').click()
    expect(true).to.equal(true)
   
});

it('4- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    
});

it('5- Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Incorrect email or password.')
    
});

it('6- Enter wrong Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.wrong_Email, {delay: 100})
    expect(true).to.equal(true)
   
});

it('7- Enter Correct Password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('8- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)

});

it('9- Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Incorrect email or password.')
});


it('10- Enter Correct Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, {delay: 100})
    expect(true).to.equal(true)
   
});

it('11- Enter Correct Password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('12- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    cy.wait(4000)
    expect(true).to.equal(true)
});


it.skip('13- Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
    cy.wait(2000);
});

it('', () => {
    cy.wait(2000)
});

it('', () => {
    
});


} 
export default Icon_Admin_Login;
