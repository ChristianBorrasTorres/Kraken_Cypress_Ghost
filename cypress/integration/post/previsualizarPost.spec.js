// previsualizarPost.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 4;

context('Testing Preview Post', () => { 

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

    it('Test Page create post', () => {
        cy.get('a[href*="#/post"]').first().click({force: true});
        cy.wait(2000); 
    })

    it('Button new post', () => {
        cy.get('a[href*="#/editor/post"]').first().click({force: true});
        cy.wait(2000);
    })

    it('Test Enter Title', () => {
        cy.get('textarea').first().type("New Title post");
        cy.get('.koenig-editor__editor').type("Hola Mundo");
        cy.wait(2000);
    });       

    it('Test Preview post', () => {
        cy.get('section.flex > :nth-child(1) > .gh-btn > span').click();
        //cy.get('div.button[class="gn-btn gh-editor-preview-trigger"]').click();
        cy.wait(5000);
        cy.get('button[class="gh-editor-back-button"]').click();

    });


    

})