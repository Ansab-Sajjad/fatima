
 export function Document_Types() {

    it('Click on Document type.', () => {
      cy.get('[data-testid="mainmenu-settings"] > .float-end').click({force:true})
        cy.wait(4000)
        cy.get('[data-testid="submenu-documet-settings"] > :nth-child(2)').click({force:true})
        cy.wait(4000)
    });

    it('Click on Add New type Button.', () => {
      cy.get('[data-testid="add-document-settings-btn"]').click({force:true})
        cy.wait(4000)
    });

    it('Select a Category.', () => {
      cy.get('#category > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
      cy.get('.custom-select__option:eq(3)').click({force: true}).wait(3000)
  });

  it('Select  Sub Category.', () => {
   cy.get('#subCategory > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
   cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
});

it('Select a Type.', () => {
   cy.get('#type > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
   cy.get('.custom-select__option:eq(4)').click({force: true}).wait(3000)
});

}
