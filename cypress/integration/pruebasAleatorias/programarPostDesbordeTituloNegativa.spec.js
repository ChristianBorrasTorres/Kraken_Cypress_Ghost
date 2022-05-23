/// <reference types="cypress-xpath" />
import PageObjectPost from "../../support/pageObjectPost";
import { faker } from "@faker-js/faker";
const pageObject = new PageObjectPost();
const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";
var i = 0;
var caso = 4;
var titleFake = "";
var contentFake = "";

context("Testing Create Post, Publish and schedule", () => {
  before(() => {
    cy.visit("/#/signin");
    cy.wait(3000);
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
    i = i + 1;
  });

  after(() => {
    cy.clearCookies();
  });

  it("1 Test Login into", () => {
    pageObject.login();
    cy.wait(3000);
    cy.screenshot();
  });

  it("2 Test Page create post", () => {
    pageObject.goToPosts();
    cy.wait(2000);
    cy.screenshot();
  });

  it("3 Button new post", () => {
    pageObject.selectNewPostButton();
    cy.wait(2000);
    cy.screenshot();
  });

  it("4 Test Enter Title", () => {
    //pageObject.typeTitle();
    titleFake = faker.lorem.paragraph(80);
    cy.get("textarea").first().type(titleFake);
    //pageObject.typeContent();
    contentFake = faker.lorem.paragraph();
    cy.get(".koenig-editor__editor").type(contentFake);
    cy.wait(2000);
    cy.screenshot();
  });

  it("5 Test Schedule Publish", () => {
    cy.xpath('//div/span[text()="Publish"]').should("not.exist");
    cy.wait(2000);
    pageObject.goToPosts();
    cy.wait(2000);
    cy.xpath('//button/span[text()="Leave"]').first().click();
    cy.wait(3000);
    cy.screenshot();
  });


});
