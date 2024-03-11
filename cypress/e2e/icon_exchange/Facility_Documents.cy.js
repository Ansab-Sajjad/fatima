
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


export function Facility_Document_Search() {
  it("Click on Document Menu", () => {
    cy.get('[data-testid="mainmenu-documents"] > .ml-4').click({ force: true });
    cy.wait(5000);
    cy.get('[data-testid="submenu-facility-documents"]').click().wait(5000)
    expect(true).to.equal(true)
  });


  it("Click on Facility Folder to open Sub Folders.", () => {
    cy.get("tbody > :nth-child(3) > :nth-child(2)").click().wait(5000);
  });

  it("Click on Facility SubFolder to open Facility Documents.", () => {
    cy.get("tbody > :nth-child(1) > :nth-child(2)").click().wait(5000);
  });

  it("should display a table with the correct columns", () => {
    // Assuming the table has a specific ID, adjust as needed
    cy.get(".tableresponsive").should("exist").and("be.visible");
    cy.wait(3000);

    // Check if all the expected columns are present
    cy.get(".tableresponsive thead th")
      .should("have.length", 5)
      .and("contain", "Document Name")
      .and("contain", "Created At")
      .and("contain", "Created By")
      .and("contain", "Actions");
    cy.wait(3000);
  });

    // Upload Document Fucntioanlity
    it('Click on Add Files Button.', () => {
      cy.get('[data-testid="add-folder"]').click({force:true})
      cy.wait(3000)
  });

  it('Upload Attahment.', () => {
    cy.get('[data-testid="browsebtn"]').click({force:true})
    const filepath11 = ['a11.jpg','Sample.xls']
    cy.get('[data-testid="browsebtn"]').attachFile(filepath11,{subjectType: 'drag-n-drop'})
    cy.wait(8000)
});

it('Click on Add Button.', () => {
  cy.get('[data-testid="saveCategory"]').click({force:true})
  cy.wait(3000)
});
  // Check Search Filter Fucntioanlity

  it("Search by Document Name.", () => {
    cy.wait(5000);
    cy.get(".left-icon").click({ force: true });
    cy.get('[data-testid="Document Name"]').type("Sample")
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



export function Rename_Facility_Folder() {
  it("Click on Document.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .float-end').click({force: true});
    cy.wait(5000);
    cy.get('[data-testid="submenu-facility-documents"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  it('Click on 3 dot button.', () => {
    cy.get(':nth-child(3) > .stickycolumn > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true})
     expect(true).to.equal(true)
 });

  it("Click on Rename Folder Link.", () => {
    cy.get('[data-testid="rename-folder-btn"]').click({ force: true });
    cy.wait(4000);
  });


  it("Click on Rename Input field and enter folder name", () => {
    cy.get('.form-group > .form-controls > .form-control').click({ force: true }).clear().type("Umer Parent Folder 1");
    cy.wait(3000);
  });

  it("Click on Save Button", () => {
    cy.get('[data-testid="rename-btn"]').click({ force: true });
    cy.wait(3000);
    cy.get(".Toastify__toast-body > :nth-child(2)").then(($Toast_Message) => {
      if ($Toast_Message.text().includes("Folder with similar name already exists")) {

        const newName = "Umer Parent Folder " + Cypress._.random(1, 1000);
        cy.get('.form-group > .form-controls > .form-control').click({ force: true })
                .clear() // Clear the input field
                .type(newName); // Type the new folder name
          cy.get('[data-testid="rename-btn"]').click()
          cy.wait(5000);
          cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Folder has been renamed successfully");
      }
       else {
        // The modal body is not visible or does not contain the specified text,
        cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Folder has been renamed successfully");
      }
    });
  });
}

export function Rename_Facility_subFolder() {
  it("Click on Document.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .float-end').click({force: true});
    cy.wait(5000);
    cy.get('[data-testid="submenu-facility-documents"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  it("Click on Folder Lisitng Data.", () => {
    cy.get('tbody > :nth-child(3) > :nth-child(2)').click({ force: true });
    cy.wait(4000);
  });

  it('Click on 3 dot button.', () => {
    cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true})
     expect(true).to.equal(true)
 });

  it("Click on Rename Folder Link.", () => {
    cy.get('[data-testid="rename-subfolder-btn"]').click({ force: true });
    cy.wait(4000);
  });


  it("Click on Rename Input field and enter folder name", () => {
    cy.get('.form-group > .form-controls > .form-control').click({ force: true }).clear().type("child Folder 3");
    cy.wait(3000);
  });

  it("Click on Save Button", () => {
    cy.get('[data-testid="rename-btn"]').click({ force: true });
    cy.wait(3000);
    cy.get(".Toastify__toast-body > :nth-child(2)").then(($Toast_Message) => {
      if ($Toast_Message.text().includes("Folder with similar name already exists")) {

        const newName = "Child Folder " + Cypress._.random(1, 1000);
        cy.get('.form-group > .form-controls > .form-control').click({ force: true })
                .clear() // Clear the input field
                .type(newName); // Type the new folder name
          cy.get('[data-testid="rename-btn"]').click()
          cy.wait(5000);
          cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Folder has been renamed successfully");
      }
       else {
        // The modal body is not visible or does not contain the specified text,
        cy.get(".Toastify__toast-body > :nth-child(2)", { timeout: 10000 })
          .should("be.visible")
          .should("have.text", "Folder has been renamed successfully");
      }
    });
  });
}

export function Delete_Facility_Folder() {
  it("Click on Document.", () => {
    cy.get('[data-testid="mainmenu-documents"] > .float-end').click({force: true});
    cy.wait(5000);
    cy.get('[data-testid="submenu-facility-documents"] > :nth-child(2)').click({
      force: true,
    });
    cy.wait(4000);
  });

  it('Click on 3 dot button.', () => {
    cy.get(':nth-child(2) > .stickycolumn > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true})
     expect(true).to.equal(true)
 });

  it("Click on Delete Folder Link.", () => {
    cy.get('[data-testid="delete-folder-btn"]').click({ force: true });
    cy.wait(4000);
  });


  it("Click on Delete button from confirmation Pop Up Model", () => {
   // Check if the confirmation pop-up appears
   cy.get('.modal-body').should('be.visible');

  // Click on the Delete option in the confirmation pop-up
  cy.get('[data-testid="deletebtn"]').click();
    cy.wait(3000);
  });
}