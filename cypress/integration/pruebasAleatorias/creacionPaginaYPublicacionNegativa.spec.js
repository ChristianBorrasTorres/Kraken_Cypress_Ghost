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
        cy.get('.koenig-editor__editor').type(faker.lorem.paragraphs());
        cy.get('textarea').first().type(faker.random.words(90));
        cy.wait(2000);
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.xpath('/html/body/div[2]/aside/article/div').should('exist');
        cy.screenshot();
    })    
   
  })

 