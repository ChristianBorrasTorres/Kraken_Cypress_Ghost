import PageObjectTags from "../../support/pageObjectTags";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectTags();
const tagName = faker.random.word();
const tagDescription = faker.random.numeric(501);
var i = 0;
var caso = 1;

describe('Test to edit Tag adding Note with more than the max of characters (500)', () => {

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
        pageObject.selectTextfieldTagName().type(tagName);
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
        pageObject.getTagList().contains(tagName).click();
        cy.wait(2000);
        cy.get('input[id="tag-name"]').type(faker.random.word());
        cy.wait(1000);
        cy.get('textarea[id="tag-description"]').type(tagDescription);
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.screenshot();
    })

    it('5 Responds with Retry button', () => {
        cy.xpath('//span[text()="Retry"]').click();
          
        cy.wait(2000);
        cy.screenshot();
    })
})