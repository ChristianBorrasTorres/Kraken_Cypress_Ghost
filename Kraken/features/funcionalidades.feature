Feature: Crear una página

@user1 @web
Scenario: Como usuario inicio sesión y creo una página
  Given I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on pages
  And I wait for 2 seconds
  Then I click on new page
  And I wait for 2 seconds
  Then I enter a page title "<PAGETITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a page content "<PAGECONTENT>"
  And I wait for 10 seconds
  Then I click on pages to return
  And I wait for 5 seconds

  Then I click on pages
  And I wait for 2 seconds
  Then I click on new page
  And I wait for 2 seconds
  Then I enter a page title "<PAGETITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a page content "<PAGECONTENT>"
  And I wait for 10 seconds
  Then I click on publish button
  Then I click on publish
  And I wait for 5 seconds
  Then I click on pages to return
  And I wait for 5 seconds

  Then I click on pages
  And I wait for 2 seconds
  Then I click on an existing page
  And I wait for 2 seconds
  Then I enter a page title "<UPDATEPAGETITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a page content "<PAGECONTENT>"
  And I wait for 10 seconds
  Then I click on pages to return
  And I wait for 5 seconds

  Then I click on pages
  And I wait for 2 seconds
  Then I click on an existing page
  And I wait for 2 seconds
  Then I click on settings menu
  And I wait for 2 seconds
  Then I click on delete
  And I wait for 2 seconds
  Then I click on delete again
  And I wait for 5 seconds

  Then I click on post
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<POSTTITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a post content "<POSTCONTENT>"
  And I wait for 10 seconds
  Then I click on post to return
  And I wait for 5 seconds
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

  Feature: Previsualizar post

@user1 @web
Scenario: Como usuario inicio sesiónm, hago borrador de una página y previsualizo
  Given I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on pages
  And I wait for 2 seconds
  Then I click on new page
  And I wait for 2 seconds
 Then I enter a page title "<PAGETITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a page content "<PAGECONTENT>"
  And I wait for 10 seconds
  Then I click on preview button
  And I wait for 10 seconds
  Then I click on back button
  And I wait for 10 seconds
  Then I click on pages to return
  And I wait for 5 seconds
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

  @user1 @web
Scenario: Como usuario inicio sesión, creo un tag, lo asigno a un post, y lo quito otra vez
  Given I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on tags
  And I wait for 2 seconds
  Then I click on new tag
  And I wait for 2 seconds
  Then I enter a tag name "<TAGNAME>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds

  Then I click on Published Posts
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<NEWPOSTTITLE>"
  And I wait for 2 seconds
  Then I click on Post Settings
  And I wait for 2 seconds
  Then I click on Tags of the Post
  And I wait for 2 seconds
  Then I click on Tag to add to Post
  And I wait for 2 seconds
  Then I click on Publish the Post
  And I wait for 2 seconds
  Then I click on Publish again
  And I wait for 2 seconds

  Then I click on Post Settings
  And I wait for 2 seconds
  Then I remove Tag from Post
  And I wait for 2 seconds
  Then I click on Post Settings
  And I wait for 2 seconds
  Then I click on update Post
  And I wait for 2 seconds
  Then I confirm update Post
  And I wait for 2 seconds
