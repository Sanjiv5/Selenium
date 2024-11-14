package org.stepdefinition;

import org.bas.BaseClass;
import org.pojo.FbloginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Fblogin extends BaseClass{
	FbloginPojo f;
	@Given("To launch chrome browser and window maximize")
	public void to_launch_chrome_browser_and_window_maximize() {
	    launchBrowser();
	    windowMaximize();
	}
	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
	    launchUrl("https://en-gb.facebook.com/login.php/");
	}

	@When("To  pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
	    f = new FbloginPojo();
	    passText("sanjivrobo95@gmail.com", f.getEmail());
	}

	@When("To pass invalid password in password field")
	public void to_pass_invalid_password_in_password_field() {
		f = new FbloginPojo();
		passText("sanjiv", f.getPassword());
	    
	}

	@When("To click login button")
	public void to_click_login_button() {
	    f = new FbloginPojo();
	    clickBtn(f.getLoginbtn());
	}

	@When("To check whether navigate to homepage or not")
	public void to_check_whether_navigate_to_homepage_or_not() {
	   System.out.println("To check your login credentials");
	}

	@Then("To close browser")
	public void to_close_browser() {
	    closeEntireBrowser();
	}


}
