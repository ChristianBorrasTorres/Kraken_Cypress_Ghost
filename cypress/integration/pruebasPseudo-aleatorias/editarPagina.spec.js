import PageObjectPages from "../../support/pageObjectPages";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPages();
var i = 0;
var caso = 3;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Se programa para que Faker cree los mismos datos cuando se ejecuta
faker.seed(1000);

//Se crea un data pool con 10 titulos y contenidos aleatorios
const titles = [];
const contents = [];

for (let i = 0; i < 100; i++){
    titles[i] = faker.lorem.word();
    contents[i] = faker.lorem.words();
}

//Se definen dos variables con enteros para sacar valores aleatorios del data pool
const title = getRandomInt(0,99);
const content = getRandomInt(0,99);

context('Testing Edit Page', () => { 
    
    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000)
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

    it('2 Test go to page ', () => {
        pageObject.goToPages();
        cy.screenshot();
    })

    it('3 Test go to edit page ', () => {
        pageObject.goToEditPage();
        cy.screenshot();
    })

    it('4 Test type title', () => {
        cy.get('textarea').first().clear()
        cy.get('textarea').first().type(titles[title]);
        cy.wait(1000);
        cy.get('.koenig-editor__editor').clear();
        cy.get('.koenig-editor__editor').type(contents[content]);
        cy.wait(2000);
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
        cy.screenshot();
    })

    it('5 Button Back to page', () => {
        pageObject.goBackToPages();
        cy.screenshot();
    })
     
    
})