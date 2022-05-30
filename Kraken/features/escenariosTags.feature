Feature: Tags
  
@user1 @web
Scenario: Como usuario inicio sesión y creo un tag
  Given I want to create a tag
  When I navigate to page "<PAGE>"
  And I wait for 3 seconds
  Then I enter email "<USERNAME>"
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
  Then I click on tags
  And I wait for 4 seconds

# Escenario 2: Como usuario inicio sesión, creo un tag, y lo asigno a un post
  Given I want to asign a tag to a post
  When I navigate to page "<PAGE>"
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


# Escenario 3: Como usuario inicio sesión, creo un tag, lo asigno a un post, y lo quito otra vez
  Given I want to remove a tag from a post
  When I navigate to page "<PAGE>"
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
  Then I click on Post Settings
  And I wait for 2 seconds
  Then I remove Tag from Post
  And I wait for 2 seconds
  Then I click on Post Settings
  And I wait for 2 seconds
  Then I click on update Post
  And I wait for 2 seconds
  Then I confirm update Post
  And I wait for 4 seconds


# Escenario 4: Como usuario inicio sesión, creo un tag, y lo edito
  Given I want to create a tag
  When I navigate to page "<PAGE>"
  And I wait for 3 seconds
  Then I click on tags
  And I wait for 2 seconds
  Then I click on new tag
  And I wait for 2 seconds
  Then I enter a tag name "<TAGTOEDIT>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds
  Then I click on tags
  And I wait for 2 seconds
  Then I click on tag to edit
  And I wait for 2 seconds
  Then I edit tag name "<TAGUPDATED>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds
  Then I click on tags
  And I wait for 4 seconds

# Escenario 5: Como usuario inicio sesión, creo un tag, y lo elimino
  Given I want to create a tag
  When I navigate to page "<PAGE>"
  And I wait for 3 seconds
  Then I click on tags
  And I wait for 2 seconds
  Then I click on new tag
  And I wait for 2 seconds
  Then I enter a tag name "<TAGELIMINATE>"
  And I wait for 2 seconds
  Then I click on Save
  And I wait for 2 seconds
  Then I click delete tag
  And I wait for 2 seconds
  Then I confirm delete tag
  And I wait for 2 seconds