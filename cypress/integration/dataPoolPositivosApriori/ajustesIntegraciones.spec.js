import MOCK_DATA from './schemas_mockaroo/settingsIntegrationsPositivo.json'
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
import PageObjectPages from '../../support/pageObjectPages';

const pageObject = new PageObjectPages();
for( let index in MOCK_DATA){

describe(`Testing Settings Integration DataPoolApriori Positive Scenarios ${index}`, () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(4000);
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
        cy.wait(9000);
    })
    
    it('2 Test go to settings integration', () =>{
        cy.xpath('//a[@href="#/settings/"]').click();
        cy.wait(2000);
    })
    
    it('3 Test click add integration', () => {
        cy.xpath('//a[@href="#/settings/integrations/"]').click();
        cy.wait(500);
        cy.xpath('//a[@href="#/settings/integrations/new/"]').click();
        cy.wait(500);
        cy.xpath('//input[@id="new-integration-name"]').type(MOCK_DATA[index].NameNewCustomIntegration,{force: true});
        cy.wait(500);
        cy.xpath('//span[text()="Create"]').click();
        cy.wait(14000);
        cy.xpath('//input[@id="integration_description"]').click().type(MOCK_DATA[index].DescriptionNewCustomIntegration,{force: true});
        cy.wait(500);
        cy.xpath('//span[text()="Save"]').click();
        cy.wait(500);
    })

    it('4 Test click add webhook', () => {
        cy.xpath('//a[@class="ember-view flex items-center"]').click();
        cy.wait(800);
        cy.xpath('//input[@id="webhook-name"]').click().type(MOCK_DATA[index].NameNewwebhook,{force: true});
        cy.wait(500);
        cy.xpath('//select[@id="webhook-event"]').select('post.added', {force: true});
        cy.wait(500);
        cy.xpath('//input[@id="webhook-targetUrl"]').type(MOCK_DATA[index].URL,{force: true});
        cy.wait(500);
        cy.xpath('//span[text()="Create"]').click({force: true});
        cy.wait(5000);
        cy.xpath('//span[text()="Save"]').click();
        cy.wait(5000);
    })
    
    
    it('5 Button Back to site', () => {
        cy.xpath('//a[@href="#/site/"]').first().click({force: true})
        cy.xpath('//a[@href="#/site/"]').first().click({force: true})
        cy.wait(3000);
    })
    
    it('6 Test go to settings integration for delete and save', () =>{
        cy.xpath('//a[@href="#/settings/"]').click();
        cy.wait(2000);
        cy.xpath('//a[@href="#/settings/integrations/"]').click();
        cy.wait(200);
        cy.xpath('//figure[@class="apps-card-app-icon flex items-center"]').first().click({force: true});
        cy.wait(700);
        cy.xpath('//span[text()=" Delete integration "]').click();
        cy.wait(2000);
        cy.xpath('//button[@class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.xpath('//a[@href="#/site/"]').first().click({force: true})
        cy.xpath('//a[@href="#/site/"]').first().click({force: true})
        cy.wait(3000);
    })
})
}