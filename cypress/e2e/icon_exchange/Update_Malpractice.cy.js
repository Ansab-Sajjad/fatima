function Update_Malpractice() {
  it(" Click on Malpractice.", () => {
    cy
      .get('[data-testid="mainmenu-providers"] > .float-end')
      .click({ force: true });
    cy
      .get('[data-testid="submenu-malpractice-rates"]')
      .click({ force: true })
      .wait(5000);
  });

  it("UM- Click on Malpractice Insurance Provider dropdown.", () => {
    cy
      .get("tbody > :nth-child(1) > :nth-child(1)")
      .click({ force: true })
      .wait(5000);
  });

  it("uM- Click on 3 dots.", () => {
    cy
      .get(
        ".modal-table-scroll > .mt-4 > tbody > :nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
      )
      .click({ force: true })
      .wait(2000);
  });

  it("Click on Edit button.", () => {
    cy
      .get(':nth-child(6) > .dropdown-menu > [data-testid="editbtn"]')
      .click({ force: true })
      .wait(5000);
  });

  it("UM- Update States.", () => {
    cy.get(".custom-select__single-value").click({ force: true }).wait(2000);
    cy.get(".custom-select__option:eq(9)").click({ force: true }).wait(2000);
  });

  it("UM- Update Hourly Rate.", () => {
    cy
      .get('.form-group > .mb-12 > .form-controls > [data-testid="hourlyRate"]').wait(1000)
      .clear()
      .type("40");
    cy.wait(2000);
  });

  it("UM- Update Effective Start Rate.", () => {
    cy
      .get(
        ".form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > #effectiveStartDate"
      ).wait(1000).clear().wait(1000)
      .type("07/19/2023")
      .wait("2000");
  });

  it("UM- Update Effective End Date.", () => {
    cy
      .get(
        ".form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > #effectiveEndDate"
      ).clear().wait(1000)
      .type("09/29/2023")
      .wait("2000");
  });

  it("UM- Click on Update button.", () => {
    cy
      .get('[data-testid="handleGlobalMalpracticeUpdate"]')
      .click({ force: true })
      .wait(4000);
  });

  it("UM- Click on cross button.", () => {
    cy.get(".icon-Cross").click({ force: true }).wait("3000");
  });

  it("UM-3 Scroll Listing to the Right Side. ", () => {
    cy.get(".tableresponsive").scrollTo("right", { duration: 2000 }, {ensureScrollable: false}).wait(2000);
  });

  it("UM-4 Click on 3 dots.", () => {
    cy
      .get(
        ":nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
      )
      .click({ force: true })
      .wait(2000);
  });

  it("UM-5 Click on Edit button.", () => {
    cy.get('[data-testid="editbtn"]').click({ force: true }).wait(5000);
  });

  it("UM-6 Update Malpractice Insurance Provider", () => {
    cy
      .get('[id="malpracticeInsuranceProvider"]')
      .click()
      .wait(2000);
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(1000);
  });

  it("UM-7 Update Areas of Expertise.", () => {
    cy.get('[id="areaOfExpertise"]').click().wait(2000);
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
  });

  // it('UM-8 Update Division.', () => {
  //     cy.get('[id="react-select-20-input"]').click({force: true}).wait(2000)
  //     cy.get('#react-select-20-option-1').click({force: true})/////===============Array Index 0
  // });

  // it('UM-9 Update Procedure Type.', () => {
  //     cy.get('[id="react-select-21-input"]').click({force: true}).wait(2000)
  //     cy.get('#react-select-21-option-1').click({force: true})/////===============Array Index 0
  // });

  it("UM-10 Click on Update button.", () => {
    cy
      .get('[data-testid="handleGlobalMalpracticeUpdate"]')
      .click({ force: true });
  });
}
export default Update_Malpractice;
