import View_Provider from "./View_Provider.cy";

function Assign_Facility(){

    it('VP-1 Click on provider.', () => {
        cy.get('[data-testid="submenu-providers-listing"] > :nth-child(2)').click()
        cy.wait(2000)
        expect(true).to.equal(true)
    
    });
    
    it('VP-2 Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('VP-3 Click on 3 dot button.', () => {
       cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('VP-4 Click on View Provider button', () => {
        cy.contains('View Provider').wait(1000).click();
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('VP-5 Scroll.', () => {
        cy.scrollTo("center").wait(2000)
        cy.scrollTo("bottom").wait(2000)
        cy.scrollTo("top").wait(2000)
        
    });
it('Vp-6 Click on Facilities.', () => {
    cy.get('[data-testid="facilities-tab"] > .tabname').click()
    cy.wait(4000)
    expect(true).to.equal(true)
});

it('VP-7 Scroll.', () => {
    cy.scrollTo("bottom",{ensureScrollable: false}).wait(2000)
    cy.scrollTo("top").wait(2000)    
});

it('VP-8 Click on Assign Facilities.', () => {
    // cy.get('.mt-90 > .btn').click()
    // cy.get('.px-5').click()
    cy.get('[data-testid="assign-facility-btn"]').click()
    cy.wait(2000)
    expect(true).to.equal(true)

});

it('VP-9 Add Facility Name', () => {
   
    cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(2000)
    // cy.get('.custom-select__option:first').click().wait(100)
    cy.get('.custom-select__option:eq(0)').click().wait(100)

    expect(true).to.equal(true)

});

it('VP-10 Add Facility Contracted By.', () => {
    cy.get('#contractedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-11 Provider working for.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-12 Add Area Expertise', () => {
    cy.get(':nth-child(4) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(2000)
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});

it('VP-13 Paper work submitted to Facility.', () => {
    cy.get('#paperWorkSubmittedToFacility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});

it('VP-14 Paperwork submitted date.', () => {
    cy.get(':nth-child(6) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("02/14/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it("VP-15 Facility's approval", () => {
    cy.get('#facilityApproval > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});

it('VP-16 Received Facility Approval Date.', () => {
    cy.get('#recievedFacilityApprovalAt').type("02/21/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-17 Payroll Enrollment Status.', () => {
    cy.get('#payorEnrollmentStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});

it('VP-18 Currently Active.', () => {
    cy.get('#currentlyActive > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(2000)
    cy.get('.custom-select__option:eq(0)').click().wait(100)

    expect(true).to.equal(true)

});

it('VP-19 Currently Effective Start Date.', () => {
    cy.get('#effectiveStartDate').type("02/27/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('Vp-20 Effective End Date.', () => {
    cy.get('#effectiveEndDate').type("03/02/2023").type('{enter}').wait(2000)
});

it('VP-21 Reoppoinment Date.', () => {
    cy.get('#reappointmentDate').type("03/04/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});


                                /////////////////////////////////


it('VP- Malpractice Insurance', () => {
    cy.get('#malpracticeInsurance > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-Recruiter', () => {
    cy.get('#recruiter > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-Account Manager', () => {
    cy.get('#accountManager > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-Credentialing Coordinator', () => {
    cy.get('#credentialingCoordinator > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-Client', () => {
    cy.get('#client > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-Job Type', () => {
    cy.get('#jobType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(1)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-VMS Name', () => {
    cy.get('#vmsName > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
    cy.get('.custom-select__option:eq(0)').click().wait(100)
    expect(true).to.equal(true)

});


it('VP-VMS Fee%', () => {
    cy.get('[data-testid="vmsFee"]').click().type('10')
    expect(true).to.equal(true)

});



it('VP-22 Click on Save button.', () => {
    cy.get('[data-testid="createbtn"]').click({force:true}).wait(1000)
    expect(true).to.equal(true)

});








}
export default Assign_Facility;