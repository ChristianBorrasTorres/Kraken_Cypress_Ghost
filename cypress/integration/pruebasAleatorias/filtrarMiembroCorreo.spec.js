import PageObjectMembers from "../../support/pageObjectMembers";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectMembers();
const memberMail = faker.internet.email();
var i = 0;
var caso = 1;

describe('Test to filter member by name', () => {

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
        pageObject.selectTextfieldMemberName().type(faker.name.firstName(), { force: true });
        cy.wait(2000);  
        cy.screenshot();
    })

    it('4 Test type Member E-Mail', () => {
        pageObject.selectTextfieldMemberEmail().type(memberMail);
        cy.wait(2000);
        pageObject.saveMemberChanges();
        cy.wait(2000);        
        cy.screenshot();
    })

    it('5 Button Back to Members', () => {
        pageObject.goToMembers();
        cy.wait(2000);
        cy.screenshot();
    })

    it('6 Filter member by e-mail', () => {
        pageObject.clickFilter()
        cy.wait(1000);
        cy.xpath('//select').first().select('Email');
        cy.wait(1000);
        cy.xpath('//input[@class="gh-input"]').type(memberMail);
        cy.get('button[class="gh-btn gh-btn-primary"]').click();
        cy.wait(500);
        cy.screenshot();
    })


})