// Player can interact with start page
describe('User can navigate the Start Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	})

	describe('user can see the start page and it', () => {
    
    it('displays the background image', () => {
      cy.get('.gameHouse').should('have.css', 'background-image', 'url("http://localhost:3001/img/orange-1247700.jpg")')		
    })

		it('displays the Title', () => {
			cy.get('.start').should('contain', 'Rock Paper Scissors');
    });
    
    it('displays the Paragraph', () => {
			cy.get('.startPage p').should('contain', 'Are you ready?');
		});

		it('does not display game header', () => {
			cy.get('#winner').should('not.exist');
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

		describe('player can see play- button', () => {
			
			it('displays player button', () => {
				cy.get('.button').should('contain', 'Bring it on');
      });

		});
	});
});
