class PageObjectMembers {
    goToMembers() {
        cy.get('a[href*="#/members/"]').first().click({force: true});
    }

    login() {
        cy.get('input[name=identification]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember11"]').click();
    }

    goToNewMember() {
        cy.get('a[href*="#/members/new/"]').first().click();
    }

    selectTextfieldMemberName() {
        return cy.get('input[id="member-name"]');
    }

    selectTextfieldMemberEmail() {
        return cy.get('input[id="member-email"]');
    }
    
    saveMemberChanges() {
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    }

    goToMembers() {
        cy.get('a[href*="#/members/"]').first().click({force: true});
    }

    deleteMember() {
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('button[class="mr2"]').contains('Delete member').click()
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains('Delete member').click();
    }


    class="ember-view gh-list-data"

}
    export default PageObjectMembers