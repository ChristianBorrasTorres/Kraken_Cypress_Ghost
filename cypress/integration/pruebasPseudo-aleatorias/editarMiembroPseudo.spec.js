import PageObjectMembers from "../../support/pageObjectMembers";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectMembers();
var i = 0;
var caso = 1;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Se programa para que Faker cree los mismos datos cuando se ejecuta
faker.seed(1002);

//Se crea un data pool con 100 nombres, correos, y paragrafos aleatorios
const names = [];
const mails = [];
const paragraphs = [];

for (let i = 0; i < 100; i++){
    names[i] = faker.name.firstName();
    mails[i] = faker.internet.email();
    paragraphs[i] = faker.lorem.paragraph();
}

//Se definen dos variables con enteros para sacar valores aleatorios del data pool
const name = getRandomInt(0,99);
const mail = getRandomInt(0,99);
const paragraph = getRandomInt(0,99);

describe('Test to edit member', () => {

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
        pageObject.selectTextfieldMemberName().type(names[name], { force: true });
        cy.wait(2000);  
        cy.screenshot();
    })

    it('4 Test type Member E-Mail', () => {
        pageObject.selectTextfieldMemberEmail().type(mails[mail]);
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

    it('6 Select member again', () => {
        cy.get('a[class="ember-view gh-list-data"]').contains(names[name]).click();
        cy.wait(2000);
        cy.screenshot();
    })

    it(' Edit member name and add note', () => {
        pageObject.selectTextfieldMemberName().clear({ force: true });
        pageObject.selectTextfieldMemberName().type(names[name+1], { force: true });
        cy.wait(2000);
        pageObject.editarNote().type(paragraphs[paragraph]);
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

})