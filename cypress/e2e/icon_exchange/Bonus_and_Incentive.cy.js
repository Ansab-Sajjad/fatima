
//================================================ Hours Completion Bonus ================================================//

function Hours_Completion_Bonus(){

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
    cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;

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

function Performance_Bonus(){

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
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
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

function Refferal_Bonus(){
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
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
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

function Incentive(){

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
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
    
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

function Others_Bonus(){

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


export default {Hours_Completion_Bonus, Performance_Bonus, Refferal_Bonus, Incentive, Others_Bonus};