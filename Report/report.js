$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FbRegistration.feature");
formatter.feature({
  "name": "To validate account creation of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegistration.to_launch_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegistration.to_launch_url_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click create new account",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_click_create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass first name in firstname textbox",
  "rows": [
    {
      "cells": [
        "firstname1",
        "Sanjiv"
      ]
    },
    {
      "cells": [
        "firstname2",
        "Srimathi"
      ]
    },
    {
      "cells": [
        "firstname3",
        "Sanmathi"
      ]
    },
    {
      "cells": [
        "firstname4",
        "Shruthi"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_first_name_in_firstname_textbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass second name in secondname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_second_name_in_secondname_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or emailid in mobileno or emailid textbox",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "988976448",
        "fddrsse",
        "hdrd@"
      ]
    },
    {
      "cells": [
        "785345226",
        "ffrr@!@",
        "sffdhj"
      ]
    },
    {
      "cells": [
        "jhfdf1223",
        "arddsf",
        "daeeaf"
      ]
    },
    {
      "cells": [
        "gcccb",
        "nkhhh",
        "nujh"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_mobileno_or_emailid_in_mobileno_or_emailid_textbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass new password in password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_new_password_in_password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegistration.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Fblogin.feature");
formatter.feature({
  "name": "To validate the login functionality of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To  pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to homepage or not",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.to_check_whether_navigate_to_homepage_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass data \"\u003cemaildatas\u003e\"in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass data \"\u003cpassworddatas\u003e\"in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "Selenium@gmail.com",
        "Framework"
      ]
    },
    {
      "cells": [
        "Inmakes@gmail.com",
        "SofwareTesting"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "123453"
      ]
    },
    {
      "cells": [
        "corejav@gmail.com",
        "cucumber"
      ]
    },
    {
      "cells": [
        "apitesting@gmail.com",
        "12344344"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"Selenium@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"Framework\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"Inmakes@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"SofwareTesting\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"abc@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"123453\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"corejav@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"cucumber\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch chrome browser and window maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_launch_chrome_browser_and_window_maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"apitesting@gmail.com\"in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"12344344\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_pass_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Positiveandnegativeoffbapplication.user_has_to_close_browser()"
});
formatter.result({
  "status": "passed"
});
});