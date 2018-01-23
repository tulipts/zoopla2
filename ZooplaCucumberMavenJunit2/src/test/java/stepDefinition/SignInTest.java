package stepDefinition;

import static org.junit.Assert.assertEquals;

import org.junit.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import utility.Log;
import webconnector.WebConnector;

public class SignInTest {
	WebConnector selenium = new WebConnector();
	
	//And I enter "emailText" as "<Email>"
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_as(String object, String data) {
		selenium.waitUntilElementIsVisible(object);
		selenium.type(object, data);
	}
	
	//Then Signin should be "<Expected_Result>"
	@Then("^Signin should be \"([^\"]*)\"$") 
	public void Signin_Validation(String expected_Result) {
		
		try {
			boolean result = selenium.checkElementExists("manageaccountlink");
			String actual_result;
			if (result) {
				actual_result = "successful";
			}else {
				actual_result = "failure";
			}
			
			Assert.assertEquals(expected_Result, actual_result);			
			Log.info("Sign in assertion passed");
		}catch(Exception e) {
			Log.fatal("assertion failed");
			Assert.fail(e.getMessage());
		}catch(AssertionError e) {
			Log.error("assertion failed");
			Assert.fail(e.getMessage());
		}finally {
			selenium.closeBrowser();
		}
	}
}
