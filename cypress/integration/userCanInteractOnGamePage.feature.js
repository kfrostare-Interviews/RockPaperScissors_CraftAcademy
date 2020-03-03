describe('User can navigate the Game Page', () => {
	beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.get('.button').contains('Bring it on').click()
	})

	describe('user can see the game page and it', () => {
				
		it('displays the game title', () => {
			cy.get('.winner').should('contain', 'Make your choice');
    });

    it('displays the player hand', () => {
      cy.get('.playerHand').should('be.visible')
    });

    it('displays the computer hand', () => {
      cy.get('.computerHand').should('be.visible')
    });

    it('displays the rock- button', () => {
      cy.get('.rock .btn').should('contain', 'Rock')
    });

    it('displays the paper- button', () => {
      cy.get('.paper .btn').should('contain', 'Paper')
    });

    it('displays the scissors- button', () => {
      cy.get('.scissors .btn').should('contain', 'Scissors')
    });

    it('displays Player title in score board', () => {
			cy.get('.playerScore').should('contain', 'Student');
    });
    
    it('displays Player title in score board', () => {
			cy.get('.computerScore').should('contain', 'Coach');
		});

		it('displays score board starting on $0 for both players', () => {
			cy.get('.playerScore').should('contain', '0');
		});

		it('displays score board starting on $0 for both players', () => {
			cy.get('.computerScore').should('contain', '0');
		});
  });

  describe('user can click the buttons and it', () => {
	
  )};
  
  describe('user should not be able to see the start page', () => {

    it('does not display start title', () => {
			cy.get('#startPage').should('not.be.visible');
    });
    
    it('does not display start header', () => {
			cy.get('#start').should('not.be.visible');
    });
    
    it('does not display start button', () => {
			cy.get('#button').should('not.be.visible');
		});

    it('does not display game header', () => {
			cy.get('#start').should('not.be.visible');
		});
  });

});
