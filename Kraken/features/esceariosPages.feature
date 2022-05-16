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
  And I wait for 5 seconds
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

@user2 @web
Scenario: Como usuario inicio sesión, creo una página y la publico
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
  Then I click on publish button
  Then I click on publish
  And I wait for 5 seconds
  Then I click on pages to return
  And I wait for 5 seconds
  And I wait for 5 seconds
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

@user3 @web
Scenario: Como usuario inicio sesión, creo una página y la actualizo
  Given I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  Then I enter password "<PASSWORD>" 
  And I wait for 2 seconds
  Then I click on the login button
  And I wait for 2 seconds
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
  Then I click on the user button
  And I wait for 2 seconds
  Then I click on sign out
  And I wait for 5 seconds

@user4 @web
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

@user5 @web
Scenario: Como usuario inicio sesión, hago borrador de una página y previsualizo
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


