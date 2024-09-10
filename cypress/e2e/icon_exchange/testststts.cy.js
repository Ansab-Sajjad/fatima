describe('Login without email and password', () => {
    it('logs in by setting the isLoggedIn state to true', () => {
      // Clear local storage before the test to ensure a clean state
      cy.clearLocalStorage();
  
      // Visit the login page
      cy.visit('https://admin-qa.iconxchange.com/login');
  
      // Set isLoggedIn state to true in local storage
      cy.window().then((win) => {
        win.localStorage.setItem('isLoggedIn', 'true'); // Simulate user being logged in
      });
  
      // Reload the page or navigate to a protected page
      cy.visit('https://admin-qa.iconxchange.com/providers-listing');
  
      // Assert that the URL is correct after navigation
      cy.location('pathname').should('eq', '/providers-listing');
  
      // Assert that a specific element on the protected page is visible
    //   cy.contains('Provider List').should('be.visible'); // Replace 'Provider List' with an element unique to the protected page
    });
  });
  