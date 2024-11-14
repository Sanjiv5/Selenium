@Feature2
Feature: To validate account creation of facebook application
@Sanity
Scenario: To create new account
Given To launch browser and maximize window
When To launch url of facebook application
And To click create new account
#One Dimensinal Map Data
And To pass first name in firstname textbox
#key   value
|firstname1|Sanjiv|
|firstname2|Srinisha|
|firstname3|Sanmathi|
|firstname4|Shruthi|
And To pass second name in secondname textbox

#Two Dimensinal Map Data
And To pass mobileno or emailid in mobileno or emailid textbox
|password1|password2|password3|
|988976448|fddrsse|hdrd@|
|785345226|ffrr@!@|sffdhj|
|jhfdf1223|arddsf|daeeaf|
|gcccb|nkhhh|nujh|
And To pass new password in password textbox
Then To close the browser
