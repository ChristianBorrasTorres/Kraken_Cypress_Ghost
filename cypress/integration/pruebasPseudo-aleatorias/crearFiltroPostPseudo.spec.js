/// <reference types="cypress-xpath" />

import PageObjectPost from "../../support/pageObjectPost";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPost;
var i = 0;
var caso = 4;
var titleFake = '';

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Se programa para que Faker cree los mismos datos cuando se ejecuta
faker.seed(1010);

//Se crea un data pool con 100 nombres aleatorios
const names = [];

for (let i = 0; i < 100; i++){
    names[i] = faker.random.word();
}

//Se define una variabla con un entero para sacar valores aleatorios del data pool
const name = getRandomInt(0,99);


context('Testing create filter for Post list', () => { 

    before(() => {
        cy.visit('/#/signin');
        cy.wait(3000);
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i + 1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('1 Test Login into', () => {
        pageObject.login();
        cy.wait(3000);
        cy.screenshot();
    })

    it('2 Test Page post', () => {
        pageObject.goToPosts();
        cy.wait(2000); 
        cy.screenshot();
    })

    it('3 Change filter to oldest first', () => {
        //pageObject.selectFilter();
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div/div[5]/div[1]/span').first().click();
        cy.wait(2000); 
        cy.xpath('/html/body/div[1]/div/ul/li[2]').click();
        cy.wait(2000);
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div/div[6]/button').click();
        cy.wait(2000);
        cy.xpath('//*[@id="view-name"]').type(names[name]);
        cy.wait(2000);
        cy.xpath('/html/body/div[5]/div/div/div[2]/button[2]/span').click();
        cy.screenshot();
    });


    it('4 Return to DashBoard', () => {
        pageObject.goToDashboard();
        cy.screenshot();        
    });

    
     
})