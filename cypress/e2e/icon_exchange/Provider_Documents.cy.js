
export function Provider_Document_Search() {
  it("Click on Document Menu", () => {
    cy.get('[data-testid="mainmenu-documents"] > .ml-4').click({ force: true });
    cy.wait(5000);
  });

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 4)
      .and("contain", "Provider Name")
      .and("contain", "Created At")
      .and("contain", "Created By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

  // Check Search Filter Fucntioanlity

  it("Search by Document Name.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.get('[data-testid="Provider Name"]').type("Shane")
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Created At.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#createdAt').type("03-04-2024")
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });
  
}

// Facility Folder For Provider

export function Provider_Document_Folder_Search() {
  it("Click on Document Menu", () => {
    cy.get('[data-testid="mainmenu-documents"] > .ml-4').click({ force: true });
    cy.wait(5000);
  });

  it("Click on Provider Name", () => {
    cy.get('tbody > :nth-child(3) > :nth-child(1)').click({ force: true });
    cy.wait(5000);
  });

  it("Click on Facility Folder", () => {
    cy.get('tbody > :nth-child(2) > :nth-child(2)').click({ force: true });
    cy.wait(5000);
  });

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 7)
      .and("contain", "Name")
      .and("contain", "Credentialing Type")
      .and("contain", "Credentialing Year")
      .and("contain", "Created At")
      .and("contain", "Created By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

  // Check Search Filter Fucntioanlity

  it("Search by Folder Name.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.get('[data-testid="Folder Name"]').type("Child folder")
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search By Credentialing Type.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('#credentialingType > .custom-select__control > .custom-select__value-container').click().wait(1000);
    cy.get(".custom-select__option:eq(0)").click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it("Search By Credentialing Year.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('#credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().wait(1000);
    cy.get(".custom-select__option:eq(1)").click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });
  
  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Created At.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#createdAt').type("03-04-2024")
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });
  
}
