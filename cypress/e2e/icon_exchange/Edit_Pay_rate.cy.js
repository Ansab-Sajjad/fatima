function Edit_Pay_Rate(){

    
  //===================> which list do you want to test.?
  const index = 2;

  it('AP -1 Click on Provider Rates.', () => {
    cy.get('[data-testid="mainmenu-providers"]').click()
    cy.get('[data-testid="submenu-provider-rates"]').click()
    expect(true).to.equal(true)
});


  
  
  
  
  
  
      //////////////////////////////////////////////////////////////////////////////
  
  
      
      it('Check condition.', () => {        
      
          cy.get(`:nth-child(${index}) > :nth-child(8) > .text-capitalize`).then(($td) => {
                const value = $td.text().trim();
                if (value === 'approved') {
                  cy.wait(2000)
  
  
                  //                          Click for View()
                 
                  
      cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
  
      cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic`).click({force:true}).wait(2000)
  
      cy.contains('View').click({force: true}).wait(4000)
  
      cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)
  
      cy.scrollTo('top',{ duration: 4000 }).wait(2000)
  
      cy.get('.backarrow').click()   //=============> Click on back to listing button.
              
                } else {
                  cy.wait(3000)
        
                  //Provider Edit()
      cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
  
      cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic`).click({force:true}).wait(2000)
                  
      cy.contains('Edit').click({force: true}).wait(4000)
                  
          cy.get('[data-testid="guaranteedHours"]').clear().type("15").wait(400)
      
          cy.get('[data-testid="otAfterHoursDaily"]').clear().type("3").wait(400)
   
          cy.get('[data-testid="otAfterHoursWeekly"]').clear().type("10").wait(400)
    
      // =============================== Hourly =============================== \\
      
          cy.get('[data-testid="hourly.hourlyBillRate"]').clear().type("20").wait(400)
     
          cy.get('[data-testid="hourly.hourlyPayRate"]').clear().type('12').wait(400)
      
          cy.get('[data-testid="hourly.holidayHourlyBillRate"]').clear().type('130').wait(400)
    
          cy.get('[data-testid="hourly.holidayHourlyPayRate"]').clear().type('13').wait(400)
    
  
      // =============================== OT =============================== \\
  
  
          cy.get('[data-testid="ot.otBillRate"]').clear().type('130').wait(400)
     
          cy.get('[data-testid="ot.otPayRate"]').clear().type('14').wait(400)
     
          cy.get('[data-testid="ot.holidayOtBillRate"]').clear().type('130').wait(400)
  
          cy.get('[data-testid="ot.holidayOtPayRate"]').clear().type('12').wait(400)
  
  
      // =============================== Evening On Call Pager =============================== \\
  
  
  
          cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerBillRate"]').clear().type('130').wait(400)
    
          cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerPayRate"]').clear().type('14').wait(400)
   
          cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerBillRate"]').clear().type('130').wait(400)
      
          cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerPayRate"]') .clear().type('2').wait(400)
  
      // =============================== 24 HR Pager Call =============================== \\
  
  
          cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallBillRate"]').clear().type('130').wait(400)
     
          cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallPayRate"]').clear().type('102').wait(400)
     
          cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallBillRate"]').clear().type('130').wait(400)
   
          cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallPayRate"]').clear().type('12').wait(400)
  
  
      // =============================== In House Call =============================== \\
  
          cy.get('[data-testid="inHouseCall.inHouseCallBillRate"]').clear().type('130').wait(400)
  
          cy.get('[data-testid="inHouseCall.inHouseCallPayRate"]').clear().type('12').wait(400)
     
          cy.get('[data-testid="inHouseCall.holidayInHouseCallBillRate"]').clear().type('130')  .wait(400) 
  
          cy.get('[data-testid="inHouseCall.holidayInHouseCallPayRate"]') .clear().type('12').wait(400)
  
  
      // =============================== Service On Call =============================== \\
  
  
          cy.get('[data-testid="serviceOnCall.serviceOnCallBillRate"]').clear().type('130').wait(400)
    
          cy.get('[data-testid="serviceOnCall.serviceOnCallPayRate"]').clear().type('12').wait(400)
     
          cy.get('[data-testid="serviceOnCall.holidayServiceOnCallBillRate"]').clear().type('130').wait(400)
     
          cy.get('[data-testid="serviceOnCall.holidayServiceOnCallPayRate"]').clear().type('10').wait(2000)
 
          cy.get('[data-testid="savebtn"]').click()
  
  
  
  
      cy.wait(1000);
      cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Pay rate has been updated successfully')
  
  
                }
              });
          });
  
  
  
}
export default Edit_Pay_Rate;
