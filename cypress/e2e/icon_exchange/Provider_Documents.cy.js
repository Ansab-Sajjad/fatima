import Random_Textt from "./Random_Text";

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

  it("Search by Provider Name.", () => {
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
  
it('Search by Created By', () => {
  cy.get('.left-icon').click({force: true})
cy.wait(2000)
cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
cy.get('[data-testid="search"]').click({force:true})
cy.wait(5000)
});

it('Clear Filter.', () => {
cy.get('.left-icon').click({force: true})
cy.wait(2000)
cy.get('[data-testid="clear"]').click({force: true})
cy.wait(2000)

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
  
  
it('Search by Created By', () => {
  cy.get('.left-icon').click({force: true})
cy.wait(2000)
cy.get('#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(1000)
cy.get('.custom-select__option:eq(0)').click({force: true}).wait(1000);   /////===============Array Index 0;
cy.get('[data-testid="search"]').click({force:true})
cy.wait(5000)
});

it('Clear Filter.', () => {
cy.get('.left-icon').click({force: true})
cy.wait(2000)
cy.get('[data-testid="clear"]').click({force: true})
cy.wait(2000)

});


}

export function Archive_Provider(){

  it("Click on Document Menu", () => {
    cy.get('[data-testid="mainmenu-documents"] > .ml-4').click({ force: true });
    cy.wait(5000);
  });
  it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true}).wait(2000)
});
it('Click on archive button.', () => {
  cy.get('[data-testid="archive-btn"]').click()
});


it('Verifying the Toast message', () => {
  cy.wait(1000);
  cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Your record has been archived successfully')
});


}

export function Reinstate_Provider(){

  
  it("Click on the Document.", () => {
    cy.wait(3000);
    cy.get('[data-testid="mainmenu-documents"] > .float-end')
      .click()
      .wait(3000);
      cy.get('[data-testid="submenu-provider-documents"] > :nth-child(2)').click()
      .wait(3000);
    expect(true).to.equal(true);
  });


  it("Click on View Archived Folders.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="Archived Providers"]').click({ force: true });
    cy.wait(3000);
  });


   it('Click on 3 dot button.', () => {
    cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true})
    expect(true).to.equal(true)
});

it('Click on Reinstate button.', () => {
  cy.get('[data-testid="reinstate-btn"]').click().wait(1000)
});

it('Should Confirm Modal.', () => {
  cy.get('[data-testid="confirm-confirmation"]').click().wait(1000)
});


it('Verifying the Toast message', () => {
  cy.wait(1000);
  cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Your record has been reinstated successfully')
});

}

export function Rename_Provider_Folder(){

  it("Click on the Document.", () => {
    cy.wait(3000);
    cy.get('[data-testid="mainmenu-documents"] > .float-end')
      .click()
      .wait(3000);
      cy.get('[data-testid="submenu-provider-documents"] > :nth-child(2)').click()
      .wait(3000);
    expect(true).to.equal(true);
  });

  it("Should click on provider to view the listing of the Provider's folder", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click({force:true}).wait(3000)
  });

  it('Should click on 3 dot then click on Rename.', () => {
    cy.get(':nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > p > .icon-Vertical-Dots').click({force:true}).wait(2000)
    cy.get('[data-testid="rename-folder-btn"]').click({force:true}).wait(2000)
  });

  it('Enter Random text in the name of Folder.', () => {
    cy.get('.form-group > .form-controls > .form-control').clear().type("Renaming the folder" + Random_Textt())
  });

  it('Click on Save Button.', () => {
    cy.get('[data-testid="rename-btn"]').click()
  });

  it('Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Folder has been renamed successfully')
  });

}