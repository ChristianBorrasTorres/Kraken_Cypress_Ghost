import PageObjectMembers from "../../support/pageObjectMembers";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectMembers();
var memberName = faker.random.numeric(190);
var i = 0;
var caso = 1;

describe('Test to create member with very long name (191 characters)', () => {

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

    
    it('2 Test go to members and new member', () =>{
        pageObject.goToMembers();
        cy.wait(2000);
        pageObject.goToNewMember();
        cy.wait(2000);
        cy.screenshot();
    })

    it('3 Test type Member name', () => {
        pageObject.selectTextfieldMemberName().type(memberName, { force: true });
        cy.wait(2000);  
        cy.screenshot();
    })

    it('4 Test type Member E-Mail', () => {
        pageObject.selectTextfieldMemberEmail().type(faker.internet.email());
        cy.wait(2000);
        pageObject.saveMemberChanges();
        cy.wait(2000);        
        cy.screenshot();
    })

    it('6 Button Back to Members', () => {
        pageObject.goToMembers();
        cy.wait(2000);
        cy.screenshot();
    })

    it('7 Select member again', () => {
        cy.get('a[class="ember-view gh-list-data"]').first().click({ force: true });
        cy.wait(2000);
        cy.screenshot();
    })

    /it('8 Test type Member name', () => {
        pageObject.selectTextfieldMemberName().type("1" , { force: true });
        cy.wait(2000);  
        cy.screenshot();
    })

})