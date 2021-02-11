describe('Add/Remove Element Page', () => {
	it('Open https://the-internet.herokuapp.com/add_remove_elements', () => {
   	cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
 		})

	context('Add And Remove Single Element', () => {   	//As a User, I can add a single element and remove it
    	it('Add a single element', () => {
    		cy.contains('Add Element').click()
    		})
    		
    	it('Single element is displayed', () => {
    		cy.get('.added-manually').should('contain', 'Delete') 
    		//TODO: make sure there aren't more than 1 elements added
    		})
    	
    	it('"Remove the single element', () => {
    		cy.get('.added-manually').click()
    		cy.get('.added-manually').should('not.exist')
    		})
    })

    context('Add And Remove Multiple Elements', () => { //As a User, I can add many elements and remove all of them
       	it('Add 5 elements', () => {
    		cy.contains('Add Element').click()
    		cy.contains('Add Element').click()
    		cy.contains('Add Element').click()
    		cy.contains('Add Element').click()
    		cy.contains('Add Element').click()
    		cy.get('[class="added-manually"]').should('have.length', 5) //assert 5 appeared
    		})
       	it('Remove first element', () => {
       		cy.get('.added-manually').first().click()
       		cy.get('[class="added-manually"]').should('have.length', 4) //assert 4 are left
       	})
       	it('Removes all other elements', () =>{
       		cy.get('.added-manually').click({ multiple: true })
       		cy.get('.added-manually').should('not.exist') //assert all have been removed
       		})
       	//TODO: Test the highlighting of the element being clicked and removed 
     })
})