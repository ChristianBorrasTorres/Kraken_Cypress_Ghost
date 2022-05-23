import PageObjectPost from "../../support/pageObjectPost";
import { faker } from "@faker-js/faker";

const pageObject = new PageObjectPost();
const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";
var i = 0;
var caso = 4;
var titleFake = "";
var contentFake = "";

context("Testing Preview Post", () => {
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

  it("4 Test Preview post", () => {
    cy.get("section.flex > :nth-child(1) > .gh-btn > span").should('not.exist');
    cy.wait(3000);
    cy.screenshot();
  });

  it('5 Delete post', () => {
    cy.xpath('//button[@title="Settings"]').first().click();
    cy.wait(2000);
    cy.xpath('//button/span[text()=" Delete "]').should('not.exist');
    cy.wait(2000);
    cy.screenshot();
});

  

  it("6 Back to Post", () => {
    cy.xpath('//a/span[text()="Posts"]').click();
    cy.wait(2000);
    cy.screenshot();
  });
});
