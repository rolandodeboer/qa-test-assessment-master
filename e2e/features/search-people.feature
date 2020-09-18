Feature: Search for Star Wars characters

  Scenario: Search for a valid character
    Given The app is open on "localhost"
    When I search for a valid character
    Then the details of the character are displayed

  Scenario: Search for an invalid character
    Given The app is open on "localhost"
    When I search for an invalid character
    And a message is display that nothing is found

  Scenario: Search results should be cleared when searching on empty input
    Given The app is open on "localhost"
    When I search for a valid character
    And I clear the search field
    And I click the search button
    Then I should get an empty result field

  Scenario: Search is submitted when pressing enter
    Given The app is open on "localhost"
    When I enter a valid character in the search field
    And I press enter
    Then the details of the character are displayed
