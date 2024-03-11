export function Provider_Genral_Docuemnt_Search() {
  it("Click on Provider General Document Menu.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .ml-4').click({ force: true });
    cy.wait(4000);
    expect(true).to.equal(true);
  });

  it("Click on General Document List Data.", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').click({ force: true });
    cy.wait(4000);
    expect(true).to.equal(true);
  });

  // Check General Document lisitng column

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 9)
      .and("contain", "Name")
      .and("contain", "Category")
      .and("contain", "Sub Category")
      .and("contain", "Type")
      .and("contain", "Expertise")
      .and("contain", "Created At")
      .and("contain", "Created By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

  it("Click on document Name Data", () => {
    // Assuming there are records in the table, adjust as needed
    cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
  });

  it("Click on cross icon.", () => {
    cy.get('.icon-Cross').click({ force: true });
    cy.wait(4000);
    expect(true).to.equal(true);
  });

  // Check Search Filter Fucntioanlity

  it("Search by File Name.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('[data-testid="File Name"]').type("FE and QA User stories")
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Category.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#category > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.wait(5000);
  });

  it("Search by Sub Category.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#subCategory > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Type.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#type > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.wait(5000);
  });

  it("Search by Area of Expertise.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(5)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
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
