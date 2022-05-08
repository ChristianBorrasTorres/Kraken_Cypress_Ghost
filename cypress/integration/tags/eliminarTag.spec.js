const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Test to eliminate Tag', () => {

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

    it('Test go to tag and new tag', () =>{
        cy.get('a[href*="#/tags/"]').click();
        cy.wait(2000);
        cy.get('a[href*="#/tags/new"]').first().click();
        cy.wait(2000);
    })

    it('Test type tag title', () => {
        cy.get('input[id="tag-name"]').type("TagEliminate");
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    })

    it('Button Back to tags', () => {
        cy.get('a[href*="#/tags/"]').first().click({force: true})
        cy.wait(2000);
    })

    it('Test go to tag', () =>{
        cy.get('[class="gh-list-row gh-tags-list-item"]').contains('TagEliminate').click();
        cy.wait(3000);
    })

    it('Test delete tag', () => {
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').click();
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    })

    it('Button Back to tags', () => {
        cy.get('a[href*="#/tags/"]').first().click({force: true})
        cy.wait(3000);
    })

    it('Got to tag', () => {
        cy.get('a[href*="#/tags/"]').first().click({force: true})
        cy.wait(3000);
    })


})