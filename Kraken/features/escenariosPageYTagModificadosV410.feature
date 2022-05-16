Feature: Escenarios modificados para la Version de Ghost 4.10.0

@user1 @web
Scenario: Como usuario inicio sesión, creo una página y la elimino
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
  And I wait for 5 seconds
  Then I click on pages to return
  And I wait for 5 seconds
  Then I click on an existing page
  And I wait for 2 seconds
  Then I click on settings menu
  And I wait for 2 seconds
  Then I click on delete
  And I wait for 2 seconds
  Then I click on delete again
  And I wait for 5 seconds
  And I wait for 5 seconds
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

@user2 @web
Scenario: Como usuario inicio sesión, creo un tag, y lo asigno a un post
  Given I want to asign a tag to a post
  When I navigate to page "<PAGE>"
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
  Then I enter a tag name "<TAGTOASIGN>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds
  Then I click on Published Posts
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<POSTTAGASIGN>"
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
  And I wait for 4 seconds

@user3 @web
Scenario: Como usuario inicio sesión, creo un tag, lo asigno a un post, y lo quito otra vez
  Given I want to remove a tag from a post
  When I navigate to page "<PAGE>"
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
  Then I enter a tag name "<TAGTOREMOVE>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds
  Then I click on Published Posts
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<POSTREMOVETAG>"
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
  Then I remove Tag from the Post
  And I wait for 2 seconds
  Then I click on Post Settings
  And I wait for 2 seconds
  Then I click on update Post
  And I wait for 2 seconds
  Then I confirm update Post
  And I wait for 4 seconds