import PageObjectTags from "../../support/pageObjectTags";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectTags();
const tagName = faker.random.word();
var i = 0;
var caso = 1;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Se programa para que Faker cree los mismos datos cuando se ejecuta
faker.seed(1006);

//Se crea un data pool con 100 nombres aleatorios
const names = [];

for (let i = 0; i < 100; i++){
    names[i] = faker.random.word();
}

//Se define una variabla con un entero para sacar valores aleatorios del data pool
const name = getRandomInt(0,99);


describe('Test to eliminate Tag', () => {

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
        pageObject.selectTextfieldTagName().type(names[name]);
        cy.wait(2000);
        pageObject.saveTagChanges();
        cy.screenshot();
    })

    it('4 Button Back to tags', () => {
        pageObject.goToTags();
        cy.wait(2000);
        cy.screenshot();
    })

    it('5 Test go to tag', () =>{
        pageObject.getTagList().contains(names[name]).click();
        cy.wait(3000);
        cy.screenshot();
    })

    it('6 Test delete tag', () => {
        pageObject.deleteTag();
        cy.screenshot();
    })

    it('7 Button Back to tags', () => {
        pageObject.goToTags();
        cy.wait(2000);
        cy.screenshot();
    })

})