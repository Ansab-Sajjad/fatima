function edit_facility() {


 //===================> which list you want to Update.?
    const index = 1;



    it('F1- Click on the Facilities.', () => {
        cy.wait(3000)
        cy.get('[data-testid="mainmenu-facilities"] > .ml-4').click().wait(3000)
        expect(true).to.equal(true)
    });


 it('PD-4 Click on 3 dots. ', () => {
    cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`).click({force: true}).wait(2000)
       });



it('Click on View button', () => {
    cy.contains('Edit Info').click({force:true}).wait(3000);
    expect(true).to.equal(true)

});


it('Edit Facility Name.', () => {
    cy.get('[name="facilityName"').clear().type("Johar Khatoon Hospital, Now Health Care Centre")
    expect(true).to.equal(true)

});

it('Edit Facility Contracted By.', () => {
    cy.get('#facilityContractedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(2000)
    expect(true).to.equal(true)
});


it('Edit Facility Phone number.', () => {
    cy.get('[placeholder="1 (702) 123-4567"]').clear().type("13565955656")
});
it('Edit Facility Address.', () => {
    cy.get('[name="facilityAddress"]').clear().type("St-1, Block 2, Federal B Area, Karachi")
    expect(true).to.equal(true)

});


it('Update Country.', () => {
    cy.get('#country > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update State.', () => {
    cy.get('#state > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update City.', () => {
    cy.get('#city > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(3000)
    expect(true).to.equal(true)
});


it('Update Assigned To.', () => {
    cy.get('#assignedTo > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update Area of Expertise.', () => {
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);   /////===============Array Index 0
});

it('Update Hourly rate.', () => {
    cy.get('[data-testid="hourlyRate"]').clear().type("564");
});

it('Update Bill rate.', () => {
    cy.get('[data-testid="billRate"]').clear().type("864");
});

it('Update Timesheet Approver Name.', () => {
    cy.get('[name="contacts.0.contactName"]').clear().type("Ansab Sajjad")
});

it("Update Timesheet Approver's Email", () => {
    cy.get('[name="contacts.0.contactEmail"]').clear().type("ansab@troontechnologies.com")
});



it('Click on Update Button.', () => {
     cy.get('[data-testid="createbtn"]').click({force: true})
    expect(true).to.equal(true)

});

}

export default edit_facility;