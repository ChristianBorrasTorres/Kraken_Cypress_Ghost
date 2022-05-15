import PageObjectTags from "../../support/pageObjectTags";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectTags();
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

    it('1 Test Login', () => {
        pageObject.login();
        cy.wait(2000);
        cy.screenshot();
    })

    
    it('2 Test go to tag and new tag', () =>{
        pageObject.goToTags();
        cy.wait(2000);
        pageObject.goToNewTag();
        cy.wait(2000);
        cy.screenshot();
    })

    it('3 Test type tag title', () => {
        pageObject.selectTextfieldTagName().type("TagAdd");
        cy.wait(2000);
        pageObject.saveTagChanges();        
        cy.screenshot();
    })

    it('4 Button Back to tags', () => {
        pageObject.goToTags();
        cy.wait(2000);
        cy.screenshot();
    })

    it('5 Test Page create post', () => {
        pageObject.goToPosts();
        cy.wait(2000);
        cy.screenshot();
    })

    it('6 Button new post', () => {
        pageObject.clickNewPost();
        cy.wait(2000);
        cy.screenshot();
    })

    it('7 Test Enter Title', () => {
        pageObject.selectPostTitle().type("Post (add Tag)");
        pageObject.selectPostBody().type("Hola Mundo");
        cy.wait(2000);
        cy.screenshot();
    });       
   
    it('8 Test Publish Post', () => {        
        pageObject.publishPost();
        cy.screenshot();
    });     

    it('9 Test go to settings and add tag', () => {
        pageObject.selectPostSettings();
        cy.wait(3000);
        pageObject.selectTagOptions().contains('TagAdd').click();
        cy.screenshot();
    })

    it('10 Button update changes', () => {
        pageObject.selectPostSettings();
        pageObject.updatePost();
        cy.screenshot();
    })

    it('11 Test go to settings and check', () => {
        pageObject.selectPostSettings();
        cy.wait(3000);
        cy.screenshot();
    })

})