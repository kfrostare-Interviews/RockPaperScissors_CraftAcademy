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
      cy.get('.rock').should('contain', 'rock')
    });

    it('displays the paper- button', () => {
      cy.get('.paper').should('contain', 'paper')
    });

    it('displays the scissors- button', () => {
      cy.get('.scissors').should('contain', 'scissors')
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

  describe('user can click the buttons and', () => {
    
    it('the original title should change', () => {
      cy.get('.rock').contains('rock').click()
      cy.wait(500)
      cy.get('.winner').should('not.contain', 'Make your choice')
    });

    it('the original title should change', () => {
      cy.get('.paper').contains('paper').click()
      cy.wait(500)
      cy.get('.winner').should('not.contain', 'Make your choice')
    });

    it('the original title should change', () => {
      cy.get('.scissors').contains('scissors').click()
      cy.wait(500)
      cy.get('.winner').should('not.contain', 'Make your choice')
    });
  });

});