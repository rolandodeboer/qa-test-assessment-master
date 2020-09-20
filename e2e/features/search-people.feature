Feature: Search for Star Wars characters

  Background:
    Given The app is open on "localhost"

  Scenario: Search for a valid character
    And I search for character "Chewbacca"
    Then the details of the character are displayed

  Scenario: Search for an invalid character
    And I search for character "Invalid character"
    Then a message is display that nothing is found

  Scenario: Search results should be cleared when searching on empty input
    And I search for character "Luke Skywalker"
    And I clear the search field
    And I click the search button
    Then I should get an empty result field

  Scenario: Search is submitted when pressing enter
    When I enter "Chewbacca" in the search field
    And I press enter
    Then the details of the character are displayed

  Scenario: Search based on partial match returns more than one result
    When I search for character "E"
    Then I should get multiple results



