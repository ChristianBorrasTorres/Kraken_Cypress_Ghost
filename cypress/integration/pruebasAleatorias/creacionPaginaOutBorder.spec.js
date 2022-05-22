import PageObjectPages from "../../support/pageObjectPages";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPages();
var i = 0;
var caso = 1;

describe('Test to create Page', () => {

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

    it('2 Test go to page and new page', () =>{
        pageObject.goToPagesAndNewPage();
        cy.screenshot();
    })
    
    it('3 Test type title and content', () => {
        cy.get('textarea').first().type(faker.lorem.paragraphs());
        cy.wait(30000);
        cy.get('.koenig-editor__editor').type(faker.random.word());
        cy.wait(2000);
        cy.screenshot();
    })

    it('4 Button Back to page', () => {
        pageObject.goBackToPages();
        cy.screenshot();
    })
   
  })