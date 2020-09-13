Feature: Search for Star Wars planets

  Scenario: Search for a valid planet
    Given The app is open on "localhost"
    When I search for a valid planet
    Then the details of the planet are displayed

  Scenario: Search for an invalid planet
    Given The app is open on "localhost"
    When I search for an invalid planet
    And a message is display that nothing is found
