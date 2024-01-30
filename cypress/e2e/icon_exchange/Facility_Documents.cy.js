
export function Facility_Documents() {
  it("Click on Document.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .float-end').click({
      force: true,
    });
    cy.wait(4000);
    cy.get('[data-testid="submenu-facilities"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  it("Click on Add FolderButton.", () => {
    cy.get('[data-testid="add-folder"]').click({ force: true });
    cy.wait(4000);
  });

  //================================================ Add Folder ================================================//

  it("Click on to Select Facility Name", () => {
    cy.get('.form-controls > #facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({ force: true });
    cy.get(".custom-select__option:eq(2)").click({ force: true }).wait(3000);
  });

  it("Click on to Select Areas Of Expertise", () => {
    cy.get('.form-controls > #areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({ force: true });
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(3000);
  });

  it("Add Folder Name and Click on Save Button", () => {
    const folderName = "Shifa International";

    // Type the folder name in the input field
    cy.get('.mb-3 > .form-controls > .form-control')
      .click()
      .type(folderName)
      .wait(3000);

    // Click on the Save button
    cy.get('[data-testid="saveCategory"]').click({ force: true }).wait(3000);

    // Check if a message indicating folder name already exists appears
    cy.get(".Toastify__toast-body > :nth-child(2)").then(($message) => {
      if ($message.length > 0) {
        // If the message exists, generate a new category name
        const newFolderName = `${folderName} - ${Math.floor(
          Math.random() * 1000
        )}`;

        // Clear the previous input and type the new category name
        cy.get('.mb-3 > .form-controls > .form-control')
          .clear()
          .type(newFolderName)
          .wait(3000);

        // Click on the Save button again
        cy.get('[data-testid="saveCategory"]')
          .click({ force: true })
          .wait(3000);
      }
    });
  });
}

  //================================================ Add Sub Folder ================================================//

export function Facility_Documents_Subfolder() {
  it("Click on Document.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .float-end').click({
      force: true,
    });
    cy.wait(4000);
    cy.get('[data-testid="submenu-facilities"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  it("Click on Folder Lisitng Data.", () => {
    cy.get('tbody > :nth-child(2) > :nth-child(2)').click({ force: true });
    cy.wait(4000);
  });

  it("Click on Add Sub Folder Button.", () => {
    cy.get('[data-testid="add-folder"]').click({ force: true });
    cy.wait(4000);
  });


  it("Click on to Select Credentialing Type", () => {
    cy.get('.form-controls > #credentialingType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({ force: true });
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(3000);
  });

  it("Click on to Select Credentialing Year", () => {
    cy.get('.form-controls > #credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({ force: true });
    cy.get(".custom-select__option:eq(1)").click({ force: true }).wait(3000);
  });

  it("Add Folder Name and Click on Save Button", () => {
    const folderName = "SNMC Subfolder";

    // Type the folder name in the input field
    cy.get('.mb-3 > .form-controls > .form-control')
      .click()
      .type(folderName)
      .wait(3000);

    // Click on the Save button
    cy.get('[data-testid="saveCategory"]').click({ force: true }).wait(3000);

    // Check if a message indicating folder name already exists appears
    cy.get(".Toastify__toast-body > :nth-child(2)").then(($message) => {
      if ($message.length > 0) {
        // If the message exists, generate a new category name
        const newFolderName = `${folderName} - ${Math.floor(
          Math.random() * 1000
        )}`;

        // Clear the previous input and type the new category name
        cy.get('.mb-3 > .form-controls > .form-control')
          .clear()
          .type(newFolderName)
          .wait(3000);

        // Click on the Save button again
        cy.get('[data-testid="saveCategory"]')
          .click({ force: true })
          .wait(3000);
      }
    });
  });
}
