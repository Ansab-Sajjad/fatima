

function ExpiredMalpracticesSearchFilters() {

    it('IU-1 Click on Reports.', () => {
        cy.get('[data-testid="mainmenu-reports"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-expired-malpractice"]').click().wait(1000)
    expect(true).to.equal(true)
    });
    
    
it('Search By Provider Name.', () => {
    cy.get('.d-flex > .form-controls > .ico').click()
    cy.wait(2000)
    cy.get('#provider > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Areas Of Expertise.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Facility Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#facility > .custom-select__control > .custom-select__indicators').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});


it('Search By Malpractice Insurance.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#malpracticeInsurance > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});


it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search by Effective Start Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Effective End Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(6) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Notes.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="Note"]').click().type('anynote')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Notes Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#expiredMalpracticeNotesAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

}


function ExpiredReappointmentsSearchFilters() {

    it('IU-1 Click on Reports.', () => {
        cy.get('[data-testid="mainmenu-reports"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-reappointment"]').click().wait(1000)
    expect(true).to.equal(true)
     });
    
    
it('Search By Provider Name.', () => {
    cy.get('.d-flex > .form-controls > .ico').click()
    cy.wait(2000)
    cy.get('#provider > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Areas Of Expertise.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Facility Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#facility > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});



it('Search by Effective Start Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Reappointment Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Status.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingReappointmentStatus > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Status Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingReappointmentStatusAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Notes.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="Notes"]').click().type('anynote')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});

it('Search By Notes Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingReappointmentNotesAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});
}


function ProvidersWorkHistorySearchFilters() {

    it('IU-1 Click on Reports.', () => {
        cy.get('[data-testid="mainmenu-reports"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-providers-work-history"]').click().wait(1000)
    expect(true).to.equal(true)
     });
    
    
it('Search By Provider Name.', () => {
    cy.get('.d-flex > .form-controls > .ico').click()
    cy.wait(2000)
    cy.get('#provider > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Areas Of Expertise.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Facility Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#facility > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});



it('Search by Privileges Start Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Privileges End Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Status.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingExpiringStatus > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Status Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingExpiringStatusAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Notes.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="Note"]').click().type('anynote')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});

it('Search By Notes Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#upcomingExpiringNotesAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});
}


function ExpiredDocumentsSearchFilters() {

    it('IU-1 Click on Reports.', () => {
        cy.get('[data-testid="mainmenu-reports"] > .float-end').click()    
        cy.wait(4000);
        cy.get('[data-testid="submenu-expired-document"]').click().wait(1000)
    expect(true).to.equal(true)
     });
    
    
it('Search By Provider Name.', () => {
    cy.get('.d-flex > .form-controls > .ico').click()
    cy.wait(2000)
    cy.get('#provider > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Areas Of Expertise.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Document Type.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#type > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});



it('Search by Expiry Date.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('.customdate').click().type('09/10/2024 - 09/12/2024')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});


it('Search By Status.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#status > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Status Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#statusAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search By Notes.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="Notes"]').click().type('anynote')
    cy.wait(5000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)
});

it('Search By Notes Added By.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#notesAddedBy > .custom-select__control > .custom-select__indicators > .custom-select__indicator').click({ force: true });
    cy.get(".custom-select__option:eq(0)").click({ force: true }).wait(1000);
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)
});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});
}


export default {ExpiredMalpracticesSearchFilters,ExpiredReappointmentsSearchFilters,ProvidersWorkHistorySearchFilters,ExpiredDocumentsSearchFilters};