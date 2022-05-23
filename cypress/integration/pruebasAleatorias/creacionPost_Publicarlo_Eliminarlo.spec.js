/// <reference types="cypress-xpath" />

import PageObjectPost from "../../support/pageObjectPost";
import {faker} from '@faker-js/faker'

const pageObject = new PageObjectPost;
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 4;
var titleFake = '';
var contentFake = '';

context('Testing Create Post and Publish', () => { 

    before(() => {
        cy.visit('/#/signin');
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
        cy.wait(3000);
        cy.screenshot();
    })

    it('2 Test Page create post', () => {
        pageObject.goToPosts();
        cy.wait(2000); 
        cy.screenshot();
    })

    it('3 Button new post', () => {
        pageObject.selectNewPostButton();
        cy.wait(2000);
        cy.screenshot();
    })

    it('4 Test Enter Title', () => {
        //pageObject.typeTitle();
        titleFake = faker.name.jobTitle();
        cy.get("textarea").first().type(titleFake);
        //pageObject.typeContent();
        contentFake = faker.lorem.paragraph();
        cy.get(".koenig-editor__editor").type(contentFake);
        cy.wait(2000);
        cy.screenshot();
    });       
   
    it('5 Test Publish', () => {     
        pageObject.selectPublishButton();   
        cy.wait(2000);
        pageObject.publishPost();
        cy.wait(3000);
        pageObject.confirmPublishPost();
        cy.wait(3000);
        cy.screenshot();
    });       
   

    it('6 Button Back to page', () => {
        pageObject.goToPosts();
        cy.screenshot();
    });

    it('7 Check post', () => {
        cy.xpath('//h3[text()="'+titleFake+'"]').first().click();
        cy.wait(3000);
        /*cy.xpath('//textarea/text()').its('0.textContent')
        .should('equal', titleFake);*/
        cy.get('p').then(($header)=>{
            expect($header[0].innerText).to.equal(contentFake);
        });
        cy.wait(2000);
        
    });

    it('8 Delete post', () => {
        cy.xpath('//button[@title="Settings"]').first().click();
        cy.wait(2000);
        cy.xpath('//button/span[text()=" Delete "]').first().click();
        cy.wait(2000);
        cy.xpath('//span[text()="Delete"]').first().click();
        cy.wait(2000);
        pageObject.goToPosts();
        cy.screenshot();
    });

    it.only('9 Check post deleted', () => {
        cy.xpath('//h3[text()="'+titleFake+'"]').should('not.exist');
        cy.wait(2000);
        
    });




     
})
