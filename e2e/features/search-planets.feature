Feature: Search for Star Wars planets

  Background:
    Given The app is open on "localhost"

  Scenario: Search for a valid planet
    When I search for planet "Endor"
    Then the details of the planet are displayed

  Scenario: Search for an invalid planet
    When I search for planet "Invalid planet"
    Then a message is display that nothing is found

  Scenario:
    When I search for planet "Endor"
    And I switch to search for people
    And I search for character "Endor"
    Then a message is display that nothing is found
