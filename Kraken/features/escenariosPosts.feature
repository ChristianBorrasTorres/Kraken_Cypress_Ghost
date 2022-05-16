Feature: Posts

@user1 @web
Scenario: Como usuario inicio sesión, hago borrador de una página y previsualizo
  Given I want preview a post
  When I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
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
  Then I click on preview button
  And I wait for 10 seconds
  Then I click on back button
  And I wait for 10 seconds
  Then I click on pages to return
  And I wait for 2 seconds


@user2 @web
Scenario: Como usuario inicio sesión, hago post y programo publicacion
  Given I want schedule a post
  When I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on post
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<POSTTITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a post content "<POSTCONTENT>"
  And I wait for 5 seconds
  Then I click on the publish button
  And I wait for 2 seconds
  Then I click on the schedule radio button
  And I wait for 2 seconds
  Then I click on the schedule button
  And I wait for 2 seconds
  Then I click on the confirm button
  And I wait for 2 seconds
  Then I click on post
  And I wait for 2 seconds

@user3 @web
Scenario: Como usuario inicio sesión, hago post y publico
  Given I want publish a post
  When I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on post
  And I wait for 2 seconds
  Then I click on new post
  And I wait for 2 seconds
  Then I enter a post title "<POSTTITLE>"
  And I wait for 2 seconds
  Then I click on 'Begin writing your page ...'
  And I wait for 2 seconds
  Then I enter a post content "<POSTCONTENT>"
  And I wait for 5 seconds
  Then I click on the publish button
  And I wait for 2 seconds
  Then I click on the publish button 2
  And I wait for 2 seconds
  Then I click on the confirm button
  And I wait for 2 seconds
  Then I click on post
  And I wait for 2 seconds

@user4 @web
Scenario: Como usuario inicio sesión, voy a posts y filtro por publicados
  Given I want to filter posts
  When I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
  Then I click on post
  And I wait for 2 seconds
  Then I click on all posts
  And I wait for 2 seconds
  Then I click on published posts
  And I wait for 2 seconds