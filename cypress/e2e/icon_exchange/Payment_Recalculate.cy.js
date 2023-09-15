export function Payment_Recalculate(){


      //===================> which list do you want to recalculate.?

      const index = 2;

      it('Click on Payment Menu.', () => {
          cy.get('[data-testid="mainmenu-payments"]').click().wait(3000)
      });
  
  
      it('Click 3 Dots.', () => {
        //   cy.get(`:nth-child() > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`).click({force:true})
          cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic`).click({force:true})
      });
  
      it('Click on Recalculate Button Button.', () => {
        cy.contains('Recalculate Payment').click({force: true}).wait(4000)
          
      });





}