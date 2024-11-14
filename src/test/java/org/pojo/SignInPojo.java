package org.pojo;

import org.bas.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPojo extends BaseClass {
	public SignInPojo() {
		PageFactory.initElements(driver, this);
		
	}
	@FindBy(xpath = "//a[text()='Sign up for Facebook']")
	private WebElement signup;
	@FindBy(name = "firstname")
	private WebElement firstnametxtbox;
	@FindBy(name = "lastname")
	private WebElement secondnametxtbox;
	@FindBy(name = "reg_email__")
	private WebElement emailidormobilenotextbox;
	@FindBy(name = "reg_passwd__")
	private WebElement newpasswordtextbox;
	
	public WebElement getSignup() {
		return signup;
	}
	public WebElement getFirstnametxtbox() {
		return firstnametxtbox;
	}
	public WebElement getSecondnametxtbox() {
		return secondnametxtbox;
	}
	public WebElement getEmailidormobilenotextbox() {
		return emailidormobilenotextbox;
	}
	public WebElement getnewPasswordtextbox() {
		return newpasswordtextbox;
	}
	

}
