import PageObjectPages from "../../support/pageObjectPages";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPages();
var i = 0;
var caso = 1;

describe('Testing Page - Create_And_Publish', () => {

    before(()=>{
        cy.visit('/#/signin')
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
        cy.screenshot();
    })

    it('2 Test go to page and new page', () =>{
        pageObject.goToPagesAndNewPage();
        cy.screenshot();
    })
    
    it('3 Test type title, content and page publish', () => {
        cy.get('textarea').first().type(faker.lorem.paragraph(100));
        cy.wait(2000);
        cy.get('.koenig-editor__editor').type(faker.lorem.paragraphs());
        cy.wait(2000);
        cy.xpath('//div/span[text()="Publish"]').should('not.exist');
    })    
   
  })

 