

function Timesheet_Search() {

    it('Click on Timesheet', () => {
        cy.get('[data-testid="mainmenu-time-sheets"]').click({force: true}).wait(3000)
        expect(true).to.equal(true)
    });

    
    
    it('Search By Provider Name.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Facility Name.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Provider Working For.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Area of Expertise.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Pay Period.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#payPeriod > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Created At.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#createdAt').click().type("09/12/2023")
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Created By.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Approval Status.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#approvalStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });

    it('Search By Approved By.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#approvedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click()
        cy.wait(2000)
    
    });


}
export default Timesheet_Search;
