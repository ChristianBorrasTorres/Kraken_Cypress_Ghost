class PageObjectPagesV410 {

    login() {
        cy.get('input[name=identification]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember11"]').click();
    }

    goToPages() {
        cy.get('a[href*="#/pages/"]').first().click();
        cy.wait(2000);
    }

    goToEditPage() {
        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
    }

    goToPageSettings() {
        cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon only-has-icon gh-actions-cog"]').click();
        cy.wait(1000)
    }

    deletePage() {
        cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    }
}
export default PageObjectPagesV410