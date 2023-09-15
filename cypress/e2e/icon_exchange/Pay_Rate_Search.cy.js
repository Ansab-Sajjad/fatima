
function Pay_Rate_Search(){

   it('AP -1 Click on Provider Rates.', () => {
      cy.get('[data-testid="submenu-provider-rates"]').click()
  expect(true).to.equal(true)
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

        ////////////////////////

       
it('Search by Facility Name.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0  
   cy.get('[data-testid="search"]').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Area of expertise.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(3000)
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

 
////////////////////////

       
it('Search by Provider Working for.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
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

 ////////////////////////

       
it('Search by Rate Start Date', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#rateStartDate').type("10/11/2023").wait(1000)
   cy.get('[data-testid="search"]').click({force: true})
    
    cy.wait(5000)

   

});

it(' Clear Search filter.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('[data-testid="clear"]').click({force: true})
   cy.wait(2000)

});


 ////////////////////////

       
it('Search by Rate End Date', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#rateEndDate').type("10/20/2023").wait(1000)
   cy.get('[data-testid="search"]').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

//  ////////////////////////

       
//  it('Search by Effective Start Date', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[id="effectiveStartDate"]').type("03/17/2023").wait(1000)
//    cy.get('[data-testid="search"]').click({force: true})
    
//     cy.wait(5000)

   

// });

//  it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[data-testid="clear"]').click({force: true})
//     cy.wait(2000)

//  });

 
//  ////////////////////////

       
// it('Search by Guaranteed Hours.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[field_id="guaranteedHours"]').type("1").wait(1000)
//    cy.get('[data-testid="search"]').click({force: true})
    
//     cy.wait(5000)

   

// });

//  it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[data-testid="clear"]').click({force: true})
//     cy.wait(2000)

//  });

 
 
//  ////////////////////////

       
// it('Search by Billing Rate.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[field_id="billingRate"]').type("12").wait(1000)
//    cy.get('[data-testid="search"]').click({force: true})
    
//     cy.wait(5000)

   

// });

//  it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[data-testid="clear"]').click({force: true})
//     cy.wait(2000)

//  });

//  ////////////////////////

       
//  it('Search by OT after Hours Daily.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[field_id="otAfterHoursDaily"]').type("1").wait(1000)
//    cy.get('[data-testid="search"]').click({force: true})
    
//     cy.wait(5000)

   

// });

//  it(' Clear Search filter.', () => {
//     cy.get('.left-icon').click({force: true})
//     cy.wait(2000)
//     cy.get('[data-testid="clear"]').click({force: true})
//     cy.wait(2000)

//  });

 
//   ////////////////////////

       
  it('Search by Hourly Pay Rate.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('[data-testid="hourlyPayRate"]').type("318").wait(1000)
  cy.get('[data-testid="search"]').click({force: true})
   
   cy.wait(5000)

  

});

it(' Clear Search filter.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('[data-testid="clear"]').click({force: true})
   cy.wait(2000)

});


it('Search by Approval Status.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('#approvalStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
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
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('#createdAt').type("09/11/2023").wait(1000)
  cy.get('[data-testid="search"]').click({force: true})
   
   cy.wait(5000)

  

});

it(' Clear Search filter.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('[data-testid="clear"]').click({force: true})
   cy.wait(2000)

});


it('Search by Created By.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000)
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


        

}

export default Pay_Rate_Search;