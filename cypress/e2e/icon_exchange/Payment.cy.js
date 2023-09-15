export function Payment() {
	//===================> which list do you want to test.?

	const index = 2;

	it("Click on Payment Menu.", () => {
		cy.get('[data-testid="mainmenu-payments"]').click().wait(3000);
	});

	it("Click 3 Dots.", () => {
        cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic`).click({force:true})
			// .click();
	});

	it("Click on View Button.", () => {
		cy.contains("View").click({ force: true }).wait(4000);
	});

	it("Scroll Down.", () => {
		cy
			.scrollTo("bottom", { duration: 1000 }, { ensureScrollable: false })
			.wait(2000);
	});

	it("Scroll Top.", () => {
		cy
			.scrollTo("top", { duration: 1000 }, { ensureScrollable: false })
			.wait(2000);
	});

    it('Click on Back to Payment Listing.', () => {
        cy.get('.backarrow').click()
    });
}
