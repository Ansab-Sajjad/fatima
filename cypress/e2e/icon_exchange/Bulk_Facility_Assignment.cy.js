
function Bulk_Facility_Assignment() {

    // // Array of indices to loop through (1 to 25
    // const index = 1; 

    // const indices = Array.from({ length: 100 }, (_, index) => index + 1);
          
    // indices.forEach((index) => {
    


// Array of indices to loop through
const startIndex = 39;
const endIndex = 100;
const emailPattern = 'ansab+BP';
const emailDomain = '@troontechnologies.com';

for (let index = startIndex; index <= endIndex; index++) {
//   const emailAddress = `${emailPattern}${index}${emailDomain}`;

    



    it('Cycle ' + (index) + ' Click on 3 dot button.', () => {
       
        cy.get('[data-testid="submenu-providers-listing"]').click({force:true}).wait(5000)
  
            
        cy.wait(2000);
        cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`)
          .click({ force: true })

       
          
             cy.get('[data-testid="view-assigned-facilities"]').wait(1000).click();
            cy.wait(4000)
            cy.get('[data-testid="assign-facility-btn"]').click()
            cy.wait(4000)



       // ====> Facility Name
    cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(100)
          
       // ====> facility contracted by
    cy.get('#contractedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
    cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
    
       
         
        // ====> provider working for
        cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
       
         
        // ====> Area of expertise
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
       
          
        // ====> paper work submitted to
        cy.get('#paperWorkSubmittedToFacility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)

          
        // ====> faicility approval
        cy.get('#facilityApproval > .custom-select__control > .custom-select__value-container').click({force:true}).wait(1000)
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)

          
        // ====> enrollment status
        cy.get('#payorEnrollmentStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
       
          
        // ====> currently active
        cy.get('#currentlyActive > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
        cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
       
        //======> Effective Start & End date
        cy.get('[id="effectiveStartDate"]').type("08/22/2023").type('{enter}').wait(100)
        cy.get('[id="effectiveEndDate"]').type("08/30/2023").type('{enter}').wait(100)


         // ====> Malpractice insurance
         cy.get('#malpracticeInsurance > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        

         // ====> Recuriter
         cy.get('#recruiter > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        


         // ====> Account manager
         cy.get('#accountManager > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        
         
         // ====> Credentialling coordinator
         cy.get('#credentialingCoordinator > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        




         // ====> Client
         cy.get('#client > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        


         
         // ====> job type
         cy.get('#jobType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
         cy.get('.custom-select__option[tabindex="-1"]:first').click().wait(1000)
        



         cy.get('[data-testid="createbtn"]').click({force:true}).wait(5000)





        });


        }

    






}
export default Bulk_Facility_Assignment;

