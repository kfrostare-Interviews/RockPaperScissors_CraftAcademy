// Player can interact with start page
describe('User can navigate the Start Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	})

	describe('user can see the start page and it', () => {
				
		it('displays the Title', () => {
			cy.get('.start').should('contain', 'Rock Paper Scissors');
    });
    
    it('displays the Paragraph', () => {
			cy.get('.startPage').should('contain', 'Pick a player!');
		});

		it('does not display game header', () => {
			cy.get('#winner').should('not.exist');
		});

		// it('displays background image', () => {
		// 	cy.route('.imageURL').as('image');
		// 	cy.wait('@image')
		// 	cy.get('.bg-hero').should('be.visible');
		// });

		// it('displays image dollar icons in score board', () => {
		// 	cy.get('div[class="dollarImage"]').find('img').should('be.visible');
    // });
    
    it('displays Player title in score board', () => {
			cy.get('.playerScore').should('contain', 'Player');
    });
    
    it('displays Player title in score board', () => {
			cy.get('.computerScore').should('contain', 'Computer');
		});

		it('displays score board starting on $0 for both players', () => {
			cy.get('.playerScore').should('contain', '0');
		});

		it('displays score board starting on $0 for both players', () => {
			cy.get('.computerScore').should('contain', '0');
		});


		// Player can see avatars/icons
		describe('player can see 5 icons/avatars on start page', () => {
			
			it('displays oliver button', () => {
				cy.get('.oliver').should('contain', 'Oliver');
      });
      
      it('displays oliver button', () => {
				cy.get('.thomas').should('contain', 'Thomas');
      });
      
      it('displays oliver button', () => {
				cy.get('.noel').should('contain', 'Noel');
      });
      
      it('displays oliver button', () => {
				cy.get('.faraz').should('contain', 'Faraz');
      });
      
      it('displays oliver button', () => {
				cy.get('.adi').should('contain', 'Adi');
			});



			// it('displays image dollar icons in score board', () => {
			// 	cy.get('div[class="adiImage"]').find('img').should('be.visible');
			// });
		});


		//Player can click avatars/icons
		describe('player can click each icon/avatar and get to game page', () => {
			
			// it('displays profile icons/avatars below score board', () => {
			// 	cy.get('div[class="oliverImage"]').click();
			// 	cy.url().should('contain', 'game');
			// 	cy.get('#makeChoice').should('contain', 'Make your choice');
			// });

			// it('displays profile icons/avatars below score board', () => {
			// 	cy.get('div[class="thomasImage"]').click();
			// 	cy.url().should('contain', 'game');
			// 	cy.get('#makeChoice').should('contain', 'Make your choice');
			// });

			// it('displays profile icons/avatars below score board', () => {
			// 	cy.get('div[class="farazImage"]').click();
			// 	cy.url().should('contain', 'game');
			// 	cy.get('#makeChoice').should('contain', 'Make your choice');
			// });

			// it('displays profile icons/avatars below score board', () => {
			// 	cy.get('div[class="noelImage"]').click();
			// 	cy.url().should('contain', 'game');
			// 	cy.get('#makeChoice').should('contain', 'Make your choice');
			// });

			// it('displays profile icons/avatars below score board', () => {
			// 	cy.get('div[class="adiImage"]').click();
			// 	cy.url().should('contain', 'game');
			// 	cy.get('#makeChoice').should('contain', 'Make your choice');
			// });
		});
	});
}); 