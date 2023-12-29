function Timesheet(){

    it('Click on Timesheet', () => {
        cy.get('[data-testid="mainmenu-time-sheets"]').click({force: true}).wait(3000)
    });

    it('Click on Add Time Sheet Button.', () => {
        cy.get('[data-testid="logtimebtn"]').click({force: true})
    });

    it('Click on Manually Import option.', () => {
        cy.get('[data-testid="manualimport"]').click({force: true})
    });


    it('Select First Pay Period.', () => {
        cy.get('#payPeriodId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    });


    it('Click on Add Button.', () => {
        cy.get('[data-testid="addbtn"]').click({force: true}).wait(3000)
    });


    it('Select Provider.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})
        cy.get('.custom-select__option:eq(4)').click({force: true}).wait(2000);
    });


    it('Select Facility Name.', () => {
        cy.get('#assignmentId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true})
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(2000);
    });


    it('Add Description.', () => {
        cy.get('textarea').type("This description is computer generated.")
    });


    it('Enter Regular Start Time.', () => {
        cy.get('[id="timeLogs.0.regularStartTime"]').type("5:45 AM")
    });


    it('Enter Regular Shit End Time.', () => {
        cy.get('[id="timeLogs.0.regularEndTime"]').click({force: true}).type("12:15 PM")
    });


    it('Enter Scheduled Hours.', () => {
        cy.get('[data-testid="scheduledhours-0"]').type(8)
    });


    
    it('Enter Regular Start Time.', () => {
        cy.get('[id="timeLogs.1.regularStartTime"]').type("5:45 AM")
    });


    it('Enter Regular Shit End Time.', () => {
        cy.get('[id="timeLogs.1.regularEndTime"]').click({force: true}).type("12:15 PM")
    });


    it('Enter Scheduled Hours.', () => {
        cy.get('[data-testid="scheduledhours-1"]').type(8)
    });

    it('Check the Holiday Checkbox.', () => {
        cy.get(':nth-child(2) > .daydate-col > .row > .col > .mb-0 > .holidaycheck > .form-check-label').click({force: true}).wait(1000)
    });


    it('Log Evening on Call Pager.', () => {
        cy.get(':nth-child(3) > :nth-child(6) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true})
    });

    it('Log Evening on Call Pager time.', () => {
        cy.get(':nth-child(4) > :nth-child(6) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true})
    });

    it('Enter Service on call  Start time.', () => {
        cy.get('[id="timeLogs.3.serviceOnCallInHouseCall.0.startTime"]').type("5:45 AM")
    });


    it('Enter Service on call  End time.', () => {
        cy.get('[id="timeLogs.3.serviceOnCallInHouseCall.0.endTime"]').click({force: true}).type("12:15 PM")
    });


    it('Enable In house call field.', () => {
        cy.get(':nth-child(5) > :nth-child(9) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true}).wait(2000)
    });


    it('Enter In House Call Start Time.', () => {
        cy.get('[id="timeLogs.4.serviceOnCallInHouseCall.0.startTime"]').type("5:45 AM")
        
    });


    it('Enter In House Call End Time.', () => {
        cy.get('[id="timeLogs.4.serviceOnCallInHouseCall.0.endTime"]').click({force: true}).type("12:15 PM")
        
    });


    it('Enable 24 hours pager call.', () => {
        cy.get(':nth-child(6) > :nth-child(7) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true})
    });

    it('Enter Required hours.', () => {
        cy.get('[id="timeLogs.5.pagerHours"]').type('10')
    });

    it('Enter 24 Hours Start Time.', () => {
        cy.get(':nth-child(7) > :nth-child(7) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true}).wait(1000)
        cy.get('[id="timeLogs.6.pagerHours"]').type('10')

        cy.get('[id="timeLogs.6.serviceOnCallInHouseCall.0.startTime"]').type("5:45 AM")

    });


    it('Enter 24 Hours End Time.', () => {
        cy.get('[id="timeLogs.6.serviceOnCallInHouseCall.0.endTime"]').click({force: true}).type("12:15 PM")
        
    });


    it('Click on Evening on Call Pager.', () => {
        cy.get(':nth-child(11) > :nth-child(6) > .col > .mb-0 > .form-checkbox > .form-check-label').click({force: true})
    });


    it('Click on Submit for Approval.', () => {
        cy.get('[data-testid="submit-approval"]').click().wait(2000)
   
        // Check if the signature modal body is visible
cy.get('.modal-body').should('be.visible').then(($modalBody) => {
    if ($modalBody.length > 0) {
      // The modal body is visible, so add signature on '.form-control'
      cy.get('.form-control').type("ANSAB").wait(1000)
      cy.get('#supervisorEmail > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
      cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
      cy.get('[data-testid="confirm-submit-approval"]').click().wait(2000)
      cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Timesheet submitted for approval')
    } else {
      // The modal body is not visible, so click on '#supervisorEmail'
      cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Timesheet has been approved sucessfully')
    }
  });
    });



}
export default Timesheet;
