// creacionPagina.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Test to create Page', () => {

    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000);
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i + 1;
    })

    after(() => {
        cy.clearCookies();
    })

    it('Test Login into', () => {
        cy.get('input[name=identification]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember11"]').click();
        cy.wait(3000);
    })

    it('Test go to page and new page', () =>{
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').click();
        //cy.get('#ember88 > span')
        cy.wait(3000);
        
    })
    
    it('Test type title and content', () => {
        cy.get('textarea').first().type("Title page");
        cy.wait(2000);
    })

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.wait(3000);
    })
   
  })