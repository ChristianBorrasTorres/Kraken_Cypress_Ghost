const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 3;

context('Testing Edit Page', () => { 
    
    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000)
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

    it('Test go to page ', () => {
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
    })

    it('Test go to edit page ', () => {
        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
        cy.wait(2000);
    })

    it('Test type title', () => {
        cy.get('textarea').first().clear()
        cy.get('textarea').first().type("New Title page");
        cy.get('.koenig-editor__editor').clear();
        cy.get('.koenig-editor__editor').type("Hola 2");
        cy.wait(2000);
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    })
   

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
    })
     
    
})