package org.pojo;

import org.bas.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FbloginPojo extends BaseClass {
	//non parameterized constructor
	public FbloginPojo() {
		PageFactory.initElements(driver, this);
		}
	//meaning for this - representing the current class variables that current class variables is WebElement
	//2. Private WebElement
	//WebElement email = driver.findelement(By.id("email"));
	@FindBy (id="email")
	private WebElement email;
	//@FindAll({ 
		//@FindBy (xpath = "//input[@id='email']"),
		//@FindBy (xpath = "//input[@name='email']"),
		//@FindBy(xpath = "//input[@data-testid='royal_email']")})
	
    @FindBy(xpath = "//input[@aria-label='Password']")
	private WebElement password;
	@FindBy(name = "login")
	private WebElement loginbtn;
	//Getters to access webelement outside the class
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLoginbtn() {
		return loginbtn;
	}
	
	
	

}
