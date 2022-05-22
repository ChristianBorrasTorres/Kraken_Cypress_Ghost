/// <reference types="cypress-xpath" />

import PageObjectPost from "../../support/pageObjectPost";
import {faker} from '@faker-js/faker'

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject = new PageObjectPost;
var i = 0;
var caso = 4;
var titleFake = '';

context('Testing Filter Post', () => { 

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

    it('3 Test Filter post', () => {
        //pageObject.selectFilter();
        cy.xpath('//button[@class="gh-nav-btn-search"]').first().click();
        cy.wait(2000); 
        titleFake = faker.name.jobTitle();
        cy.xpath('//input').type(titleFake);
        cy.wait(2000);
        cy.xpath('//*[text()="No results found"]');
        cy.wait(2000);
        cy.screenshot();
    });


    it('4 Return to DashBoard', () => {
        pageObject.goToDashboard();
        cy.screenshot();        
    });

    
     
})