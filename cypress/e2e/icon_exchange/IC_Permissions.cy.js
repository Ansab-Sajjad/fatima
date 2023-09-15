
function IC_Notification(){

    it('Click on Notification Button.', () => {
        cy.get('[data-testid="mainmenu-notifications"]').click()
    });


    it('Click on Send Notification Button.', () => {
        cy.get('[data-testid="send-notifications-modal-btn"]').click()
    });



    it('Select Bi-Weekly Notification Type.', () => {
        cy.get('.form-controls > #notificationType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    });



    it('Select Pay Period.', () => {
        cy.get('#payPeriodId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;        
    });



    it('Select Providers', () => {
        cy.get('#providers > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
 
    });



    it('Click on the Send Button.', () => {
        cy.get('.clr-bluezodiac').click()
        cy.get('[data-testid="send-notifications-submit-btn"]').click()
    });

    it('Verifying the Toast message', () => {
            cy.wait(1000);
            cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Reminder has been sent successfully')
        });

    it('', () => {
        cy.wait(20000)
    });


    it('Click on Send Notification Button.', () => {
        cy.get('[data-testid="send-notifications-modal-btn"]').click()
    });



    it('Select Daily Notification Type.', () => {
        cy.get('.form-controls > #notificationType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(3000);
    });



    it('Select Pay Period.', () => {
        cy.get('#payPeriodId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(2000);   /////===============Array Index 0;        
    });



    it('Select Providers', () => {
        cy.get('#providers > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);
 
    });



    it('Click on the Send Button.', () => {
        cy.get('.clr-bluezodiac').click()
        cy.get('[data-testid="send-notifications-submit-btn"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Reminder has been sent successfully')
    });

}



//================================================ Bonus & Incentive ================================================//
//================================================ Hours Completion Bonus ================================================//



function IC_Hours_Completion_Bonus() {

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-bonuses"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('[data-testid="add-bonus"]').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('#bonusType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
         
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
           
    });
    
    
    
    it('B- Enter Target Hours Completed At date.', () => {
        cy.get('#targetHoursCompletedAt').type("09/14/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("09/28/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus has been added successfully')
     });


}


//================================================ Performance Bonus ================================================//

function IC_Performance_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-bonuses"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('[data-testid="add-bonus"]').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('#bonusType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);
         
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
           
    });
    
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("09/28/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus has been added successfully')
     });
    
    }



    
//================================================ Refferal Bonus ================================================//

function IC_Refferal_Bonus(){
    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-bonuses"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('[data-testid="add-bonus"]').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('#bonusType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(2)').click({force: true}).wait(1000);
         
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
    });
    
    it('B- 3 Select Reffered provider.', () => {
        cy.get('#referredProvider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);
           
    });
    
    
    
    it('B- Enter 10 Days Worked Date.', () => {
        cy.get('#tenHoursWorkedOnDate').type("09/14/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("09/28/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus has been added successfully')
     });
    

}



 
//================================================ Incentive ================================================//

function IC_Incentive(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-bonuses"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('[data-testid="add-bonus"]').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('#bonusType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(3)').click({force: true}).wait(1000);
         
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
           
    });
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("09/28/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus has been added successfully')
     });

    
}


//================================================ Others_Bonus ================================================//

function IC_Others_Bonus(){
    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-bonuses"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('[data-testid="add-bonus"]').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('#bonusType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(4)').click({force: true}).wait(1000);
         
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
    });
        
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("09/28/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
    
    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus has been added successfully')
     });



}
  


function IC_Bonus_Condition(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    


    it('Check condition.', () => {
    cy.get('.tableresponsive').scrollTo("right")
    
    cy.get(':nth-child(1) > :nth-child(6) > .text-capitalize').then(($td) => {
              const value = $td.text().trim();
              if (value === 'approved') {
                cy.wait(2000)
                //                          Click for View.()
               
               

                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
    
    cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)

    cy.contains('View').click({force: true}).wait(4000)

    cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)

    cy.scrollTo('top',{ duration: 4000 }).wait(2000)


            
              } else {
                cy.wait(3000)
      
                //Click to Edit()
                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)

    cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)

    cy.contains('Edit').click({force: true}).wait(5000)

    cy.get('#bonusDate').clear().type("08/04/2023").wait(2000)
   
    cy.get('[data-testid="bonusAmount"]').clear().type("30")
   
    cy.get('[data-testid="saverecord"]').click()



    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Updated Successfully')


              }
            });
        });

    }












export {IC_Notification, IC_Hours_Completion_Bonus, IC_Performance_Bonus, IC_Refferal_Bonus, IC_Incentive, IC_Others_Bonus, IC_Bonus_Condition}