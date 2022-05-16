import PageObjectPost from "../../support/pageObjectPost";

const pageObject = new PageObjectPost();
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 4;

context('Testing Create Post, Publish and schedule', () => { 

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

    it('1 Test Login into', () => {
        pageObject.login();
        cy.wait(3000);
        cy.screenshot();
    })

    it('2 Test Page create post', () => {
        pageObject.goToPosts();
        cy.wait(2000); 
        cy.screenshot();
    })

    it('3 Button new post', () => {
        pageObject.selectNewPostButton();
        cy.wait(2000);
        cy.screenshot();
    })

    it('4 Test Enter Title', () => {
        pageObject.typeTitle();
        pageObject.typeContent();
        cy.wait(2000);
        cy.screenshot();
    });       

    it('5 Test Schedule Publish', () => {
        pageObject.selectPublishButton();
        cy.wait(2000);
        pageObject.selectSchedulePublish();
        cy.wait(3000);
        cy.screenshot();
    });
   
    it('6 Test Publish', () => {        
        pageObject.publishPost();
        cy.wait(3000);
        pageObject.confirmPublishPost();
        cy.wait(3000);
        cy.screenshot();
    });       

  
   

    it('7 Button Back to page', () => {
        pageObject.goToPosts();
        cy.wait(3000);
        cy.screenshot();
    })
     
})