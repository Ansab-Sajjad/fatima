import Random_Textt from "./Random_Text";

export function Provider_profile() {
    it('Click on Basic Info.', () => {
        cy.wait(5000)
        cy.get('[data-testid="basic-info-tab"] > .d-flex > .tabname').click().wait(1000)
    });
it('Upload profile image.', () => {
    cy.wait(3000)

    // cy.get('[name="img"]').click({force:true})
    const filepath11 = "a11.jpg"
    cy.get('[name="img"]').attachFile(filepath11)
    cy.wait(5000)

   
});
        
it('Enter Date of birth.', () => {
    cy.get('#birthDate').click({force:true}).type("01/06/1998")
});

it('Click on Save and continue.', () => {
    cy.get('#left-tabs-example-tabpane-1 > form > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force: true})
});


it('F-14 Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully')
    cy.wait(2000)
});

it('Click on Address and Time Zone.', () => {
    cy.get('[data-testid="address-timezone-tab"] > .d-flex > .tabname').click().wait(1000)
});
it('Select country', () => {

    cy.get('#countryMand > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    expect(true).to.equal(true)
});




it('Select State.', () => {
    cy.get('#stateMand > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
});

it('Select City', () => {
    cy.get('#cityMand > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
});

it('Enter Postal code.', () => {
    cy.get('#postalCodeMand').click({force:true}).type(Random_Textt())
});

it('Enter Distance.', () => {
    cy.get('#maxClientDistanceMand').click({force:true}).type("50")
});

it('Select Time Zone.', () => {
    cy.get('#timeZone > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
});


it('Click on Save and Continue button.', () => {
    cy.get('#left-tabs-example-tabpane-2 > form > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click()
});
it('click on Contact Information', () => {
    cy.get('[data-testid="contact-info-tab"] > .d-flex > .tabname').click().wait(1000)
});

it('Enter Phone Number.', () => {
    cy.get(':nth-child(1) > .form-group > .form-controls > .react-tel-input > .form-control').type(923483745911).wait(2000)
});
it('Enter Home Number.', () => {
    cy.get(':nth-child(1) > .row > :nth-child(2) > .form-group > .form-controls > .react-tel-input > .form-control').clear().type(923483745911).wait(2000)
});

it('Enter Contact relationship.', () => {
    cy.get(':nth-child(2) > .mt-24 > .row > .col-md-12 > .form-group > .form-controls > input').click({force:true}).clear().type("xyz")
});

it('Enter Cotact Name.', () => {
    cy.get(':nth-child(2) > .mt-24 > .row > :nth-child(1) > .form-group > .form-controls > input').clear().type(Random_Textt())
});

it('Enter Contact Number.', () => {
    cy.get('form > :nth-child(2) > .mt-24 > .row > :nth-child(2) > .form-group > .form-controls > .react-tel-input > .form-control').clear().type(923483745911).wait(2000)
});

it('Click on Save and continue.', () => {
    cy.get('#left-tabs-example-tabpane-3 > form > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true})
});

it('Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully')
    cy.wait(2000)
});

it('Click on Area of Expertise.', () => {
    cy.get('[data-testid="area-expertise-tab"] > .d-flex > .tabname').click().wait(1000)
});

it('Add area of experties.', () => {
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(3) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(6) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(6) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(9) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
});

it('Click on save and continue.', () => {
    cy.get('.formstyle > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true})
    cy.wait(2000)
});


it('Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully')
    cy.wait(2000)
});

// it('Enter Name of your resume.', () => {
//     cy.get('[placeholder="Name your Resume / CV"]').click({force:true}).type(Random_Textt()).wait(2000)
// });

// it('Upload Profile pcture.', () => {
//     cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').click({force:true})
//     cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').attachFile("dummy.pdf")
     
// });

// it('Click on Skip for Now button.', () => {
//     cy.get('#left-tabs-example-tabpane-5 > .form-footer-full > .container > .row > .col-md-8 > .btn-text').click({force:true})
//     cy.wait(3000)
// });

it('Click on Incorporated Status.', () => {
    cy.get('[data-testid="incorporated-status-tab"] > .d-flex > .tabname').click().wait(1000)
});
it('Select Incorporated Status.', () => {
    cy.get('.radio-wrapper > :nth-child(2) > div > label.form-label').click({force:true}).wait(2000)
});

it('Are you currently, or will you be providing services for any of the following companies?', () => {
    
    cy.get('.form-group > :nth-child(2) > div > .form-label').click({force: true})
//   cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force: true})

//   cy.get('.form-group > :nth-child(1) > div > .form-label').click({force: true})
//   cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force: true})
 
});

//////////////////////////////


it('Click on Save & contiunue button.', () => {
    cy.get('#left-tabs-example-tabpane-5 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true}).wait(2000)
});


it('Verifying the Toast message.', () => {
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully')
    cy.wait(3000)
});








////////////////////////////////////////////

it('Add Notes for Provider if exist.', () => {
    // cy.get('[data-testid="submit-approval"]').click().wait(2000)

    // Check if the signature modal body is visible
    cy.get('[data-testid="icon-info-tab"] > .d-flex > .tabname').should('be.visible').then(($modalBody) => {
if ($modalBody.length > 0) {
  // The modal body is visible, so add signature on '.form-control'
  cy.wait(1000)
  cy.get('textarea').click()
  cy.wait(1000).clear().type("name: xyz belong: ").type(Random_Textt())
  cy.get('#left-tabs-example-tabpane-6 > form > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true}).wait(2000)
  cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully').wait(2000)
  cy.get('.d-flex > .btn').click()
} else {
  // The modal body is not visible, so click on '#supervisorEmail'
  cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile has been updated successfully')
}
});
});















////////////////////////////////////


// it('Click on Save & contiunue button.', () => {
   
// });


// it('Verifying the Toast message.', () => {
   
//     cy.wait(3000)
// });

// it('Click on Finish Button.', () => {
//     cy.get('.d-flex > .btn').click()
// });


}