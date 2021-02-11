describe('Dynamic Controls Page', () => {
	it('Open https://the-internet.herokuapp.com/dynamic_controls', () => {
   		cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
 	})
 	context('Remove/Add Section', () => { //As a user, I want to remove a section and add it back
 		it('Remove a section', () => {
			cy.get('#checkbox-example').within(($form) => {
 				cy.get('button').click().should('have.text', "Remove")
 				cy.get('#loading').should('be.visible').and('have.text', "Wait for it... ")
 				cy.get('button').should('have.text', "Add")
 				cy.get('#checkbox').should('not.exist')
 				cy.get('#message').should('have.text', "It's gone!")
 				cy.get('#loading[style="display: none;"]').should('not.be.visible')

 			})

 		})
 		it('Add a section back', () => {
			cy.get('#checkbox-example').within(($form) => { 				
 				cy.get('button').click().should('have.text', "Add")
 				cy.get('#loading').should('be.visible').and('have.text', "Wait for it... ")
 				cy.get('#message').should('have.text', "It's back!")
 				cy.get('button').should('have.text', "Remove")
 				//TODO: Add checks for making sure the checkbox is added into the correct spot
 			})
 		})
 	})
 	//As a user, Enable the text field and add text,
 	//then disable the the field and text still is displayed
 	context('Enable and Disable the input field', () => { 
 		it('Enable the text field', () => {
 			cy.get('#input-example').within(($form) => {
 				cy.get('input').should('be.disabled')
 				cy.get('button').click().should('have.text', "Enable")
 				//Expected happenings
 				cy.get('#loading').should('be.visible').and('have.text', "Wait for it... ")
 				cy.get('#message').should('have.text', "It's enabled!")
 				//cy.get('#loading[style="display: none;"]').should('not.be.visible') //fails because stays on page
 				cy.get('button').click().should('have.text', "Disable")
 			})
 		})
 		it('Add Text to input field', () => {
 			cy.get('#input-example').within(($form) => {
 				cy.get('input').should('be.enabled')
 				cy.get('input').type('Howdy')
 				cy.get('button').click()
 			})
 		})
 		it('Disable the input field', () => {
 			cy.get('#input-example').within(($form) => {
 				cy.get('input').should('be.enabled')
 				cy.get('button').click().should('have.text', "Enable")
 				cy.get('#message').should('have.text', "It's disabled!")
 			})
 		})
 	})
 })
 
	//tests
	//verify page before interacting

	//interact with checkbox remover
	//when checkbox is added back its added in the wrong place
	//expect that test to fail

	//Interact with Enable disabler
	//Enable and Expect the 'Wait for it', then  expect it to disappear, type something
	//Disable, expect the 'Wait for it', expect to disappear
