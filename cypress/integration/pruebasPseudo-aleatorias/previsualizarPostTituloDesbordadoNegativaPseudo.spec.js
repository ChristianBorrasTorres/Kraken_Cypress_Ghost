import PageObjectPost from "../../support/pageObjectPost";
import { faker } from "@faker-js/faker";

const pageObject = new PageObjectPost();
const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";
var i = 0;
var caso = 4;


// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Se programa para que Faker cree los mismos datos cuando se ejecuta
faker.seed(1011);

//Se crea un data pool con 100 titulos y paragrafos aleatorios
const titles = [];
const paragraphs = [];

for (let i = 0; i < 100; i++){
  titles[i] = faker.lorem.paragraph(80);
  paragraphs[i] = faker.lorem.paragraph();
}

//Se definen dos variables con enteros para sacar valores aleatorios del data pool
const title = getRandomInt(0,99);
const paragraph = getRandomInt(0,99);

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
    cy.get("textarea").first().type(titles[title]);
    cy.wait(2000);
    cy.get(".koenig-editor__editor").type(paragraphs[paragraph]);
    cy.wait(2000);
    cy.screenshot();
  });

  it("5 Test Preview post", () => {
    cy.get("section.flex > :nth-child(1) > .gh-btn > span").should('not.exist');
    cy.wait(2000);
    
    //cy.get(".gh-btn-red > span").first().click();
    
  });

  it("6 Back to Post", () => {
    pageObject.goToPosts();
    cy.wait(2000);
    cy.xpath('//button/span[text()="Leave"]').first().click();
    cy.wait(2000);
    cy.screenshot();
  });
});
