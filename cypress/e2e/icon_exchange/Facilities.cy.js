import Random_Textt from "./Random_Text";

function Add_Icon_Exchange_Facilities() {


it('F1- Click on the Facilities.', () => {
    cy.wait(3000)
    cy.get('[data-testid="mainmenu-facilities"]').click()
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
    cy.get('[name="contacts.0.contactName"]').clear().type("Muhammad Azlaan");
});

it('Add Contact Email.', () => {
    cy.get('[name="contacts.0.contactEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

it('Click on Add More Button.', () => {
    cy.get('[data-testid="addmorebtn"]').click().wait(1000)
});


it('Add Timesheet Approver.', () => {
    cy.get('[name="contacts.1.contactName"]').clear().type("Ansab Sajjad");
});

it('Add Contact Email.', () => {
    cy.get('[name="contacts.1.contactEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

it('Click on Second Primary Contact Button.', () => {
    cy.get('[for="contacts.1.isPrimaryContact"]').click().wait(1000)
});

it('Click on Created Button.', () => {
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
