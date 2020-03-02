// Player can interact with game page 
describe('User can navigate the Game page', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001");
        cy.get('div[class="startOptions button"]').click();
	  })
    
    describe('user can see the game page and'), () => {

      it('displays the "Make your choice" title', () => {
			  cy.get('#winner').should('contain', 'Make your choice');
		  });

      it('does not display start header', () => {
        cy.get('#startOptions').should('not.exist');
      });

      // it('displays background image', () => {
      //   cy.route('.imageURL').as('image');
      //   cy.wait('@image') // Don't really get what this does...
      //   cy.get('.bg-hero').should('be.visible'); //.bg-hero is that a name or a pre-set cypress syntax command??
      // });

      // it('displays image dollar icons in score board', () => {
      //   cy.get('div[class="dollarImage"]').find('img').should('be.visible');
      // });

      // it('displays score board starting on $500 for player', ('topLeft') => {
      //   cy.get('#playerScore').should('contain', '500');
      // });

      // it('displays score board starting on $500 for computer', ('topRight') => {
      //   cy.get('#computerScore').should('contain', '500');
      // });
      
      it('displays the player hand', () => {
			  cy.get('#playerHand').should('be.visible');
		  });

      it('displays the computer hand', () => {
			  cy.get('#computerHand').should('be.visible');
		  });

      it('displays buttons for rock, paper, scissors', () => {
        cy.get('#rock').find('button').should('be.visible'); 
        cy.get('#paper').find('button').should('be.visible');
        cy.get('#scissors').find('button').should('be.visible');
      });

    });
});