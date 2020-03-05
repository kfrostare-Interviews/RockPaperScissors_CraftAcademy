describe('User chooses to go with the Sad Path', () => {
  beforeEach(() => {
    cy.visit('https://kfrostare-rpscraftacademy.netlify.com/')
  })

  // Making sure start page displays the start page
  describe('user can see the start page and it', () => {

    // cypress reads all feilds (fadeOuts) as visible...
    it('does not need to display game title', () => {
      cy.get('.winner').not('.required')
    });

    it('does not need to display player hand', () => {
      cy.get('.playerHand').not('.required')
    });

    it('does not need to display computer hand', () => {
      cy.get('.computerHand').not('.required')
    });

    it('does not need to display rock- button', () => {
      cy.get('.rock').not('.required')
    });

    it('does not need to display paper- button', () => {
      cy.get('.paper').not('.required')
    });

    it('does not need to display scissors- button', () => {
      cy.get('.scissors').not('.required')
    });
  });

  // Making sure game page displays the game page
  describe('user can see the game page and it', () => {

    it('does not display the start title', () => {
      cy.get('.start').not('.required')
    });

    it('does not display the start paragraph', () => {
      cy.get('.startPage p').not('.required')
    });

    it('does not display the start button', () => {
      cy.get('.button').not('.required')
    });
  });

  // Player tries to double click button
  describe('player tries to double click the play button and', () => {
    
    it('game starts despite double click', () => {
      cy.get('.button').dblclick()
      cy.get('.winner').should('contain', 'Make your move')
    });
  });

  describe('player tries to double click on an options button and', () => {
    beforeEach(() => {
      cy.get('.button').contains('Bring it on').click()
    });
    
    it('game starts despite double click', () => {
        cy.get('.rock').dblclick()
        cy.get('.winner').should('not.contain', 'Make your move')
    });
  });
});