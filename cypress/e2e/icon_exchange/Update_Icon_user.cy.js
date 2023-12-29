import Random_Textt from "./Random_Text";

function Update_Icon_user() {


    it('IU-1 Click on Icon users.', () => {
        cy.get('[data-testid="mainmenu-icon-users"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-users-listing"]').click().wait(1000)
    expect(true).to.equal(true)
    });
    
    
    it('IU-2 Click on 3 Dots button.', () => {
        cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click()
    expect(true).to.equal(true)
    });

       it('Click on update info button.', () => {
        cy.get('[data-testid="editbtn"]').click()
    });


    
it('IU-3 Enter First Name.', () => {
    cy.get('[placeholder="Enter First Name"]').clear().type("ANSAB  " + Random_Textt(), {delay:150})
// expect(true).to.equal(true)
});


it('IU-4 Enter Last NAme.', () => {
    cy.get('[placeholder="Enter Last Name"]').clear().type("XYZ " + Random_Textt(), {delay:150})
expect(true).to.equal(true)
});

it('IU-6 Enter Phone Number.', () => {
    cy.get('.form-control').clear().type("456784554953647", {delay:150})
expect(true).to.equal(true)
});


it.skip('IU-7 Enter Date of Birth.', () => {
    cy.get('#birthDate').clear().type("11/28/2000").type('{enter}')
// expect(true).to.equal(true)
});

it('IU-8 Enter Role.', () => {
    cy.get('#role > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);

expect(true).to.equal(true)
});
it('IU-9 Enter Department.', () => {
    cy.get('#department > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);
    expect(true).to.equal(true)
});

it('IU-10 Enter Company Name.', () => {
    cy.get('#company > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);
    expect(true).to.equal(true)

});

it('Click on Update button.', () => {
    cy.get('[data-testid="createbtn"]').click()
});


    

}
export default Update_Icon_user;
