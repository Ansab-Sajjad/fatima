function Bulk_Area_of_expertise(){


    // Array of indices to loop through (1 to 100)
// const index = 30; 
//     const indices = Array.from({ length: 100 }, (_, index) => index + 1);
          
//     indices.forEach((index) => {
    

const startIndex = 1;
const endIndex = 48;
const emailPattern = 'ansab+BP';
const emailDomain = '@troontechnologies.com';

for (let index = startIndex; index <= endIndex; index++) {
  //const emailAddress = `${emailPattern}${index}${emailDomain}`;




    it('TC ' + (index) + ' Add Area of Experty.', () => {
       
  
            
              cy.wait(2000);
              cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`)
                .click({ force: true })
                .wait(2000);
          

        // cy.get('[data-testid="edit-info"]').wait(1000).click({force:true}).wait(3000)
        cy.get('[data-testid="edit-info"]').click({force:true}).wait(2000)
        
        cy.get('#left-tabs-example-tab-4 > .d-flex > .tabname').click().wait(4000)
        

        cy.get(':nth-child(4) > .form-checkbox > .form-check-label').click({force:true}).wait(2000)
        // cy.get(':nth-child(9) > .form-checkbox > .form-check-label').click({force:true}).wait(2000)
        cy.get('.formstyle > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true}).wait(2000)
        cy.get('#left-tabs-example-tabpane-1 > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true}).wait(2000)













    });


}












}

export default Bulk_Area_of_expertise;