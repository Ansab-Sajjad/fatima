
 export function Credenitialing_Payor_Search() {

    it('Click on Credentialing & Payor Menu.', () => {
        cy.get('[data-testid="submenu-credentialing-pe"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('Search by Provider Name.', () => {
        cy.wait(2000)
        cy.get('.left-icon').click({force: true})
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
        cy.get('[data-testid="search"]').click({force: true})
        cy.wait(5000)
       });
       
        it(' Clear Search filter.', () => {
           cy.get('.left-icon').click({force: true})
           cy.wait(2000)
           cy.get('[data-testid="clear"]').click({force: true})
           cy.wait(2000)
       
        });

        it('Search by Area of Expertise.', () => {
            cy.wait(2000)
            cy.get('.left-icon').click({force: true})
            cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
            cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
            cy.wait(5000)
           });

            it('Search by Facility Name.', () => {
                cy.wait(2000)
                cy.get('.left-icon').click({force: true})
                cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
                cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
                cy.get('[data-testid="search"]').click({force: true})
                cy.wait(5000)
               });
               
                it(' Clear Search filter.', () => {
                   cy.get('.left-icon').click({force: true})
                   cy.wait(2000)
                   cy.get('[data-testid="clear"]').click({force: true})
                   cy.wait(2000)
               
                });

                   it('Search by Credentialing Type.', () => {
                    cy.wait(2000)
                    cy.get('.left-icon').click({force: true})
                    cy.get('#credentialingType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
                    cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
                    cy.wait(5000)
                   });

        
                    it('Search by Credentialing Year.', () => {
                        cy.wait(2000)
                        cy.get('.left-icon').click({force: true})
                        cy.get('#credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
                        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
                        cy.get('[data-testid="search"]').click({force: true})
                        cy.wait(5000)
                       });
                       
                        it(' Clear Search filter.', () => {
                           cy.get('.left-icon').click({force: true})
                           cy.wait(2000)
                           cy.get('[data-testid="clear"]').click({force: true})
                           cy.wait(2000)
                       
                        });

                        it('Search by Target Start.', () => {
                            cy.wait(2000)
                            cy.get('.left-icon').click({force: true})
                            cy.get(':nth-child(7) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').clear().type("12/10/2023 - 12/28/2023").type('{enter}').wait(1000)  /////===============Array Index 0;   /////===============Array Index 0
                            cy.get('[data-testid="search"]').click({force: true})
                            cy.wait(5000)
                           });
                           
                            it(' Clear Search filter.', () => {
                               cy.get('.left-icon').click({force: true})
                               cy.wait(2000)
                               cy.get('[data-testid="clear"]').click({force: true})
                               cy.wait(2000)
                           
                            });

                            it('Search oK To Schedule.', () => {
                                cy.wait(2000)
                                cy.get('.left-icon').click({force: true})
                                cy.get('#okToSchedule > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
                                cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;   /////===============Array Index 0
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
