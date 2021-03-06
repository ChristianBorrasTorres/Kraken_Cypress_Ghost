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

    let element = await this.driver.$('//li/a[text()="Pages"]');

    return await element.click();

});

Then("I click on new page", async function () {

    let element = await this.driver.$('//a/span[text()="New page"]')

    return await element.click();

  });

  
Then('I enter a page title {kraken-string}', async function (pageTitle) {

    let element = await this.driver.$('//textarea[@placeholder="Page title"]');

    return await element.setValue(pageTitle);

  });


Then("I click on 'Begin writing your page ...'", async function () {

    let element = await this.driver.$('//p')

    return await element.click();

  });

Then('I enter a page content {kraken-string}', async function (pageContent) {

    let element = await this.driver.$('//p');

    return await element.setValue(pageContent);

  });

  Then("I click on preview button", async function () {

    let element = await this.driver.$('//button/span[text()="Preview"]')

    return await element.click();

  });

  Then("I click on back button", async function () {

    let element = await this.driver.$('//button[@class="gh-editor-back-button"]')

    return await element.click();

  });

  Then("I click on pages to return 2", async function () {

    let element = await this.driver.$('//a/span[text()="Pages"]')

    return await element.click();

  });
  

Then("I click on pages to return", async function () {

    let element = await this.driver.$('//a/span[text()="Posts"]')

    return await element.click();

  });

Then("I click on publish button", async function () {

    let element = await this.driver.$('//div/span[text()="Publish"]')

    return await element.click();

  });

Then("I click on publish", async function () {

    let element = await this.driver.$('//button/span[text()="Publish"]')

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

    let element = await this.driver.$('//button[@title="Settings"]')

    return await element.click();

  });

  Then("I click on delete", async function () {

    let element = await this.driver.$('//*[text()=" Delete "]')

    return await element.click();

  });

  Then("I click on delete again", async function () {

    let element = await this.driver.$('//*[text()="Delete"]')

    return await element.click();

  });

Then("I click on post", async function () {

    let element = await this.driver.$('//li/a[text()="Posts"]')

    return await element.click();

  });

Then("I click on new post", async function () {

    let element = await this.driver.$('//a/span[text()="New post"]')

    return await element.click();

  });

Then('I enter a post title {kraken-string}', async function (postTitle) {

    let element = await this.driver.$('//textarea[@placeholder="Post title"]');

    return await element.setValue(postTitle);

  });

Then("I click on 'Begin writing your post ...'", async function () {

    let element = await this.driver.$(".koenig-editor")

    return await element.click();

  });

Then('I enter a post content {kraken-string}', async function (pageContent) {

    let element = await this.driver.$('//p');

    return await element.setValue(pageContent);

  });

