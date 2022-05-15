import PageObjectPages from "../../support/pageObjectPages";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPages();
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

    it('1 Test Login into', () => {
        pageObject.login();
        cy.screenshot();
    })

    it('2 Test go to page ', () => {
        pageObject.goToPages();
        cy.screenshot();
    })

    it('3 Test go to edit page ', () => {
        pageObject.goToEditPage();
        cy.screenshot();
    })

    it('4 Test type title', () => {
        pageObject.editPage();
        cy.screenshot();
    })

    it('5 Button Back to page', () => {
        pageObject.goBackToPages();
        cy.screenshot();
    })
     
    
})