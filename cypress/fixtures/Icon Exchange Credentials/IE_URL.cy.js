
function Icon_Exchange_URL() {
   // Test Case: Visit the Login Page URL
  it('Visit the Login Page URL.', () => {
     // Uncomment the appropriate line based on the environment you want to test.
  
     // Dev Server
     // cy.visit("https://admin-dev-iconxchng.troonlab.io/login", {failOnStatusCode: false});
    
     // Staging Server
     // cy.visit("https://admin-stage-iconxchng.troonlab.io/login", {failOnStatusCode: false});
  
     // QA Server
     cy.visit("https://admin-qa-iconxchng.troonlab.io/login", {failOnStatusCode: false});
  
     // Live Server
     // cy.visit("https://iconxchange.com/login", {failOnStatusCode: false});
  });
  
        
      }
      
      export default Icon_Exchange_URL;