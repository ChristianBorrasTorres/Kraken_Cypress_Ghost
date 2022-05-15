class PageObjectPost {
  login() {
    cy.get("input[name=identification]").type(Cypress.config("user"));
    cy.get('input[name="password"]').type(Cypress.config("password"));
    cy.get('[id="ember11"]').click();
  }
  goToPosts() {
    cy.get('a[href*="#/post"]').first().click({ force: true });
  }
  selectFilter() {
    cy.get(".gh-contentfilter-type > .ember-view")
      .first()
      .click({ force: true });
  }
  filterByPublished() {
    cy.get('[data-option-index="2"]').click({ force: true });
  }
  goToDashboard() {
    cy.get('a[href*="#/dashboard"]').first().click({ force: true });
  }
  selectNewPostButton() {
    cy.get('a[href*="#/editor/post"]').first().click({ force: true });
  }
  typeTitle() {
    cy.get("textarea").first().type("New Title post");
  }
  typeContent() {
    cy.get(".koenig-editor__editor").type("Hola Mundo");
  }
  selectPublishButton() {
    cy.get('div[role="button"]').first().click({ force: true });
  }
  publishPost() {
    cy.get(
      'button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]'
    ).click();
  }
  confirmPublishPost() {
    cy.get(
      'button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'
    ).click();
  }

  selectPreviewButton() {
    cy.get("section.flex > :nth-child(1) > .gh-btn > span").click();
  }
  backNewPost() {
    cy.get('button[class="gh-editor-back-button"]').click();
  }
  selectSchedulePublish(){
    cy.get(':nth-child(2) > .gh-publishmenu-radio-content > .gh-publishmenu-radio-label').click();
  }
}
export default PageObjectPost;
