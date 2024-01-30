export function Malpractice_Expire() {
  it("Click on Malpractice Expire Reports.", () => {
    cy.get('[data-testid="mainmenu-reports"] > .float-end').click({ force: true });
    cy.wait(4000);
    cy.get('[data-testid="submenu-expired-malpractice"] > :nth-child(2)').click().wait(3000) 
    expect(true).to.equal(true);
  });

  // Check Credenitialing & Payor lisitng column

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 9)
      .and("contain", "Provider Name")
      .and("contain", "Areas of Expertise")
      .and("contain", "Facility")
      .and("contain", "Malpractice Insurance")
      .and("contain", "Effective Start Date")
      .and("contain", "Effective End Date")
      .and("contain", "Notes")
      .and("contain", "Notes Added By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

  it("should list documents in tabular form", () => {
    // Assuming there are records in the table, adjust as needed
    cy.get(".tableresponsive tbody tr").should("have.length.gt", 0);
  });

  it("should have Note and View Details for each Record", () => {
    cy.get(
      ":nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    )
      .click({ force: true })
      .wait(2000);
    cy.contains("Update Note").should("exist");
    cy.contains("View Details").should("exist");
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
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
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
    cy.get(".custom-select__option:eq(2)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Note Added By.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get('#expiredMalpracticeNotesAddedBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
      .click({ force: true })
      .wait(2000);
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0;   /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search filter.", () => {
    cy.get(".left-icon").click({ force: true });
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click({ force: true });
    cy.wait(2000);
  });

  it("Effective Start Date Search.", () => {
    cy.wait(2000);
    cy.get(".left-icon").click({ force: true });
    cy.get(':nth-child(5) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("01/01/2024 - 10/01/2024").wait(1000)
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });
}


//================================================ View Malpractice Expiry Report ================================================//

export function View_malpractice_Expire() {
  it("Click on Malpractice Expire Reports.", () => {
    cy.get('[data-testid="mainmenu-reports"] > .float-end').click({ force: true });
    cy.wait(4000);
    cy.get('[data-testid="submenu-expired-malpractice"] > :nth-child(2)').click().wait(3000) 
    expect(true).to.equal(true);
  });

  it("Click on 3 dots.", () => {
    cy.get(
      ":nth-child(5) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    )
      .click({ force: true })
      .wait(2000);
  });

  it("Click on View link", () => {
    cy.get("#portal .table-dropdown .dropdown-item")
      .contains("View")
      .click({ force: true });
  });

  it("Provider Name", () => {
    cy.get('.mb-sm-2 > p').should("be.visible");
  });

  it("Facility Name", () => {
    cy.get(':nth-child(3) > p').should("be.visible");
  });
  

  it("Area of Expertise", () => {
    cy.get(':nth-child(2) > p').should("be.visible");
  });

  it("Malpractice Insurance", () => {
    cy.get(':nth-child(4) > p').should("be.visible");
  });

  it("Effective Start Date", () => {
    cy.get(':nth-child(5) > p').should("be.visible");
  });

  it("Effective End Date", () => {
    cy.get(':nth-child(6) > p').should("be.visible");
  });

  it("Notes", () => {
    cy.get(':nth-child(7) > p').should("be.visible");
  });

  it("Notes Added By", () => {
    cy.get(':nth-child(8) > p').should("be.visible");
  })
}
