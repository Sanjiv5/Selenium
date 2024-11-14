package org.stepdefinition;

import org.bas.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass {
	@Before(order = 1)
	//precondition
	private void precondition2() {
		System.out.println("Launch the browser");
		launchBrowser();}
	@Before(order = 2)
		private void precondition1() {
			System.out.println("Max the window");
			windowMaximize();}
	@Before(order = 3 , value = "@Smoke")
			private void precondition3() {
				System.out.println("Precondition3");

	}
	@After(order = 10 , value = "@Smoke")
	//postcondition
	private void postcondition2() {
		System.out.println("Take Screenshot of scenarios");}
	@After(order = 4)
		private void postcondition1() {
		System.out.println("Close Entire Browser");
			closeEntireBrowser();

	}
	

}
