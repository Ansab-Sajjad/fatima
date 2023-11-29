function Edit_Pay_Rate(){

    
  //===================> which list do you want to test.?
  const index = 1;

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
                  
      cy.get('[data-testid="guaranteedHoursDaily"]').clear()
      cy.get('[data-testid="guaranteedHoursWeekly"]').clear()
      cy.get('[data-testid="otAfterHoursDaily"]').clear()
      cy.get('[data-testid="otAfterHoursWeekly"]').clear()

      cy.get('[data-testid="guaranteedHoursDaily"]').clear().type("25").wait(2000)
 
      cy.get('[data-testid="otAfterHoursDaily"]').clear().type("3").wait(2000)

      ///////////////////////////////    Guaranteed Hours weekly = OT After Hours weekly       ///////////////////////////////
      
          cy.get('[data-testid="guaranteedHoursDaily"]').clear()
          cy.get('[data-testid="guaranteedHoursWeekly"]').clear()
          cy.get('[data-testid="otAfterHoursDaily"]').clear()
          cy.get('[data-testid="otAfterHoursWeekly"]').clear()
     
          cy.get('[data-testid="guaranteedHoursWeekly"]').clear().type("15").wait(2000)

          cy.get('[data-testid="otAfterHoursWeekly"]').clear().type("10").wait(2000)


      ///////////////////////////////     Guaranteed Hours Daily = OT After Hours weekly      ///////////////////////////////
      
          cy.get('[data-testid="guaranteedHoursDaily"]').clear()
          cy.get('[data-testid="guaranteedHoursWeekly"]').clear()
          cy.get('[data-testid="otAfterHoursDaily"]').clear()
          cy.get('[data-testid="otAfterHoursWeekly"]').clear()
   
          cy.get('[data-testid="guaranteedHoursDaily"]').clear().type("25").wait(2000)
     
          cy.get('[data-testid="otAfterHoursWeekly"]').clear().type("10").wait(2000)


      ///////////////////////////////     Guaranteed Hours Daily  = OT After Hours Daily = OT After Hours weekly      ///////////////////////////////
     
          cy.get('[data-testid="guaranteedHoursDaily"]').clear()
          cy.get('[data-testid="guaranteedHoursWeekly"]').clear()
          cy.get('[data-testid="otAfterHoursDaily"]').clear()
          cy.get('[data-testid="otAfterHoursWeekly"]').clear()
      
          cy.get('[data-testid="guaranteedHoursDaily"]').clear().type("251").wait(2000)

          cy.get('[data-testid="otAfterHoursDaily"]').clear().type("30").wait(2000)

          cy.get('[data-testid="otAfterHoursWeekly"]').clear().type("100").wait(2000)

            
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
    



  // =============================== Hourly =============================== \\
  
      cy.get('[data-testid="hourly.hourlyBillRate"]').type("200").wait(400)

      cy.get('[data-testid="hourly.hourlyPayRate"]').clear().type('102').wait(400)

      cy.get('[data-testid="hourly.holidayHourlyBillRate"]').clear().type('1500').wait(400)

      cy.get('[data-testid="hourly.holidayHourlyPayRate"]').clear().type('103').wait(400)


  // =============================== OT =============================== \\


      cy.get('[data-testid="ot.otBillRate"]').clear().type('1050').wait(400)
 
      cy.get('[data-testid="ot.otPayRate"]').clear().type('104').wait(400)
 
      cy.get('[data-testid="ot.holidayOtBillRate"]').clear().type('0150').wait(400)
 
      cy.get('[data-testid="ot.holidayOtPayRate"]').clear().type('120').wait(400)


  // =============================== Evening On Call Pager =============================== \\



      cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerBillRate"]').clear().type('150').wait(400)
 
      cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerPayRate"]').clear().type('140').wait(400)
  
      cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerBillRate"]').clear().type('150').wait(400)
 
      cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerPayRate"]') .clear().type('20').wait(400)

  // =============================== 24 HR Pager Call =============================== \\

      cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallBillRate"]').clear().type('1500').wait(400)

      cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallPayRate"]').clear().type('1020').wait(400)

      cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallBillRate"]').clear().type('150').wait(400)
  
      cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallPayRate"]').clear().type('102').wait(400)

  // =============================== In House Call =============================== \\

      cy.get('[data-testid="inHouseCall.inHouseCallBillRate"]').clear().type('1500').wait(400)

      cy.get('[data-testid="inHouseCall.inHouseCallPayRate"]').clear().type('102').wait(400)

      cy.get('[data-testid="inHouseCall.holidayInHouseCallBillRate"]').clear().type('1050')  .wait(400) 

      cy.get('[data-testid="inHouseCall.holidayInHouseCallPayRate"]') .clear().type('120').wait(400)

  // =============================== Service On Call =============================== \\


      cy.get('[data-testid="serviceOnCall.serviceOnCallBillRate"]').clear().type('150').wait(400)

      cy.get('[data-testid="serviceOnCall.serviceOnCallPayRate"]').clear().type('102').wait(400)

      cy.get('[data-testid="serviceOnCall.holidayServiceOnCallBillRate"]').clear().type('150').wait(400)

      cy.get('[data-testid="serviceOnCall.holidayServiceOnCallPayRate"]').clear().type('100').wait(400)
      
      cy.get('[data-testid="savebtn"]').click({force:true})
  
      cy.wait(1000);
      cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Pay rate has been updated successfully')
  
  
                }
              });
          });
  
  
  
}
export default Edit_Pay_Rate;
