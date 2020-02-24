	// The following tests checks that the user can play our game

describe('User can play the Rock, Paper, Scissors game', () => {
	it('user can enter the start page', () => {
		cy.visit('http://localhost:3001')
	});
	
	// Player gets sent to start page 
	it('player can see title on start page', () => {})
	it('player can see image on start page', () => {})
	it('player can see dollar icons in the score board', () => {})
	it('player can see score board starting on $0 for both players', () => {})
	it('player can see 5 icons/avatars on start page', () => {})
	it('player can see "pick a player"- message on start page', () => {})
	it('player can click on one player', () => {})
	it('when user clicks on a player they get sent to game page ', () => {})
	it('player can ', () => {})

	// Player gets sent to game page 
	it('player can see score board changed to $500 for both players', () => {})
	it('player can see dollar icons in the score board next to score', () => {})
	it('player can see title on game page "Make your choice"', () => {})
	it('player can see background image on game page', () => {})
	it('player can see hand icons on each side of the title', () => {})
	it('player can see the icon they chose for player on left side', () => {})
	it('player can see one of the other icons as player on left side', () => {})
	it('player can see a bug icon for player on left side', () => {})
	it('player can see three buttons giving options of rock, paper or scissors', () => {})
	it('player can click on one of the options/buttons ', () => {})
	it('player can see hand icons moving up and down', () => {})
	it('player can see title change to announce winner', () => {})
	it('player can see score board change if they win/lose', () => {})
	it('player can keep playing until they win computers- or lose their own money', () => {})
	it('player can ', () => {})
	
	// The following tests tries out the sad paths of our application
	it('player can see start- page, not any other page', () => {})
	it('player can see game- page, not any other page ', () => {})
	it('player tries to click on score board', () => {})
	it('player tries to click on two options for player at the same time', () => {})
	it('player tries to click on two options for rock, paper, scissors at the same time', () => {})
	it('player tries to click on -back button mid game', () => {})
	it('player tries to alter score board ', () => {})
})