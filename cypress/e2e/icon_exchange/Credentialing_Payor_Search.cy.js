export function Credenitialing_Payor_Search() {
  it("Click on Credentialing & Payor Menu.", () => {
    cy.get('[data-testid="submenu-credentialing-pe"]').click({ force: true });
    cy.wait(4000);
    expect(true).to.equal(true);
  });

  // Check Credenitialing & Payor lisitng column

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 12)
      .and("contain", "Provider Name")
      .and("contain", "Area of Expertise")
      .and("contain", "Facility Name")
      .and("contain", "Credentialing Type")
      .and("contain", "Credentialing Year")
      .and("contain", "Credentialing Coordinator")
      .and("contain", "Target Start Date")
      .and("contain", "Paperwork Submitted to Facility On")
      .and("contain", "Facility’s Approval")
      .and("contain", "Created At")
      .and("contain", "Created By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

  it("should list documents in tabular form", () => {
    // Assuming there are records in the table, adjust as needed
    cy.get(".tableresponsive tbody tr").should("have.length.gt", 0);
  });

  it("should have Edit and Archived actions for each Record", () => {
    cy.get(
      ":nth-child(5) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    )
      .click({ force: true })
      .wait(2000);
    cy.contains("Edit").should("exist");
    cy.contains("Archive").should("exist");
  });

  // Check Search Filter Fucntioanlity

  it("Search by Provider Name.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
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

  it("Search by Area of Expertise.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(3)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.wait(5000);
  });

  it("Search by Facility Name.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
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

  it("Search by Credentialing Type.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#credentialingType > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.wait(5000);
  });

  it("Search by Credentialing Year.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it("Search Credentialing Coordinator.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#credentialingCoordinator > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(3)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Search oK To Schedule.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(
      "#okToSchedule > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
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
}
