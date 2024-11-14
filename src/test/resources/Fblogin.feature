@Feature1
Feature: To validate the login functionality of fb application
Background:
Given To launch chrome browser and window maximize
@Regression
Scenario: To validate login with valid username and invalid password
When To launch url of fb application
And To  pass valid username in email field
And To pass invalid password in password field
And To click login button
And To check whether navigate to homepage or not
Then To close browser
@Smoke
Scenario Outline: To validate positive and negative combination of login functionality
When User has to launch url of fb application
And User has to pass data "<emaildatas>"in email field
And User has to pass data "<passworddatas>"in password field
And User has to click login button
Then User has to close browser

Examples:
|emaildatas      |passworddatas|
|Selenium@gmail.com|Framework|
|Inmakes@gmail.com|SofwareTesting|
|abc@gmail.com|123453|
|corejav@gmail.com|cucumber|
|apitesting@gmail.com|12344344|