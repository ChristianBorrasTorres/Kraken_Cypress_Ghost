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

    it('1 Test Login into', () => {
        pageObject.login();
        cy.screenshot();
    })

    it('2 Test go to page', () =>{
        cy.get('a[href*="#/pages/"]').first().click();
        cy.wait(2000);

        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
        cy.wait(3000);
        cy.screenshot();
    })
    
    it('3 Test click post-settings and delete', () => {
        cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
        cy.wait(1000)
        pageObject.deletePage();
        cy.screenshot();
    })
   
  })