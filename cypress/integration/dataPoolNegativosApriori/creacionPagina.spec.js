import MOCK_DATA from './schemas_mockaroo/pageCreateNegative.json'
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
import PageObjectPages from '../../support/pageObjectPages';

const pageObject = new PageObjectPages();
var i = 0;
let titles = MOCK_DATA;

for( let index in titles) {

describe(`Test create page with a datapool A priori Negative Scenarios ${index}`, () => {

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
        cy.wait(9000);
    })

    it('2 Test go to page and new page', () =>{
        pageObject.goToPagesAndNewPage();
    })

    it('3 Test type title and content', () =>{
        cy.get('textarea').first().type(titles[index].title);
        cy.wait(7000);
    })

    it('4 Button Back to page', () => {
        pageObject.goBackToPages();
    })

    it('5 Button Back to page', () => {
        pageObject.goBackToPages();
    })

    it('6 Assert if the page was create', () => {
        expect(cy.contains(titles[index].title), `La página con el título ${titles[index].title} no se creo exitosamente`).to.exist;
        cy.wait(1000);
    })

})
}

