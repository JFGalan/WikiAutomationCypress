describe('Automation', () => {

    it('Visits Google, searches for "automatización" and checks Wikipedia link', () => {

        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();

        cy.get('.SDkEP').type('automatización{enter}');

        cy.get('a[href^="https://es.wikipedia.org"]').should('exist');

        cy.get('a[href^="https://es.wikipedia.org"]').first().click();

        cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', () => {

            cy.url().should('include', 'wikipedia.org');

            cy.contains('Automatización').click();

            cy.get('#Historia').click();
            cy.screenshot({clip: {x: 20, y: 3800, width: 1920, height: 720}});

        });
    });
});