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

  it("4 Test Enter Title and Content", () => {
    //pageObject.typeTitle();
    titleFake = faker.name.jobTitle();
    cy.get("textarea").first().type(titleFake);
    //pageObject.typeContent();
    contentFake = faker.lorem.paragraph();
    cy.get(".koenig-editor__editor").type(contentFake);
    cy.wait(2000);
    cy.screenshot();
  });

  it("5 Test Preview post", () => {
    pageObject.selectPreviewButton();
    cy.wait(3000);
    pageObject.backNewPost();
    cy.screenshot();
  });

  it("6 Back to Post", () => {
    pageObject.goToPosts();
    cy.wait(2000);
    cy.screenshot();
  });
});
