import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
// import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";
import {Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";
import Random_Textt from "./Random_Text";

function Provider_Signup() {

it('1- Click on Register Now.', () => {
    cy.wait(3000)
    cy.get('.fs-12 > .anchor').click({force: true})
});

it('2- Enter First Name.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB " + Random_Textt(), {delay:150})
});

it('3- Enter Middle Name.', () => {
    cy.get(':nth-child(2) > .form-group > .form-controls > input').type("xyz " + Random_Textt(), {delay:150})
});

it('4- Enter Last Name.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > input').type("abc " + Random_Textt(), {delay:150})
});

it('Enter Email.', () => {
    cy.get(':nth-child(4) > .form-group > .form-controls > input').type( Provider_data.Provider_Email)
});
it('5- Enter Password.', () => {
    cy.get(':nth-child(5) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
});

it('6- Enter Confirm Password.', () => {
    cy.get(':nth-child(6) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
});

it('7- Agree with terms and condition.', () => {
    cy.get('.form-checkbox > label').click({force: true})
});
 it('8- Click on Next Button.', () => {
    cy.get('.btn').click({force: true})
    cy.wait(30000)
 });

// it('9- Go to Login page.', () => {
//   Icon_Exchange_URL();
// });

Icon_Exchange_URL();

}
export default Provider_Signup;