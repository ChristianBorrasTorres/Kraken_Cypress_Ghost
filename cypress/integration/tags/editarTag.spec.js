import PageObjectTags from "../../support/pageObjectTags";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectTags();
var i = 0;
var caso = 1;

describe('Test to edit Tag', () => {

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
        pageObject.selectTextfieldTagName().type("TagEdit");
        cy.wait(3000);
        pageObject.saveTagChanges();
        cy.screenshot();
    })

    it('4 Button Back to tags', () => {
        pageObject.goToTags();
        cy.wait(2000);
        cy.screenshot();
    })

    it('5 Test edit tag', () => {
        pageObject.getTagList().contains('TagEdit').click();
        cy.wait(2000);
        pageObject.editTagNameAndDescription();
        cy.wait(2000);
        cy.screenshot();
    })

    it('6 Button Back to tags', () => {
        pageObject.goToTags();
        cy.wait(2000);
        cy.screenshot();
    })
})