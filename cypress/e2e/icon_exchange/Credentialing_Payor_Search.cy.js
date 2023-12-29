
 function Credenitialing_Payor_Search() {

    it('E-1 Click on Credentialing & Payor Menu.', () => {
        cy.get('[data-testid="submenu-credentialing-pe"]').click({force:true})
        cy.wait(4000)
        expect(true).to.equal(true)
    });

}
export default Credenitialing_Payor_Search;