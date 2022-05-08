Feature: Iniciar una conversación

@user1 @web
Scenario: Como usuario inicio sesión y mandó un mensaje
  Given I navigate to page "<PAGE>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click on the first conversation
  And I wait for 2 seconds
  And I click on the redact message inputbox
  And I wait for 2 seconds
  And I enter text "Hola"
  And I wait for 2 seconds
  And I send the message
  And I wait for 2 seconds