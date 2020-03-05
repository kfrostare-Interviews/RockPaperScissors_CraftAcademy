describe('User chooses to go with the Sad Path', () => {
  beforeEach(() => {
    cy.visit('https://kfrostare-rpscraftacademy.netlify.com/')
  })

  // Making sure start page displays the start page
  describe('user can see the start page and it', () => {

    it('does not display the game title', () => {
      cy.get('.winner').should('not.be.visible')
    });

    it('does not display the player hand', () => {
      cy.get('.playerHand').should('not.be.visible')
    });

    it('does not display the computer hand', () => {
      cy.get('.computerHand').should('not.be.visible')
    });

    it('does not give option to click on rock- button', () => {
      cy.get('.rock').should('not.be.visible')
    });

    it('does not give option to click on paper- button', () => {
      cy.get('.paper').should('not.be.visible')
    });

    it('does not give option to click on scissors- button', () => {
      cy.get('.scissors').should('not.be.visible')
    });
  });

  // Making sure game page displays the game page
  describe('user can see the game page and it', () => {

    it('does not display the start title', () => {
      cy.get('.start').should('not.be.visible')
    });

    it('does not display the start paragraph', () => {
      cy.get('.startPage p').should('not.be.visible')
    });

    it('does not display the start button', () => {
      cy.get('.button').should('not.be.visible')
    });
  });

  // Player tries to edit score board
  describe('player tries to edit score board', () => {
    
    it('does not display the start title', () => {
      cy.get('.start').should('not.be.visible')
    });

    it('does not display the start paragraph', () => {
      cy.get('.startPage p').should('not.be.visible')
    });

    it('does not display the start button', () => {
      cy.get('.button').should('not.be.visible')
    });
  });


});

    // it('player tries to click on score board', () => {})
    // it('player tries to click on two options for player at the same time', () => {})
    // it('player tries to click on two options for rock, paper, scissors at the same time', () => {})
    // it('player tries to click on -back button mid game', () => {})
    // it('player tries to alter score board ', () => {})
    // it('player gets the right winner messages', () => {})