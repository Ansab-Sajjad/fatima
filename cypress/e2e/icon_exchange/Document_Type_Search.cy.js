export function Document_Type_Search() {
  it("Click on Document type.", () => {
    cy.get('[data-testid="mainmenu-settings"] > .float-end').click({
      force: true,
    });
    cy.wait(4000);
    cy.get('[data-testid="submenu-documet-settings"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  // Check document type lisitng column

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 6)
      .and("contain", "Category")
      .and("contain", "Sub Category")
      .and("contain", "Type")
      .and("contain", "Created By")
      .and("contain", "Created At")
      .and("contain", "Actions");
  });

  it("should list documents in tabular form", () => {
    // Assuming there are documents in the table, adjust as needed
    cy.get(".tableresponsive tbody tr").should("have.length.gt", 0);
  });

  it("should have Edit and Delete actions for each document", () => {
    // Assuming there are documents in the table, adjust as needed
    cy.get(
      ":nth-child(5) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    ).click();
    cy.contains("Edit").should("exist");
    //cy.wrap($row).find('.delete-action').should('exist');
  });

  // Check Search Filter Fucntioanlity

  it("Search by Category Name.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#category > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(3)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Sub Category.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#subCategory > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);
    cy.wait(5000);
  });

  it("Search by Type.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#type > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option")
      .contains("Basic (BLS)")
      .click({ force: true })
      .wait(3000);
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search by Area of Expertise.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);
    cy.wait(5000);
  });

  it("Search by Created by.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });
}
