const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Test to add Tag to Post', () => {

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
        cy.wait(2000);
    })

    
    it('Test go to tag and new tag', () =>{
        cy.get('a[href*="#/tags/"]').click();
        cy.wait(2000);
        cy.get('a[href*="#/tags/new"]').first().click();
        cy.wait(2000);
    })

    it('Test type tag title', () => {
        cy.get('input[id="tag-name"]').type("TagAdd");
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    })

    it('Button Back to tags', () => {
        cy.get('a[href*="#/tags/"]').first().click({force: true})
        cy.wait(2000);
    })

    it('Test Page create post', () => {
        cy.get('a[href*="#/posts/"]').first().click({force: true});
        cy.wait(2000); 
    })

    it('Button new post', () => {
        cy.get('a[href*="#/editor/post"]').first().click({force: true});
        cy.wait(2000);
    })

    it('Test Enter Title', () => {
        cy.get('textarea').first().type("Post (add Tag)");
        cy.get('.koenig-editor__editor').type("Hola Mundo");
        cy.wait(2000);
    });       
   
    it('Test Publish', () => {        
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
        cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    });     

    it('Test go to settings and add tag', () => {
        cy.get('button[title="Settings"]').click();
        cy.wait(3000);
        cy.get('[id="tag-input"]').click();
        cy.get('[class="ember-power-select-option"]').contains('TagAdd').click();
    })

    it('Button update changes', () => {
        cy.get('button[title="Settings"]').click();
        cy.get('[class="gh-publishmenu ember-view"]').click();
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    })

})