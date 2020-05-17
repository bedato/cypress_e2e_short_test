/*
DISCLAIMER

There is much more that you can write in an cypress automated e2e test like AJAX calls, XHR request waitings and much more. 
this is a mere surface level test for basic user interactable functions which were created with Javascript 
*/
context('Surface level e2e testing for this webpage', () => {
    beforeEach(() => {
        cy.visit('http://www.vedatd.mywdd.info');
    })

    it('Checks if the Navigation links work', () => {
        cy.get('#intro > div.sideSection > nav > ul > li:nth-child(1) > a').click();
        cy.url().should('contain', '#skills');
    });

    it('Checks Tab system functionality', () => {
        cy.get('#skills > div > ul > li:nth-child(1)').should('have.class', 'active');
        cy.get('.tab-auswahl > [data-tab="tab1"]').click();
        cy.get('.tab-auswahl > [data-tab="tab1"]').should('have.class', 'active');
    });

    it('Checks gallery', () => {
        cy.get('[src="img/gallery/abandoned.jpg"]').click();
        cy.get('#moodboard > div.modal.visible').should('be.visible');
        cy.get('#moodboard > div.modal.visible > div > div.right').click();
        cy.get('#moodboard > div.modal.visible > div > img').should('have.attr', 'src').should('include', 'factory');
        cy.get('#moodboard > div.modal.visible > div > span').click();
        cy.get('#moodboard > div.modal.visible').should('not.be.visible');
    });

    it('Checks contact form when send empty', () => {
        cy.get('#submit').click();
        cy.get('#contact > div > div.form > form > div > div:nth-child(1) > span').should('be.visible')
    });

    it('Writes an invalid mailadress in', () => {
        cy.get('#email').type('thisisinvalid.com');
        cy.get('#submit').click();
        cy.get('#contact > div > div.form > form > div > div:nth-child(3) > span').should('be.visible')
    })

    it('Submits correct form', () => {
        cy.get('#firstName').type('Henry');
        cy.get('#lastName').type('Benson');
        cy.get('#email').type('Henry@benson.com');
        cy.get('#textbox').type('This is sample Text');
        cy.get('#submit').click();
        cy.get('#contact > div > div.everythingOK > h3').should('be.visible')
    })

})