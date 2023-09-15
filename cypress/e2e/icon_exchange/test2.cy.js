import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
import Random_Textt from "./Random_Text";


describe('', () => {
    
    Icon_Exchange_URL()
    
it('enter text.', () => {
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ansabsajjad+" + Random_Textt()  + "@gmail.com")
});



});