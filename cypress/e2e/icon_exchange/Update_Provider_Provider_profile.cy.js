import { Provider_profile } from "./Provider_profile.cy";

export function Update_Provider_Provider_profile(){



    
 //===================> which list do you want to Update.?
 const index = 1;

 it('Click on provider.', () => {
    cy.get('[data-testid="submenu-providers-listing"] > :nth-child(2)').click()
    cy.wait(2000)
//     expect(true).to.equal(true)
});


 it('Click on 3 dots. ', () => {
    cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`).click({force: true}).wait(2000)
       });

it('Click on Edit Info.', () => {
    cy.get('[data-testid="edit-info"]').click()
});

it('wait for few seconds', () => {
    cy.wait(3000)
    
});
Provider_profile()



}