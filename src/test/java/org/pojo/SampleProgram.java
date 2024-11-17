package org.pojo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SampleProgram {
	
	@Test
	private void tc1() {
		//System.out.println("TC1: " +Thread.currentThread().threadId());
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();

	}
	
	@Test(retryAnalyzer = Failed.class)
	private void tc3() {
		//System.out.println("TC3: " +Thread.currentThread().threadId());
	WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		String Title = driver.getTitle();
		driver.get("https://en-gb.facebook.com/");
		driver.manage().window().maximize();
		
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys("Sanjivrobo95@gmail.com");
		
		Assert.assertEquals(Title, "Facebook", "Check your page title");
		WebElement password = driver.findElement(By.name("pass"));
		password.sendKeys("Sanjiv");
		
		

	}
	
	@Test
	private void tc2() {
          // System.out.println("TC2:" +Thread.currentThread().threadId());
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();

	}
}
