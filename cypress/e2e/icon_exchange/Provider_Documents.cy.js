export function Provider_Document_Folder_Search(){

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .ml-4')
          .click()
          .wait(3000);
        expect(true).to.equal(true);
      });

      it("Search By Folder Name.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="Folder Name"]').type("ANSAB").wait(1000);
        cy.get('[data-testid="search"]').click({ force: true });
    
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });

      it("Search By Created By.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get(
          "#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
        ).click();
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0
        cy.get('[data-testid="search"]').click({ force: true });
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });
    

}


// ======================================== Provider Sub Folder Search ============================================

export function Provider_Document_Sub_Folder_Search(){

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .ml-4')
          .click()
          .wait(3000);
          cy.get('tbody > :nth-child(2) > :nth-child(2)').click()
          .wait(3000);
        expect(true).to.equal(true);
      });

      it("Search By Folder Name.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="Folder Name"]').type("ANSAB").wait(1000);
        cy.get('[data-testid="search"]').click({ force: true });
    
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });
      it("Search By Credentialling Type.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('#credentialingType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000);
        cy.get(".custom-select__option").first().click().wait(1000);
        cy.get('[data-testid="search"]').click({ force: true });
    
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });

      it("Search By Credentialing Year.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('#credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000);
        cy.get(".custom-select__option").first().click().wait(1000);
        cy.get('[data-testid="search"]').click({ force: true });
    
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });


      it("Search By Created By.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get(
          "#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
        ).click();
        cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0
        cy.get('[data-testid="search"]').click({ force: true });
        cy.wait(5000);
      });
    
      it(" Clear Search By filter.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="clear"]').click();
        cy.wait(2000);
      });
    

}
