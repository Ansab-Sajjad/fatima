
function Add_Pay_Rates(){

    it('AP -1 Click on Provider Rates.', () => {
        cy.get('[data-testid="submenu-provider-rates"]').click()
    expect(true).to.equal(true)
    });

    it('AP -2 Click on Add Pay Rates button.', () => {
        cy.get('[data-testid="addpayratebtn"]').click().wait(2000)
    expect(true).to.equal(true)
    });

    it('AP -3 Select By Manual Option.', () => {
        cy.get('[data-testid="manualimport"]').click()
        cy.wait(3000)
        expect(true).to.equal(true)
    });


//////////////////////////////////////////////////////////////////////////

it('Add provider name and select assigned facility.', () => {
   // Define a function to check the modal body text and click accordingly
function checkModalTextAndClick(index) {
    // Click on the custom-select__option with the current index
    cy.get('.custom-select__input-container').click(2000);
    cy.get(`.custom-select__option:eq(${index})`).click().wait(1000);
  
    // Check if .modal-body contains the text "No result found"
    cy.get('.modal-body').then(($modalBody) => {
      if ($modalBody.text().includes('No result found')) {
        // If "No result found" is found, click on .icon-cross
        cy.wait(2000);
        cy.get('.icon-Cross').click();
        checkModalTextAndClick(index + 1);
      } else {
    
        cy.get('tbody > tr > :nth-child(1)').click(); // Example: Click on .modal-list-assignments
        cy.wait(1000);
        return;
        // Continue checking with the next index (recursive call)
      }
    });
  }
  
  // Start checking the modal text with index 0
  checkModalTextAndClick(0);
  
    
});





    //////////////////////////////////////////////////////////////////////////////

   
    it('AP -6 Enter Rate Start Date.', () => {
        cy.get('#rateStartDate').click().type("09/11/2023").type('{enter}').wait(400)
    });

    it('AP -7 Enter Rate End Date.', () => {
        cy.get('#rateEndDate').click().type("10/10/2023").type('{enter}').wait(400)
    });

    it('AP -8 Enter Guaranteed Hours.', () => {
        cy.get('[data-testid="guaranteedHours"]').type("15").wait(400)
    });

 
    it('AP -10 Enter OT after hours Daily.', () => {
        cy.get('[data-testid="otAfterHoursDaily"]').type("3").wait(400)
    });

    it('AP -11 Enter OT After hours Weekly.', () => {
        cy.get('[data-testid="otAfterHoursWeekly"]').type("10").wait(400)
    });

    // =============================== Hourly =============================== \\
    
    it('AP - 12 Regular Bill Rate.', () => {
        cy.get('[data-testid="hourly.hourlyBillRate"]').type("20").wait(400)
    });

    it('AP - Pay Rate', () => {
        cy.get('[data-testid="hourly.hourlyPayRate"]').clear().type('12').wait(400)
    });


    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="hourly.holidayHourlyBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="hourly.holidayHourlyPayRate"]').clear().type('13').wait(400)
    });

    // =============================== OT =============================== \\


    it('AP - Regular Bill Rate', () => {
        cy.get('[data-testid="ot.otBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="ot.otPayRate"]').clear().type('14').wait(400)
    });



    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="ot.holidayOtBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="ot.holidayOtPayRate"]').clear().type('12').wait(400)
    });

    // =============================== Evening On Call Pager =============================== \\



    it('AP - Regular Bill Rate', () => {
        cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="eveningOnCallPager.eveningOnCallPagerPayRate"]').clear().type('14').wait(400)
    });



    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="eveningOnCallPager.holidayEveningOnCallPagerPayRate"]') .clear().type('2').wait(400)
    });

    // =============================== 24 HR Pager Call =============================== \\


    it('AP - Regular Bill Rate', () => {
        cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="twentyFourHourPagerCall.twentyFourHourPagerCallPayRate"]').clear().type('102').wait(400)
    });



    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="twentyFourHourPagerCall.holidayTwentyFourHourPagerCallPayRate"]').clear().type('12').wait(400)
    });

    // =============================== In House Call =============================== \\


    it('AP - Regular Bill Rate', () => {
        cy.get('[data-testid="inHouseCall.inHouseCallBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="inHouseCall.inHouseCallPayRate"]').clear().type('12').wait(400)
    });



    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="inHouseCall.holidayInHouseCallBillRate"]').clear().type('150')  .wait(400) 
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="inHouseCall.holidayInHouseCallPayRate"]') .clear().type('12').wait(400)
    });

    // =============================== Service On Call =============================== \\



    it('AP - Regular Bill Rate', () => {
        cy.get('[data-testid="serviceOnCall.serviceOnCallBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="serviceOnCall.serviceOnCallPayRate"]').clear().type('12').wait(400)
    });



    it('AP - Holiday Bill Rate', () => {
        cy.get('[data-testid="serviceOnCall.holidayServiceOnCallBillRate"]').clear().type('150').wait(400)
    });


    it('AP - Pay Rate', () => {
        cy.get('[data-testid="serviceOnCall.holidayServiceOnCallPayRate"]').clear().type('10').wait(400)
    });



    it('AP - Click on Save button.', () => {
        cy.get('[data-testid="savebtn"]').click()
    });



    // it('AP -13 Enter OT/Premium.', () => {
    //     cy.get('[data-testid="ot_premium"]').type("40").wait(2000)
    // });

    // it('AP -14 Enter Evening On-Call Pager.', () => {
    //     cy.get('[data-testid="eve_oncall_pager"]').type("25").wait(2000)
    // });

    // it('AP -15 Enter 24 HR Page Call.', () => {
    //     cy.get('[data-testid="hr_pager_call"]').type("30").wait(2000)
    // });
                                                            

    // it('AP -16 Enter In House Call.', () => {
    //     cy.get('[data-testid="in_housecall"]').type("10").wait(2000)
    // });
                                                            

    // it('AP -17 Enter Service On Call.', () => {
    //     cy.get('[data-testid="service_oncall"]').type("3").wait(2000)
    // });
                                                            

    // it('AP -18 Enter Evening Pager Call.', () => {
    //     cy.get('[data-testid="eve_pager_call"]').type("12").wait(2000)
    // });
                                                            
    // // =============================== Holidays Rate =============================== \\

    // it('AP -19 Enter Hourly Rate.', () => {
    //     cy.get('[data-testid="h_hourly"]').type("10").wait(2000)
    // });
                                                            

    // it('AP -20 Enter OT/Premium.', () => {
    //     cy.get('[data-testid="h_ot_premium"]').type("20").wait(2000)
    // });
                                                            

    // it('AP -21 Enter Evening On Call Pager rate.', () => {
    //     cy.get('[data-testid="h_eve_oncall_pager"]').type("13").wait(2000)
    // });
                                                            

    // it('AP -22 Enter 24 HR Pager Call.', () => {
    //     cy.get('[data-testid="h_hr_pager_call"]').type("31").wait(2000)
    // });
                                                            

    // it('AP -23 Enter In House Call.', () => {
    //     cy.get('[data-testid="h_in_housecall"]').type("13").wait(2000)
    // });
                                                            

    // it('AP -24 Enter Service on Call.', () => {
    //     cy.get('[data-testid="h_service_oncall"]').type("23").wait(2000)
    // });
                                                            

    // it('AP -25 Enter Evening Pager Call.', () => {
    //     cy.get('[data-testid="h_eve_pager_call"]').type("20").wait(2000)
    // });
                                                            
                                                      

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });
                                                            

    it('AP -', () => {
        
    });



}

export default Add_Pay_Rates;
