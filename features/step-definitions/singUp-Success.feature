Feature: Sign up into losestudiantes
    As an user I want to sign up within losestudiantes website in order to rate teachers

    Scenario Outline: Sign up success

        Given I go to losestudiantes home screen
        When I open the login screen
        And I open the sign up screen
        And I fill sign up form with <name> <lastname> <email> <password> and <repeatpassword>
        And I try to sign up
        Then I expect to sign up

        Examples:
            | name     | lastname      | email                             | password | repeatpassword |
            | Prueba   | Automatizada  | prueba-automatizada-final@yopmail.com | 12345678 | 12345678       |