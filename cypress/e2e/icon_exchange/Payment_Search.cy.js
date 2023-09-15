export function Payment_Search(){


    it('Click on Payment Menu.', () => {
        cy.get('[data-testid="mainmenu-payments"]').click().wait(3000)
    });



     
    it('Search by Provider Name.', () => {
        cy.wait(2000)
        cy.get('.left-icon').click({force: true})
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
        cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
       });
       
        it(' Clear Search filter.', () => {
           cy.get('.left-icon').click({force: true})
           cy.wait(2000)
           cy.get('[data-testid="clear"]').click({force: true})
           cy.wait(2000)
       
        });


         
        it('Search by Facility Name.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
            cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
            cy.get('[data-testid="search"]').click({force: true})
            cy.wait(5000)
           });
           
            it(' Clear Search filter.', () => {
               cy.get('.left-icon').click({force: true})
               cy.wait(2000)
               cy.get('[data-testid="clear"]').click({force: true})
               cy.wait(2000)
           
            });

             
        it('Search by Provider working For.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
            cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
            cy.get('[data-testid="search"]').click({force: true})
            cy.wait(5000)
           });
           
            it(' Clear Search filter.', () => {
               cy.get('.left-icon').click({force: true})
               cy.wait(2000)
               cy.get('[data-testid="clear"]').click({force: true})
               cy.wait(2000)
           
            });

             
        it('Search by Areas of Expertise.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
            cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
            cy.get('[data-testid="search"]').click({force: true})
            cy.wait(5000)
           });
           
            it(' Clear Search filter.', () => {
               cy.get('.left-icon').click({force: true})
               cy.wait(2000)
               cy.get('[data-testid="clear"]').click({force: true})
               cy.wait(2000)
           
            });

             
        it('Search by Pay Period.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#payPeriod > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
            cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
            cy.get('[data-testid="search"]').click({force: true})
            cy.wait(5000)
           });
           
            it(' Clear Search filter.', () => {
               cy.get('.left-icon').click({force: true})
               cy.wait(2000)
               cy.get('[data-testid="clear"]').click({force: true})
               cy.wait(2000)
           
            });

             
        it('Search by Created At.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#createdAt').type("09/13/2023")
            cy.get('[data-testid="search"]').click({force: true})
            cy.wait(5000)
           });
           
            it(' Clear Search filter.', () => {
               cy.get('.left-icon').click({force: true})
               cy.wait(2000)
               cy.get('[data-testid="clear"]').click({force: true})
               cy.wait(2000)
           
            });









}