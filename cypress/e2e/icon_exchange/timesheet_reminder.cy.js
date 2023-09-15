function Timesheet_Reminder(){

    it('Click on Notification Button.', () => {
        cy.get('[data-testid="mainmenu-notifications"]').click()
    });


    it('Click on Send Notification Button.', () => {
        cy.get('[data-testid="send-notifications-modal-btn"]').click()
    });



    it('Select Bi-Weekly Notification Type.', () => {
        cy.get('.form-controls > #notificationType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    });



    it('Select Pay Period.', () => {
        cy.get('#payPeriodId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;        
    });



    it('Select Providers', () => {
        cy.get('#providers > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
 
    });



    it('Click on the Send Button.', () => {
        cy.get('.clr-bluezodiac').click()
        cy.get('[data-testid="send-notifications-submit-btn"]').click()
    });

    it('Verifying the Toast message', () => {
            cy.wait(1000);
            cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Reminder has been sent sucessfully')
        });

    it('', () => {
        cy.wait(20000)
    });


    it('Click on Send Notification Button.', () => {
        cy.get('[data-testid="send-notifications-modal-btn"]').click()
    });



    it('Select Daily Notification Type.', () => {
        cy.get('.form-controls > #notificationType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);
    });



    it('Select Pay Period.', () => {
        cy.get('#payPeriodId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;        
    });



    it('Select Providers', () => {
        cy.get('#providers > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);
 
    });



    it('Click on the Send Button.', () => {
        cy.get('.clr-bluezodiac').click()
        cy.get('[data-testid="send-notifications-submit-btn"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Reminder has been sent sucessfully')
    });


}

export default Timesheet_Reminder;
