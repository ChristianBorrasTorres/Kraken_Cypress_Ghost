// filtrarPost.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 4;

context('Testing Create Post and Publish', () => { 

    before(() => {
        cy.visit('/#/signin');
        cy.wait(3000);
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i +1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('Test Login into', () => {
        cy.get('input[name=identification]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember11"]').click();
        cy.wait(3000);
    })

    it('Test Page post', () => {
        cy.get('a[href*="#/post"]').first().click({force: true});
        cy.wait(2000); 
    })

    it('Test Filter post', () => {
        cy.get('.gh-contentfilter-type > .ember-view').first().click({force: true}); 
        cy.wait(2000); 
        cy.get('[data-option-index="2"]').click({force: true}); 
        
    });

    
     
})