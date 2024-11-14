package org.stepdefinition;

import org.bas.BaseClass;
import org.pojo.FbloginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Positiveandnegativeoffbapplication extends BaseClass{
	FbloginPojo f;
	@Given("User has to launch chrome browser and maximize window")
	public void user_has_to_launch_chrome_browser_and_maximize_window() {
	    launchBrowser();
	    windowMaximize();
	}

	@When("User has to launch url of fb application")
	public void user_has_to_launch_url_of_fb_application() {
	    launchUrl("https://en-gb.facebook.com/login.php/");
	}

	@When("User has to pass data {string}in email field")
	public void user_has_to_pass_data_in_email_field(String em) {
	    f = new FbloginPojo();
	    passText(em, f.getEmail());
	}

	@When("User has to pass data {string}in password field")
	public void user_has_to_pass_data_in_password_field(String pass) {
		f = new FbloginPojo();
		passText(pass, f.getPassword());
		
	    
	}

	@When("User has to click login button")
	public void user_has_to_click_login_button() {
		f = new FbloginPojo();
		clickBtn(f.getLoginbtn());
	    
	}

	@Then("User has to close browser")
	public void user_has_to_close_browser() {
	    closeEntireBrowser();
	}



}
