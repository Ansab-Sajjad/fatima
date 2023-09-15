
function Malpractice_Search(){

    it(' Click on Malpractice.', () => {
        cy.get('[data-testid="mainmenu-providers"] > .float-end').click({force: true})
        cy.get('[data-testid="submenu-malpractice-rates"]').click({force: true}).wait(5000)
    });

    it('Search by Malpractice Insurance Provider..', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#malpracticeInsuranceProvider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;

         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(3000)
    
    });



    
    it('Search by Area of Expertise.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
    });

    
    // it('Search by Division.', () => {
    //     cy.get('.left-icon').click({force: true})
    //     cy.wait(2000)
    //     cy.get('[id="division"]').click({force: true}).type("anesthesiology").type('{enter}').wait(2000)
    //     // cy.get('#react-select-16-option-0').click({force: true})

    //      cy.get('[data-testid="search"]').click({force:true})
    //     cy.wait(5000)
    
    
    // });
    
    
    // it('Clear Filter.', () => {
    //     cy.get('.left-icon').click({force: true})
    //     cy.wait(2000)
    //     cy.get('[data-testid="clear"]').click({force: true})
    //     cy.wait(2000)
    
    // });
    
    
    // it('Search by Procedure Type', () => {
    //     cy.get('.left-icon').click({force: true})
    //     cy.wait(2000)
    //     cy.get('[id="procedureType"]').click({force:true}).type("major Surgery").type('{enter}').wait(2000)
    //     // cy.get('#react-select-17-option-0').click({force: true})

    //      cy.get('[data-testid="search"]').click({force:true})
    //     cy.wait(5000)
    
    
    // });
    
    
    // it('Clear Filter.', () => {
    //     cy.get('.left-icon').click({force: true})
    //     cy.wait(2000)
    //     cy.get('[data-testid="clear"]').click({force: true})
    //     cy.wait(2000)
    
    // });


    it('Search by Created At', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('#createdAt').click({force:true}).type("09/18/2023")
        cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)

    });

    it('Clear Filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
    });

    it('Search by Created By', () => {
        cy.get('.left-icon').click({force: true})
  cy.wait(2000)
    cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
  cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
  cy.get('[data-testid="search"]').click({force:true})
  cy.wait(5000)
});

it('Clear Filter.', () => {
  cy.get('.left-icon').click({force: true})
  cy.wait(2000)
  cy.get('[data-testid="clear"]').click({force: true})
  cy.wait(2000)

});



}

export default Malpractice_Search;