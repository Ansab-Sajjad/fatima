import {Super_Admin_data, Icon_User_data,  Provider_data} from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Provider_Login(){


    it('2- Logo should be present.', () => {
        cy.get('.logo').should('be.visible')
          
      });
      
      it('3- Main image should be present.', () => {
        cy.wait(1000)
        cy.get('.login-bg').should('be.visible')
      });

    
    it('4- Enter Provider Email.', () => {
        cy.wait(2000);
        cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Provider_data.Provider_Email, {delay: 100})

        expect(true).to.equal(true)
       
    });
    
    it('11- Enter Provider Password.', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Provider_data.Provider_Password, {delay: 100})
        expect(true).to.equal(true)
    
    });
    
    it('12- Click on Sign In Button.', () => {
        cy.get('.btn').click({force:true})
        cy.wait(8000)
        expect(true).to.equal(true)
    });
    
    // it('5- Verifying the Toast message => Login Successful.', () => {
    //     cy.wait(1000);
    //     cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
    //     cy.wait(2000)
    // });

  




    
    // it("Clicks button or image based on condition", () => {
    //     cy.get(
    //       '#left-tabs-example-tabpane-5 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn',
    //       { timeout: 10000 }
    //     ).then(($button) => {
    //       if ($button.length > 0) {
    //         // If the first button is found, click on it
    //         cy.wrap($button).click();
    //       } else {
    //         // If the first button is not found, click on the second button
    //         cy.get(".brand-link > img").click();
    //       }
    //     });
    //   });


    it('Check if Complete Profile Later Exist.', () => {
        
        
        // Check if the signature modal body is visible
        cy.get('#left-tabs-example-tabpane-5 > .form-footer-full > .container > .row > .col-md-4').should('be.visible').then(($modalBody) => {
    if ($modalBody.length > 0) {
      // The modal body is visible, so add signature on '.form-control'
      cy.get('#left-tabs-example-tabpane-5 > .form-footer-full > .container > .row > .col-md-4 > .btn').click().wait(2000)
    } else {
      // The modal body is not visible, so click on '#supervisorEmail'
              cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')

    }
  });
    });

}
export default Provider_Login;