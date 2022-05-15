class PageObjectTagsV410 {
    goToTags() {
        cy.get('a[href*="#/tags/"]').first().click({force: true});
    }

    login() {
        cy.get('input[name=identification]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember11"]').click();
    }

    goToNewTag() {
        cy.get('a[href*="#/tags/new"]').first().click();
    }

    selectTextfieldTagName() {
        return cy.get('input[id="tag-name"]');
    }

    saveTagChanges() {
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    }

    goToPosts() {
        cy.get('a[href*="#/posts/"]').first().click({force: true});
    }

    clickNewPost() {
        cy.get('a[href*="#/editor/post"]').first().click({force: true});
    }

    selectPostTitle() {
        return cy.get('textarea').first();
    }

    selectPostBody() {
        return cy.get('.koenig-editor__editor');
    }

    publishPost () {
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    }

    selectPostSettings() {
        cy.get('button[title="Settings"]').click();
    }

    selectTagOptions() {
        cy.get('[id="tag-input"]').click();
        return cy.get('[class="ember-power-select-option"]')
    }

    updatePost() {
        cy.get('[class="gh-publishmenu ember-view"]').click();
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    }

    editTagNameAndDescription() {
        cy.get('input[id="tag-name"]').type('Updated');
        cy.wait(1000);
        cy.get('textarea[id="tag-description"]').type('Description');
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    }

    getTagList() {
        return cy.get('[class="gh-list-row gh-tags-list-item"]');
    }

    deleteTag() {
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').click();
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(3000);
    }

    selectAddedTag() {
        cy.get('[id="tag-input"]').click();
        cy.wait(1000);
        return cy.get('[class="ember-power-select-multiple-option tag-token js-draggableObject draggable-object ember-view"]').click();
    }

    removeSelectedTag() {
        cy.get('[class="ember-power-select-multiple-remove-btn"]').first().click();
        cy.wait(1000);
    }
    }
    export default PageObjectTagsV410