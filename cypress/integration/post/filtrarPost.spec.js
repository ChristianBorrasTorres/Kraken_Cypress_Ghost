import PageObjectPost from "../../support/pageObjectPost";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPost;
var i = 0;
var caso = 4;

context('Testing Create Post and Publish', () => { 

    before(() => {
        cy.visit('/#/signin');
        cy.wait(3000);
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i + 1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('1 Test Login into', () => {
        pageObject.login();
        cy.wait(3000);
        cy.screenshot();
    })

    it('2 Test Page post', () => {
        pageObject.goToPosts();
        cy.wait(2000); 
        cy.screenshot();
    })

    it('3 Test Filter post', () => {
        pageObject.selectFilter();
        cy.wait(2000); 
        pageObject.filterByPublished();
        cy.wait(2000);
        cy.screenshot();
    });


    it('4 Return to DashBoard', () => {
        pageObject.goToDashboard();
        cy.screenshot();        
    });

    
     
})