// Player can interact with game page 
describe('User can navigate the Game page', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001");
        cy.get('div[class="oliverImage"]').click();
	  })
    
    describe('user can see the game page and'), () => {

      it('displays the "Make your choice" title', () => {
			  cy.get('#makeChoice').should('contain', 'Make your choice');
		  });

      it('displays component name in url', () => {
        cy.url().should('contain', 'game');
      })

      it('does not display start header', () => {
        cy.get('#pickPlayer').should('not.exist');
      });

      it('displays background image', () => {
        cy.route('.imageURL').as('image');
        cy.wait('@image') // Don't really get what this does...
        cy.get('.bg-hero').should('be.visible'); //.bg-hero is that a name or a pre-set cypress syntax command??
      });

      it('displays image dollar icons in score board', () => {
        cy.get('div[class="dollarImage"]').find('img').should('be.visible');
      });

      it('displays score board starting on $500 for player', ('topLeft') => {
        cy.get('#playerScore').should('contain', '500');
      });

      it('displays score board starting on $500 for computer', ('topRight') => {
        cy.get('#computerScore').should('contain', '500');
      });
        
      it('displays left hand icon below score board', ('left') => {
        cy.get('div[class="leftHandImage"]').find('img').should('be.visible');
      });

      it('displays right hand icon below score board', ('right') => {
        cy.get('div[class="rightHandImage"]').find('img').should('be.visible');
      });

      it('displays player avatar on left hand side', ('left') => {
        cy.get('div[class="oliverImage"]').find('img').should('be.visible');
      });

      it('displays computer avatar on right hand side', ('right') => {
        cy.get('div[class="noelImage"]').find('img').should('be.visible');
        // How to tell Cypress it could be any of the four other avatars but not Oliver?!
      });

      it('displays buttons for rock, paper, scissors', () => {
        cy.get('#rockButton').find('button').should('be.visible'); 
        cy.get('#paperButton').find('button').should('be.visible');
        cy.get('#scissorsButton').find('button').should('be.visible');
      });

      it('clicks on an option and starts the game', () => {
        beforeEach(() => {
          cy.visit("http://localhost:3001");
          cy.get('div[class="oliverImage"]').click();
          cy.contains('#rockButton').click('center')
          expect('#computerScore').to.not.be('nil')
        })
        cy.get('#computerScore').should('contain', '500');
        expect($input).to.not.be('disabled') //trying to find a way for cypress to see when the game has started

      });

    };
)};

    it('player can see hand icons moving up and down', () => {})
    it('player can see title change to announce winner', () => {})
    it('player can see massage "you owe x money, if loses', () => {})
    it('player can see massage "x owe you money, if wins', () => {})
    it('player can keep playing until they win computers- or lose their own money', () => {})
    it('player can ', () => {})