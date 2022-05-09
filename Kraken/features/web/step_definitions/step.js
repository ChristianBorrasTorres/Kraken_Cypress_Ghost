const { Given, When, Then } = require('@cucumber/cucumber');

When('I navegate to page {kraken-string}', async function (page) {

    return await this.driver.url(page);

});


When('I enter email {kraken-string}', async function (email) {

    let element = await this.driver.$('.email');

    return await element.setValue(email);

});

Then('I enter password {kraken-string}', async function (password) {

    let element = await this.driver.$('.password');

    return await element.setValue(password);

});


Then('I click on the login button', async function() {

    let element = await this.driver.$('.login');

    return await element.click();

});

Then('I click on pages', async function () {

    let element = await this.driver.$('a[href="#/pages/"]');

    return await element.click();

});

Then("I click on new page", async function () {

    let element = await this.driver.$("//a[@href='#/editor/page/']")

    return await element.click();

  });

  
Then('I enter a page title {kraken-string}', async function (pageTitle) {

    let element = await this.driver.$('.gh-editor-title');

    return await element.setValue(pageTitle);

  });


Then("I click on 'Begin writing your page ...'", async function () {

    let element = await this.driver.$(".koenig-editor")

    return await element.click();

  });

Then('I enter a page content {kraken-string}', async function (pageContent) {

    let element = await this.driver.$('.koenig-editor');

    return await element.setValue(pageContent);

  });

  Then("I click on preview button", async function () {

    let element = await this.driver.$('.gh-editor-preview-trigger')

    return await element.click();

  });

  Then("I click on back button", async function () {

    let element = await this.driver.$('.gh-editor-back-button')

    return await element.click();

  });
  

Then("I click on pages to return", async function () {

    let element = await this.driver.$(".gh-editor-back-button")

    return await element.click();

  });

Then("I click on publish button", async function () {

    let element = await this.driver.$(".gh-publishmenu")

    return await element.click();

  });

Then("I click on publish", async function () {

    let element = await this.driver.$(".gh-publishmenu-button")

    return await element.click();

  });

Then("I click on the user button", async function () {

    let element = await this.driver.$('div[role="button"]')

    return await element.click();

  });

Then("I click on sign out", async function () {

    let element = await this.driver.$('a[href="#/signout/"]')

    return await element.click();

  });

  Then("I click on an existing page", async function () {

    let element = await this.driver.$('.gh-post-list-title')

    return await element.click();

  });

  Then("I click on settings menu", async function () {

    let element = await this.driver.$('.settings-menu-toggle')

    return await element.click();

  });

  Then("I click on delete", async function () {

    let element = await this.driver.$('.gh-btn-hover-red')

    return await element.click();

  });

  Then("I click on delete again", async function () {

    let element = await this.driver.$('.gh-btn-red')

    return await element.click();

  });

Then("I click on post", async function () {

    let element = await this.driver.$('a[href="#/posts/"]')

    return await element.click();

  });

Then("I click on new post", async function () {

    let element = await this.driver.$('a[href="#/editor/post/"]')

    return await element.click();

  });

Then('I enter a post title {kraken-string}', async function (postTitle) {

    let element = await this.driver.$('.gh-editor-title');

    return await element.setValue(postTitle);

  });

Then("I click on 'Begin writing your post ...'", async function () {

    let element = await this.driver.$(".koenig-editor")

    return await element.click();

  });

Then('I enter a post content {kraken-string}', async function (pageContent) {

    let element = await this.driver.$('.koenig-editor');

    return await element.setValue(pageContent);

  });

Then("I click on post to return", async function () {

    let element = await this.driver.$('a[href="#/posts/"]')

    return await element.click();

  });

