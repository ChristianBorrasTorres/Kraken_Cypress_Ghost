import PageObjectPost from "../../support/pageObjectPost";

const pageObject = new PageObjectPost();
const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";
var i = 0;
var caso = 4;

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

  it("4 Test Enter Title", () => {
    pageObject.typeTitle();
    pageObject.typeContent();
    cy.wait(2000);
    cy.screenshot();
  });

  it("5 Test Preview post", () => {
    pageObject.selectPreviewButton();
    //cy.get('div.button[class="gn-btn gh-editor-preview-trigger"]').click();
    cy.wait(5000);
    pageObject.backNewPost();
    cy.screenshot();
  });

  it("6 Back to Post", () => {
    pageObject.goToPosts();
    cy.wait(2000);
    cy.screenshot();
  });
});
