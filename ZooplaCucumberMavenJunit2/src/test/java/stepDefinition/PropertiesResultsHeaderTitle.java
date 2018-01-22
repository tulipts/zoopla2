package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import utility.Log;
import webconnector.WebConnector;

public class PropertiesResultsHeaderTitle {
	WebConnector selenium = new WebConnector();

	@And("^I enter \"([^\"]*)\" into \"([^\"]*)\"$")
	public void I_enter_location(String data, String object) {
		selenium.waitUntilElementIsVisible(object);
		selenium.type(object, data);
		
		// auto complete
		selenium.waitUntilElementIsVisible("locationAutoCompleteLink");
		//actionClick clicks on the middle of the element. It can also be used to hover the mouse
		selenium.actionClick("locationAutoCompleteLink");
	}

	@Then("^the For Sale properties results page \"([^\"]*)\" should show \"([^\"]*)\"$")
	public void Sale_properties_results(String object, String expected) {

		try {
			//String actual = selenium.readLabel(object);
			//System.out.println("actual: " + actual);
			Assert.assertTrue(selenium.readLabel(object).contains(expected));
			Log.info("Sign in assertion passed");
		} catch (Exception e) {
			Log.fatal("assertion failed");
			Assert.fail(e.getMessage());
		} catch (AssertionError e) {
			Log.error("assertion failed");
			Assert.fail(e.getMessage());
		} finally {
			selenium.closeBrowser();
		}
	}
}
