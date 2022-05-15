class PageObjectPages {

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

    goToPage() {
        cy.get('a[href*="#/pages/"]').first().click();
        cy.wait(2000);

        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
        cy.wait(3000);
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

    goToPagesAndNewPage() {
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/editor/page/"]').click();
        //cy.get('#ember88 > span')
        cy.wait(3000);
    }

    typeTitleAndContent() {
        cy.get('textarea').first().type("Title page");
        cy.wait(2000);
        cy.get('.koenig-editor__editor').type("Hola Mundo");
        cy.wait(2000);
    }

    goBackToPages() {
        cy.get('a[href*="#/pages/"]').first().click({force: true});
        cy.wait(3000);
    }

    enterTitleContentAndPublishPage() {
        cy.get('textarea').first().type("Title page");
        cy.get('.koenig-editor__editor').type("Hola");
        cy.wait(2000);
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(2000);
        cy.get('a[href*="#/pages/"]').click();   
        cy.wait(2000);
    }

    editPage() {
        cy.get('textarea').first().clear()
        cy.get('textarea').first().type("New Title page");
        cy.wait(1000);
        cy.get('.koenig-editor__editor').clear();
        cy.get('.koenig-editor__editor').type("Hola 2");
        cy.wait(2000);
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    }

    previewAndReturn() {
        cy.get('button[class="gh-btn gh-editor-preview-trigger"]').click();
        cy.wait(2000);
        cy.get('button[class="gh-editor-back-button"]').click();
    }

}
export default PageObjectPages