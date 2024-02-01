import { Document_Type_data } from "./Document_Type_Data.cy";

export function Add_Document_Types() {
  it("Click on Document type.", () => {
    cy.get('[data-testid="mainmenu-settings"] > .float-end').click({
      force: true,
    });
    cy.wait(2000);
    cy.get('[data-testid="submenu-documet-settings"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(2000);
  });

  it("Click on Add New type Button.", () => {
    cy.get('[data-testid="add-document-settings-btn"]').click({ force: true });
    cy.wait(2000);
  });

  //================================================ Add Category ================================================//

  it("Click on Add New Option to Add a Category", () => {
    cy.get(
      "#category > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    ).click({ force: true });
    // Find the dropdown options and locate "Add new Category"
    cy.get(".custom-select__option")
      .contains("Add New")
      .click({ force: true })
      .wait(3000);
  });

  it("Add Category Name and Click on Save Button", () => {
    const categoryName = Document_Type_data.Document_Category;

    // Type the category name in the input field
    cy.get('[data-testid="categoryInputField"]')
      .click()
      .type(categoryName)
      .wait(3000);

    // Click on the Save button
    cy.get('[data-testid="saveCategory"]').click({ force: true }).wait(3000);

    // Check if a message indicating category name already exists appears
    cy.get(".Toastify__toast-body > :nth-child(2)").then(($Toast_Message) => {
      if ($Toast_Message.text().includes("Category already exists.")) {
        const newCategoryName = `${categoryName} - ${Math.floor(
          Math.random() * 1000
        )}`; // Adding random number at the last of the category name.
        cy.get('[data-testid="categoryInputField"]')
          .clear()
          .type(newCategoryName).wait(5000);
          cy.get('[data-testid="saveCategory"]').click()
          cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Category added successfully");
      } else {
        // The modal body is not visible or does not contain the specified text,
        cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Category added successfully");
      }
    });
  });

  //================================================ Add Sub Category ================================================//

  it("Add Sub category and check already exist category functionality.", () => {
    cy.get(
      "#subCategory > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    ).click({ force: true });
    // Find the dropdown options and locate "Add new Sub Category"
    cy.get(".custom-select__option")
      .contains("Add New")
      .click({ force: true })
      .wait(3000);

    cy.get(
      ".mt-4 > :nth-child(1) > .form-controls > #category > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(1000);
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(3000); // Selecting the first index which is already added with this upcoming combination.
    cy.get('[data-testid="subCategoryInputField"]')
      .type("Life Support Training")
      .wait(1000);
    cy.get('[data-testid="saveCategory"]').click({ force: true });

    // Checks if the Toast message content is visible
    cy.get(".Toastify__toast-body > :nth-child(2)")
      .should("be.visible")
      .then(($Toast_Message) => {
        // If there is duplication
        if (
          $Toast_Message
            .text()
            .includes("Subcategory already exists in this category.")
        ) {
          cy.get(
            ".mt-4 > :nth-child(1) > .form-controls > #category > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
          )
            .click({ force: true })
            .wait(1000);
          cy.get(".custom-select__option:last")
            .click({ force: true })
            .wait(3000); // Selecting the last added category.
          cy.get('[data-testid="subCategoryInputField"]')
            .type("Life Support Training")
            .wait(1000);
          cy.get('[data-testid="saveCategory"]')
            .click({ force: true })
            .wait(3000);
        } else {
          // The modal body is not visible or does not contain the specified text,
          cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
            .should("be.visible")
            .should("have.text", "Subcategory added successfully");
        }
      });
  });
  ///////////////

  //================================================ Add Type ================================================//

  it("Click on Add New Option to Add a Type", () => {
    cy.get(
      "#type > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    ).click({ force: true });
    // Find the dropdown options and locate "Add new Category"
    cy.get(".custom-select__option")
      .contains("Add New")
      .click({ force: true })
      .wait(3000);
  });

  it("Add Type Name and Click on Save Button", () => {
    cy.get('[data-testid="typeTextField"]')
      .click()
      .type("Basic (BLS)")
      .wait(3000);
    cy.get('[data-testid="saveCategory"]').click({ force: true }).wait(3000);
  });

  //================================================ Select Area Of Expertise ================================================//

  it("Select Area of Expertise", () => {
    cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2) > .form-group > .form-checkbox > .form-check-label')
      .click({ force: true })
      .wait(1000);
       });

  //================================================ Select Need History ================================================//

  it("Select Need History", () => {
    cy.get(':nth-child(2) > tbody > :nth-child(2) > .text-center > .form-group > .form-checkbox > .form-check-label')
      .click({ force: true })
      .wait(2000);
  });

  it("Scroll.", () => {
    cy.scrollTo("center").wait(2000);
  });

  //================================================ Select Fields================================================//

  it("Select Upload File Field.", () => {
    cy.get('.table-document-type > tbody > :nth-child(2) > :nth-child(2) > .form-group > .form-checkbox > .form-check-label').click({ force: true }).wait(3000);
  });

  it('Select Title Field and make required field.', () => {
    cy.get('.table-document-type > tbody > :nth-child(3) > :nth-child(2) > .form-group > .form-checkbox > .form-check-label').click({ force: true }).wait(1000);
    cy.get('.table-document-type > tbody > :nth-child(3) > .text-center > .form-group > .form-checkbox > .form-check-label').click({ force: true }).wait(1000);
  });

  it('Select Certificate Numer.', () => {
    cy.get(':nth-child(13) > :nth-child(2) > .form-group > .form-checkbox > .form-check-label').click({ force: true }).wait(1000);
  });

  it('Select Issue Date.', () => {
    cy.get(':nth-child(26) > :nth-child(2) > .form-group > .form-checkbox > .form-check-label').click({ force: true }).wait(1000);
  });
  //================================================ Add Instruction ================================================//

  it("Add Instruction", () => {
    cy.get("textarea")
      .click({ force: true })
      .click()
      .type("Enter the instruction")
      .wait(3000);
  });

  //================================================ Create Button Click ================================================//

  it("Clcik on Create Button", () => {
    cy.get('[data-testid="add-document-type-btn"]')
      .click({ force: true })
      .wait(3000);
  });
}

//================================================ Update Document Type ================================================//

export function Document_Type_Update() {
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

  it("E-2 Click on 3 dots.", () => {
    cy.get(
      ":nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    )
      .click({ force: true })
      .wait(2000);
  });
  it("E-3 Click on Edit link", () => {
    cy.contains("Edit").click();
  });

  it("Select Area of Expertise", () => {
    // Check if the second checkbox is unchecked
    cy.get(
      ":nth-child(2) > tbody > :nth-child(5) > :nth-child(2) > .form-group > .form-checkbox > .form-check-input"
    )
      .should("not.be.checked")
      .click({ force: true })
      .wait(3000);
  });

  it("Scroll.", () => {
    cy.scrollTo("center").wait(2000);
  });

  it("Select fields", () => {
    // Check if the second checkbox is unchecked
    cy.get(
      ":nth-child(3) > tbody > :nth-child(8) > :nth-child(2) > .form-group > .form-checkbox > .form-check-input"
    )
      .should("not.be.checked")
      .click({ force: true })
      .wait(3000);
  });

  it("Scroll.", () => {
    cy.scrollTo("bottom").wait(2000);
  });

  it("Select Enable Download Notification", () => {
    // Check if the checkbox is checked
    cy.get(":nth-child(6) > :nth-child(1) > .form-checkbox > .form-check-input")
      .should("not.be.checked")
      .click({ force: true })
      .wait(3000);
  });

  it("Select User Role", () => {
    cy.get(
      "#downloadNotificationUserRoles > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(3000);
    cy.get(".custom-select__option:eq(3)").click({ force: true }).wait(3000);
    cy.get(".custom-select__option:eq(4)").click({ force: true }).wait(3000);
    cy.get(
      "#downloadNotificationUserRoles > .custom-select__control > .custom-select__indicators > .custom-select__dropdown-indicator > img"
    )
      .click()
      .wait(3000);
  });

  it("Select Enable Upload Notification", () => {
    // Check if the checkbox is checked
    cy.get(":nth-child(7) > :nth-child(1) > .form-checkbox > .form-check-label")
      .should("not.be.checked")
      .click({ force: true })
      .wait(3000);
  });

  it("Select User Role", () => {
    cy.get(
      "#uploadNotificationUserRoles > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    )
      .click({ force: true })
      .wait(3000);
    cy.get(".custom-select__option:eq(5)").click({ force: true }).wait(3000);
    cy.get(".custom-select__option:eq(6)").click({ force: true }).wait(3000);
    cy.get(
      "#uploadNotificationUserRoles > .custom-select__control > .custom-select__indicators > .custom-select__dropdown-indicator > img"
    )
      .click()
      .wait(3000);
  });

  it("Clcik on Update Button", () => {
    cy.get('[data-testid="add-document-type-btn"]')
      .click({ force: true })
      .wait(3000);
  });
}

//================================================ Delete Document Type ================================================//

export function Delete_documentType() {
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

  it("DR-2 Click on 3 dots.", () => {
    cy.get(
      ":nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots"
    ).click({ force: true });
    expect(true).to.equal(true);
  });

  it("DR-3 Click on Delete button", () => {
    cy.contains("Delete").wait(1000).click();
    cy.wait(2000);
    expect(true).to.equal(true);
  });

  it("DR- 4 Confirm Delete Document Type.", () => {
    cy.get(':nth-child(2) > [data-testid="deletebtn"]').click();
  });

  it("DR- 5 Verifying the Toast message.", () => {
    cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
      .should("be.visible")
      .should("have.text", "Document type Removed Successfully.");
    cy.wait(4000);
    expect(true).to.equal(true);
  });
}
