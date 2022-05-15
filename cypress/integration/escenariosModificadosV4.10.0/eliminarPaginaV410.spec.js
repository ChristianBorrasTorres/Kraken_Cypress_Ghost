import PageObjectPagesV410 from "../../support/pageObjectPagesV410";

const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const pageObject=new PageObjectPagesV410();
var i = 0;
var caso = 2;
describe('Testing delete Page', () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(3000);
     })

     beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i +1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('1 Test Login', () => {
        pageObject.login();
        cy.wait(2000);
        cy.screenshot();
    })

    it('Test go to page', () =>{
        pageObject.goToPages();
        pageObject.goToEditPage();
        cy.wait(3000);
    })
    
    it('Test click page-settings and delete', () => {
        pageObject.goToPageSettings();
        pageObject.deletePage();
    })
   
  })