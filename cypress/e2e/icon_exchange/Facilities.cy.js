import Random_Textt from "./Random_Text";

function Add_Icon_Exchange_Facilities() {


it('F1- Click on the Facilities.', () => {
    cy.wait(3000)
    cy.get('[data-testid="mainmenu-facilities"] > .ml-4').click()
    expect(true).to.equal(true)
});

it("F2- Click on 'Add Facility' button.", () => {
    cy.get('[data-testid="add-facility-btn"]').should('be.visible').click()
    cy.wait(3000)
    expect(true).to.equal(true)

});

//////////////////////////

it('Add Facility Name.', () => {
    cy.get('[placeholder="Enter Name"]').clear().type("Ansab Sajjad Hospital, Now Health Care Centre")
    expect(true).to.equal(true)

});

it('Add Facility Email.', () => {
    cy.get('[name="facilityEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

it('Add Facility Contracted By.', () => {
    cy.get('#facilityContractedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 0
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)
});


it('Add Facility Phone number.', () => {
    cy.get('.form-control').clear().type("13565955656")
});
it('Add Facility Address.', () => {
    cy.get('[name="facilityAddress"]').clear().type("St-1, Block 2, Federal B Area, Karachi")
    expect(true).to.equal(true)

});


it('Add Country.', () => {
    cy.get('#country > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 1
    cy.get('.custom-select__option:eq(0)').click().wait(1000)
    expect(true).to.equal(true)
});

it('Add State.', () => {
    cy.get('#state > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 1
    cy.get('.custom-select__option:eq(0)').click().wait(1000)
    expect(true).to.equal(true)
});

it('Add City.', () => {
    cy.get('#city > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 1
    cy.get('.custom-select__option:eq(0)').click().wait(1000)
    expect(true).to.equal(true)
});


it('Add Assigned To.', () => {
    cy.get('#assignedTo > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 1
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)
});

// ================================================ Rates ================================================


it('Add Area of expertise.', () => {
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})   /////===============Array Index 1
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)
});

it('Add Hourly rate.', () => {
    cy.get('[data-testid="hourlyRate"]').clear().type("12")
});

it('Add Bill Rate.', () => {
    cy.get('[data-testid="billRate"]').clear().type("40")
});

it('Add Timesheet Approver.', () => {
    cy.get('[placeholder="Enter Timesheet Approver"]').clear().type("Muhammad Azlaan");
});

it('Add Contact Email.', () => {
    cy.get('[name="contacts.0.contactEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

// /////////////////////////////

// it('F3- Enter Facility Name.', () => {
//     cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB " + Random_Textt(), {delay:150})
//     expect(true).to.equal(true)

// });

// it('F4- Enter Email.', () => {
//     cy.get(':nth-child(2) > .form-group > .form-controls > input').type("ansab+" + Random_Textt() + "@troontechnologies.com")
//     expect(true).to.equal(true)

// });

// it('F-5 Enter Facility Contracted By.', () => {
//     cy.get(':nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
//     expect(true).to.equal(true)

// });

// it('F6- Add Number.', () => {
//     cy.get('.form-control').type("4567895376")
//     expect(true).to.equal(true)

// });

// it('F-7 Add Address.', () => {
//     cy.get(':nth-child(5) > .form-group > .form-controls > input').type("xyz Hospital")
//     expect(true).to.equal(true)
    
// });


// it('F-8 Add Country.', () => {
//     cy.get(':nth-child(6) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("United states").type('{enter}').wait(2000)
//     expect(true).to.equal(true)
    
// });


// it('F-9 Enter State.', () => {
//     cy.get(':nth-child(7) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("alabama").type('{enter}').wait(4000)
//     expect(true).to.equal(true)
    
// });


// it('F-10 Enter City.', () => {
//     cy.get(':nth-child(8) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("alabaster").type('{enter}').wait(2000)
//     expect(true).to.equal(true)
    
// });


// it('F-11 Enter Password.', () => {
//     cy.get(':nth-child(9) > .form-group > .form-controls > input').type("Admin@123")
//     cy.get(':nth-child(9) > .form-group > .form-controls > .ico').click()
//     expect(true).to.equal(true)
    
// });


// it('F-12 Enter Confirm Password.', () => {
//     cy.get(':nth-child(10) > .form-group > .form-controls > input').type("Admin@123")
//     cy.get(':nth-child(10) > .form-group > .form-controls > .ico').click()
//     expect(true).to.equal(true)
    
// });


it('F-13 Click on Created Button.', () => {
    cy.get('[data-testid="createbtn"]').click()
    cy.wait(1000)
    expect(true).to.equal(true)
 
});

it('F-14 Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Facility has been added successfully')
    cy.wait(4000)
});




}
export default Add_Icon_Exchange_Facilities;
