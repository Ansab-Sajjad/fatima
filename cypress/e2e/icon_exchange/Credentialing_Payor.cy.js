
//================================================ Add Credenitialing Payor ================================================//


export function Credentialing_Payor(){

    it('E-1 Click on Credentialing & Payor Menu.', () => {
        cy.get('[data-testid="submenu-credentialing-pe"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });
    
    
    it('E-1 Click on Add Credentialing & Payor Button.', () => {
        cy.get('[data-testid="add-credentialingPayor"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });


    it('E-2 Select Provider Name.', () => {
        cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(2)').click({force: true}).wait(3000)
    });

    it('E-3 Select Area of Expertise.', () => {
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(2)').click({force: true}).wait(3000)
    });

    it('E-4 Select Facility Name.', () => {
        cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(5)').click({force: true}).wait(3000)
    });

    it('E-5 Select Credentialing Type.', () => {
        cy.get('#credentialingType > .custom-select__control > .custom-select__value-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
    });

    it('E-6 Select Credentialing Year.', () => {
        cy.get('#credentialingYear > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
    });

    it('E-7 Select Credentialing Coordinaor.', () => {
        cy.get('#credentialingCoordinator > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(3)').click({force: true}).wait(3000)
    });

    it('E-8 Select Target Date.', () => {
        cy.get('#targetStartDate').click({force:true}).wait(2000).type("12/19/2023").type('{enter}').wait(1000)
        
    });
    it('E-9 Select Date of InitiaL Contact.', () => {
        cy.get('#dateOfInitialContact').click({force:true}).wait(2000).type("12/10/2023").type('{enter}').wait(1000)
        
    });

    it('E-10 Select Date of Addiitonal Inquiries.', () => {
        cy.get('#dateOfAdditionalInquiries').click({force:true}).wait(2000).type("12/10/2023").type('{enter}').wait(1000)
        
    });

    it('E-11 Select Application Sent For Contractor Review Signature On.', () => {
        cy.get('#applicationSentForContractorReviewSignatureOn').click({force:true}).wait(2000).type("12/05/2023").type('{enter}').wait(1000)
        
    });

    it('E-12 Select Application Signed And Returned On', () => {
        cy.get('#applicationSignedAndReturnedOn').click({force:true}).wait(2000).type("12/05/2023").type('{enter}').wait(1000)
        
    });

    it('E-13 Select paperwork Submitted To Facility On', () => {
        cy.get('#paperworkSubmittedToFacilityOn').click({force:true}).wait(2000).type("12/05/2023").type('{enter}').wait(1000)
        
    });

    it('E-14 Select Facility Approval', () => {
        cy.get('#facilityApproval > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(3000)
    });

    it('E-15 Select ok To Schedule', () => {
        cy.get('#okToSchedule > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
    });

    it('E-16 Add Provider Notes', () => {
        cy.get(':nth-child(17) > .form-group > :nth-child(2) > .form-controls > textarea').click({force:true}).wait(2000).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    });

    it('E-17 Add Facility Notes', () => {
        cy.get(':nth-child(18) > .form-group > :nth-child(2) > .form-controls > textarea').click({force:true}).wait(2000).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
       
    });

    it('E-18 Select payor Documents Sent For Provider Signatures On', () => {
        cy.get('#payorDocumentsSentForProviderSignaturesOn').click({force:true}).wait(2000).type("12/05/2023").type('{enter}').wait(1000)
        
    });

    it('E-19 Select payor Paperwork Submitted To Facility On', () => {
        cy.get('#payorPaperworkSubmittedToFacilityOn').click({force:true}).wait(2000).type("12/15/2023").type('{enter}').wait(1000)
        
    });

    it('E-20 Select payor Enrollment Submitted To Payors On', () => {
        cy.get('#payorEnrollmentSubmittedToPayorsOn').click({force:true}).wait(2000).type("12/25/2023").type('{enter}').wait(1000)
        
    });

    it('E-21 Select payor Enrollment Submitted To Payors On', () => {
        cy.get('#payorEnrollmentSubmittedToPayorsOn').click({force:true}).wait(2000).type("12/27/2023").type('{enter}').wait(1000)
        
    });

    it('E-22 Select Payor Enrollment Approval Status', () => {
        cy.get('#payorEnrollmentApprovalStatus > .custom-select__control > .custom-select__value-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
    });

    it('E-23 Select payor Enrollment Status Date', () => {
        cy.get('#payorEnrollmentApprovalDate').click({force:true}).wait(2000).type("12/30/2023").type('{enter}').wait(1000)
        
    });

    it('E-24 Add Payor Staff Notes on Payor Enrollment', () => {
        cy.get(':nth-child(25) > .form-group > :nth-child(2) > .form-controls > textarea').click({force:true}).wait(2000).type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    });

    it('E-25 Add Payor Facility Notes on Payor Enrollment', () => {
        cy.get(':nth-child(26) > .form-group > :nth-child(2) > .form-controls > textarea').click({force:true}).wait(2000).type("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    });

    it('E-26 Add General Notes Payor Enrollment', () => {
        cy.get(':nth-child(27) > .form-group > :nth-child(2) > .form-controls > textarea').click({force:true}).wait(2000).type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")
    });

    it('E-27 Select Payor Enrollment Assigned To', () => {
        cy.get('#assignedTo > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(0)').click({force: true}).wait(3000)
    });

    it('E-27 Click on Save Button', function(){
        cy.get('[data-testid="saverecord"]').click({force:true}).wait(2000)
    })

    it('E-28 Update Record with Non-Unique Combination', () => {
        // Assuming you have a function to update the combination
        updateCombination('#provider', '#areaOfExpertise', '#facility', '#credentialingType', '#credentialingYear');

        // Validate uniqueness after updating the record
        checkAndSaveRecord();
    });

    function selectDropdown(selector, optionIndex) {
        cy.get(`${selector} > .custom-select__control > .custom-select__value-container > .custom-select__input-container`)
            .click({ force: true }).wait(2000);
        cy.get(`.custom-select__option:eq(${optionIndex})`).click({ force: true }).wait(3000);
    }

    function updateCombination(providerSelector, expertiseSelector, facilitySelector, typeSelector, yearSelector) {
        // Customize this function based on your application logic to update the combination
        // You may change the selected values or perform other actions to make the combination unique
        // Example:
        selectDropdown(providerSelector, 3);
        selectDropdown(expertiseSelector, 1);
        selectDropdown(facilitySelector, 4);
        selectDropdown(typeSelector, 1);
        selectDropdown(yearSelector, 1);
    }

    function checkAndSaveRecord() {
        cy.get('[data-testid="saverecord"]').click({ force: true }).wait(2000);

        // Check for uniqueness and handle accordingly
        if (cy.get('.validation-error-message').should('exist')) {
            // Combination is not unique, update and save again
            updateCombination('#provider', '#areaOfExpertise', '#facility', '#credentialingType', '#credentialingYear');
            cy.get('[data-testid="saverecord"]').click({ force: true }).wait(2000);
        }
    }
}

//================================================ Update Credenitialing Payor ================================================//

export function Credentialing_Payor_Update(){

    it('E-1 Click on Credentialing & Payor Menu.', () => {
        cy.get('[data-testid="submenu-credentialing-pe"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('E-2 Click on 3 dots.', () => {
        cy.get(':nth-child(5) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
    });
    it('E-3 Click on Edit link', () => {
        cy.contains('Edit').click();
        
    });

    it('E-4 Check disabled fields on edit page', () => {
        // Assume the fields have unique identifiers, replace them accordingly
        const disabledFields = [
          'div#provider',
          'div#areaOfExpertise',
          'div#facility',
          'div#credentialingType',
          'div#credentialingYear',
        ];
      
        // Verify that each field exists and is disabled
        disabledFields.forEach((field) => {
          cy.get(field).should('exist').should('have.class', 'custom-select--is-disabled');
        });
      });
      
      it('E-5 Select Credentialing Coordinaor.', () => {
        cy.get('#credentialingCoordinator > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(2)').click({force: true}).wait(3000)
    });

    it('E-6 Select Target Date.', () => {
        cy.get('#targetStartDate').click({force:true}).wait(2000).type("12/19/2023").type('{enter}').wait(1000)
        
    });

    it('E-7 Select facility Approval.', () => {
        cy.get('#facilityApproval > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).wait(2000)
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(3000)
    });

    it('E-8 Select Payor Enrollment Approval Status.', () => {
        cy.get('#payorEnrollmentApprovalStatus > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true})
        cy.get('.custom-select__option:eq(1)').click({force: true}).wait(3000)
    });

    it('E-9 Click on Update Button.', () => {
        cy.get('[data-testid="saverecord"]').click({force:true}).wait(3000)
        
    });

    it('E-10 verify Success Message.', () => {
        cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')

        cy.get('.Toastify__toast-body > :nth-child(2)').invoke('text').then((text) => {
            // Assert the content of the success message
            expect(text.trim()).to.equal('Credentialing and Payor has been updated successfully');
          });
    });
    
   
}
