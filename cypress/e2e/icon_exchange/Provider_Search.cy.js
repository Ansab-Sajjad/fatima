
function Provider_Search(){

    
it('Click on provider.', () => {
    cy.get('[data-testid="submenu-providers-listing"] > :nth-child(2)').click()
    cy.wait(2000)
//     expect(true).to.equal(true)

});

 

it('Search by First Name.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#firstName').type("ANSAB").wait(1000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });



 it('Search by Last Name.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#lastName').type("abc").wait(1000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });

 it('Search by Email.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#email').type("troontechnologies.com").wait(1000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });



 it('Search by Phone.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#phone').type("3483745").wait(1000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });


//  it('Search by Company.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
//     cy.get('[#profileStatus]').type("completed").type('{enter}').wait(2000)
//    cy.get('[data-testid="search"]').click({force:true})
//     cy.wait(5000)
// //     expect(true).to.equal(true)
// });

// it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
// cy.get('[data-testid="clear"]').click({force:true})
//     cy.wait(2000)
// //     expect(true).to.equal(true)
//  });


//  it('Search by Recruiter..', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
//     cy.get(':nth-child(6) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Faizan").type('{enter}').wait(2000)
//    cy.get('[data-testid="search"]').click({force:true})
//     cy.wait(5000)
// //     expect(true).to.equal(true)
// });

// it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
// cy.get('[data-testid="clear"]').click({force:true})
//     cy.wait(2000)
// //     expect(true).to.equal(true)
//  });

 it('Search by Profile Status..', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#profileStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("completed").type('{enter}').wait(2000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });

 it('Search by Agreement Status..', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#agreementStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("signed").type('{enter}').wait(2000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });

//  it('Search by Agreement Status.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
//     cy.get(':nth-child(9) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Signed").type('{enter}').wait(2000)
//    cy.get('[data-testid="search"]').click({force:true})
//     cy.wait(5000)
// //     expect(true).to.equal(true)
// });

// it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
// cy.get('[data-testid="clear"]').click({force:true})
//     cy.wait(2000)
// //     expect(true).to.equal(true)
//  });

//  it('Search by Agreement Status.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
//     cy.get(':nth-child(10) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Faizan").type('{enter}').wait(2000)
//    cy.get('[data-testid="search"]').click({force:true})
//     cy.wait(5000)
// //     expect(true).to.equal(true)
// });

// it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force:true})
//     cy.wait(2000)
// cy.get('[data-testid="clear"]').click({force:true})
//     cy.wait(2000)
// //     expect(true).to.equal(true)
//  });



 it('Search by Created At.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#createdAt').type("02/13/2023").type('{enter}').wait(2000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });


 it('Search by Created By.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Super admin").type('{enter}').wait(2000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
   expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });


 it('Search by Area of Expertise.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Medical doctor").type('{enter}').wait(2000)
   cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
//     expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
cy.get('[data-testid="clear"]').click({force:true})
    cy.wait(2000)
//     expect(true).to.equal(true)
 });












}

export default Provider_Search;
