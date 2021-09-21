Feature: EATestFeature
    Test EA features

    Scenario: Test the login feature
        Given I visit the EA site
        Given I click the Login link
        And I login as user   
        | username | password |
        | admin    | password | 
