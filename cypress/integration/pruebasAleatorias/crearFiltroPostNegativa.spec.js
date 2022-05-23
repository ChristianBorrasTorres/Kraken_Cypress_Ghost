/// <reference types="cypress-xpath" />

import PageObjectPost from "../../support/pageObjectPost";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPost;
var i = 0;
var caso = 4;
var titleFake = '';

context('Testing create post filter with too many characters', () => { 

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

    it('3 Change filter to recently updated first', () => {

        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div/div[5]/div[1]/span').first().click();
        cy.wait(2000); 
        cy.xpath('/html/body/div[1]/div/ul/li[3]').click();
        cy.wait(2000);
    });

    it('4 Type filter name with at least 44 characters and try to click new post', () => {
    cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div/div[6]/button').click();
    cy.wait(2000);
    cy.xpath('//*[@id="view-name"]').type(faker.random.numeric(44));
    cy.wait(2000);
    cy.xpath('/html/body/div[5]/div/div/div[2]/button[2]/span').click();
    cy.screenshot();
    /*cy.xpath('/html/body/div[2]/div/main/section/div/header/section/a/span').click();*/
    });

     
})