Then("I click on post to return", async function () {

    let element = await this.driver.$('a[href="#/posts/"]')

    return await element.click();

  });

  Given('I want to create a tag', async function () {
  });


  Given('I want to asign a tag to a post', async function () {
  });

  Given('I want to remove a tag from a post', async function () {
  });

  Then('I click on tags', async function () {

    let element = await this.driver.$('a[href="#/tags/"]');
  
    return await element.click();
  
  });
  
  Then("I click on new tag", async function () {
  
    let element = await this.driver.$('a[href="#/tags/new/"]')
  
    return await element.click();
  
  });
  
  
  Then('I enter a tag name {kraken-string}', async function (tagName) {
  
    let element = await this.driver.$('.ember-text-field');
  
    return await element.setValue(tagName);
  
  });
  
  
  Then("I click on Save", async function () {
  
    let element = await this.driver.$(".gh-btn")
  
    return await element.click();
  
  });
  
  
  Then("I click on Published Posts", async function () {
  
    let element = await this.driver.$('a[href="#/posts/?type=published"]')
  
    return await element.click();
  
  });
  
  
  
  Then("I click on Post Settings", async function () {
  
    let element = await this.driver.$(".settings-menu-toggle")
  
    return await element.click();
  
  });


  Then("I click on Post Settings again", async function () {
  
    let element = await this.driver.$(".settings-menu-toggle.gh-btn gh-btn-editor.gh-btn-icon only-has-icon.gh-actions-cog");
  
    return await element.click();
  
  });
  
  
  Then("I click on Tags of the Post", async function () {
  
    let element = await this.driver.$(".ember-power-select-trigger-multiple-input")
  
    return await element.click();
  
  });
  
  
  Then("I click on Tag to add to Post", async function () {
  
    let element = await this.driver.$(".ember-power-select-option")
  
    return await element.click();
  
  });
  
  
  
  Then("I click on Publish the Post", async function () {
  
    let element = await this.driver.$(".gh-publishmenu-trigger")
  
    return await element.click();
  
  });
  
  
  Then("I click on Publish again", async function () {
  
    let element = await this.driver.$(".gh-publishmenu-button")
  
    return await element.click();
  
  });


  Then("I remove Tag from Post", async function () {
  
    let element = await this.driver.$(".ember-power-select-multiple-remove-btn")
  
    return await element.click();
  
  });


  Then("I remove Tag from the Post", async function () {
  
    let element = await this.driver.$(".ember-power-select-multiple-remove-btn")
  
    return await element.click();
  
  });


  Then("I click on update Post", async function () {
  
    let element = await this.driver.$(".ember-view.ember-basic-dropdown-trigger")
  
    return await element.click();
  
  });

  Then("I confirm update Post", async function () {
  
    let element = await this.driver.$(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
  
    return await element.click();
  
  });


  Then("I click on tag to edit", async function () {
  
    let element = await this.driver.$(".gh-list-row.gh-tags-list-item")
  
    return await element.click();
  
  });


  Then('I edit tag name {kraken-string}', async function (tagName) {
  
    let element = await this.driver.$('.ember-text-field');
  
    return await element.setValue(tagName);
  
  });

  Then("I click delete tag", async function () {
  
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon")
  
    return await element.click();
  
  });


  Then("I confirm delete tag", async function () {
  
    let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
  
    return await element.click();
  
  });

  Given('I want preview a post', async function(){
  });

  Given('I want schedule a post', async function(){
  });

  Given('I want publish a post', async function(){
  });

  Given('I want to filter posts', async function(){
  });
  
  Then('I click on the publish button', async function(){
    let element = await this.driver.$('//span[text()="Publish"]')

    return await element.click();
  }
  );

  Then('I click on the schedule radio button', async function(){
    let element = await this.driver.$('//div[@class="gh-publishmenu-radio "]/div[@class="gh-publishmenu-radio-button"]')

    return await element.click();
  }
  );

  Then('I click on the schedule button', async function(){
    let element = await this.driver.$('//button/span[text()="Schedule"]')

    return await element.click();
  }
  );
  Then('I click on the confirm button', async function(){
    let element = await this.driver.$('//button/span[text()="Schedule"]')

    return await element.click();
  }
  
  );

  Then('I click on the confirm button 2', async function(){
    let element = await this.driver.$('//button/span[text()="Publish"]')

    return await element.click();
  }
  
  );

  Then('I click on the publish button 2', async function(){
    let element = await this.driver.$('.gh-publishmenu-button.gh-btn-icon.ember-view')

    return await element.click();
  }
  );

  Then('I click on all posts', async function(){
    let element = await this.driver.$('//*[text()="All posts"]')

    return await element.click();
  }
  );

  Then('I click on published posts', async function(){
    let element = await this.driver.$('li[data-option-index="2"]')

    return await element.click();
  }
  );

  Then('I click on members', async function(){
    let element = await this.driver.$('a[href*="#/members/"]')
    return await element.click();
  }
  );

  Then('I click on new member', async function(){
    let element = await this.driver.$('a[href*="#/members/new/"]')
    return await element.click();
  }
  );

  Then('I enter a name {kraken-string}', async function(name){
    let element = await this.driver.$('input[name*="name"]')

    return await element.setValue(name);
  }
  );

  Then('I enter a new email {kraken-string}', async function(name){
    let element = await this.driver.$('input[name*="email"]')

    return await element.setValue(name);
  }
  );

  Then('I save the new member', async function(){
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')

    return await element.click();
  }
  );

  Then("I click on an existing member", async function () {

    let element = await this.driver.$('.gh-list-data')

    return await element.click();

  });

  Then("I click on settings", async function () {

    let element = await this.driver.$('button[role*="button"]')

    return await element.click();

  });

  Then("I click on delete member", async function () {

    let element = await this.driver.$('.red')

    return await element.click();

  });

  Then("I click again on delete member", async function () {

    let element = await this.driver.$('.gh-btn-red')

    return await element.click();

  });

  Then('I search for a member', async function(){
    let element = await this.driver.$('.gh-members-header-search')

    return await element.click();
  }
  );

  Then('I enter a members name {kraken-string}', async function(newName){
    let element = await this.driver.$('.gh-members-header-search')

    return await element.setValue(newName);
  }
  );

  Then('I enter my profile', async function(){
    let element = await this.driver.$('a[href*="#/settings/staff/christian/"]')

    return await element.click();
  }
  );

  Then('I save the changes of my profile', async function(){
    let element = await this.driver.$('.gh-btn')

    return await element.click();
  }
  );

  Then('I enter my new name {kraken-string}', async function(newName){
    let element = await this.driver.$('.user-name')

    return await element.setValue(newName);
  }
  );

  Then('I return to settings', async function(){
    let element = await this.driver.$('a[href*="#/settings/"]')

    return await element.click();
  }
  );

  