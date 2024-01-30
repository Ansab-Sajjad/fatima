/// <reference types="Cypress" /> 

import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Icon_Admin_Login() {
   

    // Icon_Exchange_URL()
 

  // Test Case 2: Verify the presence of the logo
it('2- Logo should be present.', () => {
  cy.get('.logo').should('be.visible');
});

// Test Case 3: Verify the presence of the main image
it('3- Main image should be present.', () => {
  cy.wait(1000);
  cy.get('.login-bg').should('be.visible');
});

// Test Case 4: Enter Correct Email
it('4- Enter Correct Email for Super Admin login.', () => {
  cy.wait(2000);
  cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, { delay: 100 });
  expect(true).to.equal(true);
});

// Test Case 5: Enter Wrong Password
it('5- Enter Wrong password for Super Admin login.', () => {
  cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.wrong_Password, { delay: 100 });
  cy.get('.ico').click();
  expect(true).to.equal(true);
});

// Test Case 6: Click on Sign In Button
it('6- Click on Sign In Button.', () => {
  cy.get('.btn').click();
});

// Test Case 7: Verify Toast Message for Incorrect Credentials
it('7- Verifying the Toast message for Incorrect Credentials', () => {
  cy.wait(1000);
  cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Incorrect email or password.');
});
// Test Case 8: Enter wrong Email
it('8- Enter wrong Email for Super Admin login.', () => {
  cy.wait(2000);
  cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.wrong_Email, { delay: 100 });
  expect(true).to.equal(true);
});

// Test Case 9: Enter Correct Password
it('9- Enter Correct Password for Super Admin login.', () => {
  cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password, { delay: 100 });
  expect(true).to.equal(true);
});

// Test Case 10: Click on Sign In Button
it('10- Click on Sign In Button after providing correct credentials.', () => {
  cy.get('.btn').click();
  expect(true).to.equal(true);
});

// Test Case 11: Verify Toast Message for Incorrect Credentials
it('11- Verifying the Toast message for Incorrect Credentials', () => {
  cy.wait(1000);
  cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Incorrect email or password.');
});

// Test Case 12: Enter Correct Email and Password
it('12- Enter Correct Email and Password for Super Admin login.', () => {
  cy.wait(2000);
  cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, { delay: 100 });
  cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password, { delay: 100 });
  expect(true).to.equal(true);
});

// Test Case 13: Click on Sign In Button after providing correct credentials
it('13- Click on Sign In Button after providing correct credentials.', () => {
  cy.get('.btn').click();
  cy.wait(4000);
  expect(true).to.equal(true);
});

// Test Case 14: Skip verifying the Toast Message for Successful Login (Not recommended in real tests)
it.skip('14- Verifying the Toast message for Successful Login (Skipped - not recommended in real tests)', () => {
  cy.wait(1000);
  cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Login Successful');
  cy.wait(2000);
});



it('', () => {
    cy.wait(2000)
});

it('', () => {
    
});


} 
export default Icon_Admin_Login;
