export function Document_Folder_Search() {
  it("Click on the Document.", () => {
    cy.wait(3000);
    cy.get('[data-testid="mainmenu-documents"] > .float-end')
      .click()
      .wait(3000);
    expect(true).to.equal(true);
  });

  it("Search By First Name.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="name"]').type("ANSAB").wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Facility.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#facility").click().wait(1000);
    cy.get(".custom-select__option").first().click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Area of Expertise.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#areaOfExpertise").click().wait(1000);
    cy.get(".custom-select__option").first().click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Created At.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#createdAt").type("02/06/2024");
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Created By.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get(
      "#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    ).click();
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });
}

////////////////////////////////////

export function Document_Sub_Folder_Search() {
  it("Click on the Document.", () => {
    cy.wait(3000);
    cy.get('[data-testid="mainmenu-documents"] > .float-end')
      .click()
      .wait(3000);
    expect(true).to.equal(true);
  });

  it("Click on First Folder to open Sub Folders.", () => {
    cy.get("tbody > :nth-child(1) > :nth-child(2)").click().wait(3000);
  });

  it("Search By Folder Name.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="name"]').type("ANSAB").wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Credentialing Type.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#credentialingType").click().wait(1000);
    cy.get(".custom-select__option").first().click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Credentialing Year.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#credentialingYear").click().wait(1000);
    cy.get(".custom-select__option").first().click().wait(1000);
    cy.get('[data-testid="search"]').click({ force: true });

    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Created At.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get("#createdAt").type("02/06/2024");
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });

  it("Search By Created By.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get(
      "#createdBy > .custom-select__control > .custom-select__value-container > .custom-select__input-container"
    ).click();
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000); /////===============Array Index 0
    cy.get('[data-testid="search"]').click({ force: true });
    cy.wait(5000);
  });

  it(" Clear Search By filter.", () => {
    cy.get(".left-icon").click();
    cy.wait(2000);
    cy.get('[data-testid="clear"]').click();
    cy.wait(2000);
  });
}

export function Archive_Folder() {

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .float-end')
          .click()
          .wait(3000);
        expect(true).to.equal(true);
      });

      it('Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('Click on 3 dot button.', () => {
       cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('Click on Archive button', () => {
        cy.get('[data-testid="archive-folder-btn"]').wait(1000).click({force: true});
        cy.wait(2000)
    });

it('Verifying the Toast message.', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Your record has been archived successfully');
  });
}


export function Archive_Sub_Folder() {

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .float-end')
          .click()
          .wait(3000);
        expect(true).to.equal(true);
      });
    
      it("Click on First Folder to open Sub Folders.", () => {
        cy.get("tbody > :nth-child(1) > :nth-child(2)").click().wait(3000);
      });

      it('Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('Click on 3 dot button.', () => {
       cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('Click on Archive button', () => {
        cy.get('[data-testid="archive-subfolder-btn"]').wait(1000).click({force: true});
        cy.wait(2000)
    });

it('Verifying the Toast message.', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Your record has been archived successfully');
  });
}

export function Reinstate_Folder(){

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .float-end')
          .click()
          .wait(3000);
        expect(true).to.equal(true);
      });
    
      it("Click on View Archived Folders.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="archiveddocs"]').click({ force: true });
        cy.wait(3000);
      });

      it('Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

       it('Click on 3 dot button.', () => {
        cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('Click on Archive button', () => {
        cy.get('[data-testid="deletebtn"]').wait(1000).click({force: true});
        cy.wait(2000)
    });

    it('Confirm the Modal.', () => {
        cy.get('[data-testid="confirm-confirmation"]').click({force: true});
    });

    it('Verifying the Toast message.', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Your record has been reinstated successfully');
      });

}


export function Reinstate_Sub_Folder(){

    it("Click on the Document.", () => {
        cy.wait(3000);
        cy.get('[data-testid="mainmenu-documents"] > .float-end')
          .click()
          .wait(3000);
        expect(true).to.equal(true);
      });
    
      it("Click on First Folder to open Sub Folders.", () => {
        cy.get("tbody > :nth-child(1) > :nth-child(2)").click().wait(3000);
      });

    
      it("Click on View Archived Folders.", () => {
        cy.get(".left-icon").click();
        cy.wait(2000);
        cy.get('[data-testid="archiveddocs"]').click({ force: true });
        cy.wait(3000);
      });

      it('Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

       it('Click on 3 dot button.', () => {
        cy.get(':nth-child(1) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('Click on Archive button', () => {
        cy.get('[data-testid="deletebtn"]').wait(1000).click({force: true});
        cy.wait(2000)
    });

    it('Confirm the Modal.', () => {
        cy.get('[data-testid="confirm-confirmation"]').click({force: true});
    });

    it('Verifying the Toast message.', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 }).should('be.visible').should('have.text', 'Your record has been archived successfully');
      });

}