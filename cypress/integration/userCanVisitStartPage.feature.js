// User can enter the start page of our game

describe('User can visit the start page', () => {
	it('user can enter the start page', () => {
		cy.visit('http://localhost:3001')
		cy.contains('Rock Paper Scissors')
	})
})