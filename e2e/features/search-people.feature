Feature: Search for Star Wars characters

  Scenario: Search for a valid character
    Given The app is open on "localhost"
    And I search for character "Chewbacca"
    Then the details of the character are displayed

  Scenario: Search for an invalid character
    Given The app is open on "localhost"
    And I search for character "Invalid character"
    Then a message is display that nothing is found

  Scenario: Search results should be cleared when searching on empty input
    Given The app is open on "localhost"
    And I search for character "Luke Skywalker"
    And I clear the search field
    And I click the search button
    Then I should get an empty result field

  Scenario: Search is submitted when pressing enter
    Given The app is open on "localhost"
    When I enter "Chewbacca" in the search field
    And I press enter
    Then the details of the character are displayed



