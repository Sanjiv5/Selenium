package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.bas.BaseClass;
import org.pojo.SignInPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class FbRegistration extends BaseClass{
	SignInPojo s;
	@Given("To launch browser and maximize window")
	public void to_launch_browser_and_maximize_window() {
	    launchBrowser();
	    windowMaximize();
	}

	@When("To launch url of facebook application")
	public void to_launch_url_of_facebook_application() {
	    launchUrl("https://en-gb.facebook.com/login.php/");
	}

	@When("To click create new account")
	public void to_click_create_new_account(){
		
		s = new SignInPojo();
		clickBtn(s.getSignup());
	}

	@When("To pass first name in firstname textbox")
	public void to_pass_first_name_in_firstname_textbox(DataTable d) throws InterruptedException {
		Thread.sleep(3000);
	 Map<Object, Object> m = d.asMap(String.class, String.class);
	    s = new SignInPojo();
	     passText((String) m.get("firstname3"), s.getFirstnametxtbox());
	}

	@When("To pass second name in secondname textbox")
	public void to_pass_second_name_in_secondname_textbox() {
	    s = new SignInPojo();
	    passText("Srinisha", s.getSecondnametxtbox());
	}

	@When("To pass mobileno or emailid in mobileno or emailid textbox")
	public void to_pass_mobileno_or_emailid_in_mobileno_or_emailid_textbox(DataTable d) {
	   List<Map<String, String>> m = d.asMaps();
		s = new SignInPojo();
		passText(m.get(1).get("password1"), s.getEmailidormobilenotextbox());
	   
	  
	}

	@When("To pass new password in password textbox")
	public void to_pass_new_password_in_password_textbox() {
		s = new SignInPojo();
		passText("Sri", s.getnewPasswordtextbox());
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
	    //closeEntireBrowser();
	}


}
