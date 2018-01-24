
package webconnector;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utility.Log;

public class WebConnector {

	public static WebDriver driver = null;
	public Properties PROJECT = null;
	public FileInputStream fs = null;

	public WebConnector() {
		if (PROJECT == null) {
			try {
				// Initialise Project properties
				Log.info("Initilaising.. ");
				PROJECT = new Properties();
				fs = new FileInputStream(".//src//main//resources//PROJECT.properties");
				PROJECT.load(fs);
			} catch (Exception e) {
				System.out.println("Initialising properties file failed");
			}
		}
	}

	/// ****************Generic Keywords************************ ///

	// Opening the browser
	public void openBrowser(String browserType) {
		Log.info("Opening browser");
		if (PROJECT.getProperty("browserType").equalsIgnoreCase("Firefox")) {
			System.setProperty("webdriver.gecko.driver", ".//drivers//geckodriver.exe");
			driver = new FirefoxDriver();
		} else if (PROJECT.getProperty("browserType").equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver", ".//drivers//chromedriver.exe");
			driver = new ChromeDriver();
		} else if (PROJECT.getProperty("browserType").equalsIgnoreCase("IE")) {
			System.setProperty("webdriver.ie.driver", ".//drivers//IEDriverServer.exe");
			DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
			caps.setCapability("ignoreZoomSetting", true);
			//driver = new InternetExplorerDriver(caps);
			driver = new InternetExplorerDriver();

		}
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	public void closeBrowser(String browserType) {
		Log.info("Closing browser");
		driver.close();
	}

	// Navigate to a URL
	public void navigate(String testUrl) {
		Log.info("Navigating to Url");
		driver.get(PROJECT.getProperty(testUrl));		
		waitUntilPageLoads();
		implicitlyWait();
	}

	// Input Text
	public void type(String object, String data) {
		Log.info("Typing in text");
		getElement(object).sendKeys(data);
		// driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(data);
	}

	// Clear Text
	public void clear(String object) {
		try {
			getElement(object).clear();
		} catch (Exception e) {
			e.getMessage();
		}
	}

	public String readTextInput(String object) {
		Log.info("FReading text input");
		String actual = getElement(object).getAttribute("value");

		return actual.trim();
	}

	// Click object
	public void click(String object) {
		Log.info("Clicking element");
		getElement(object).click();
	}

	// check element exists
	public boolean checkElementExists(String object) {
		Log.info("Verifying element");
		int element = driver.findElements(By.xpath(PROJECT.getProperty(object))).size();
		if (element == 0)
			return false;
		else
			return true;
	}

	// verify Link Text
	public boolean verifyLinkText(String object, String data) {
		Log.info("Verifying link text");
		try {

			String expected = PROJECT.getProperty(data);
			String actual = driver.findElement(By.xpath(PROJECT.getProperty(object))).getText().trim();

			if (actual.equals(expected))
				return true;
			else
				return false;
		} catch (Exception e) {
			return false;
		}
	}

	// verify partial Link Text
	public boolean verifyPartialLinkText(String object, String data) {
		Log.info("Verifying partial link text");
		try {

			String expected = PROJECT.getProperty(data);
			String actual = getElement(object).getText().trim();

			if (actual.contains(expected))
				return true;
			else
				return false;
		} catch (Exception e) {
			return false;
		}
	}

	// Verify label text
	public boolean verifyText(String object, String data) {
		Log.info("Verifying text");
		String expected = data.trim();
		String actual = getElement(object).getText().trim();

		if (expected.equals(actual)) {
			return true;
		} else {
			return false;
		}
	}

	// Read label text
	public String readLabel(String object) {
		Log.info("Reading label");
		String actual = getElement(object).getText().trim();

		return actual;

	}

	// Verify partial text
	public boolean verifyPartialText(String object, String data) {
		Log.info("Verifying partial text");
		String expected = data.trim();
		String actual = getElement(object).getText().trim();

		if (actual.contains(expected)) {
			return true;
		} else {
			return false;
		}
	}

	public void closeBrowser() {
		Log.info("Closing browser");
		driver.quit();
	}

	public void waitUntilElementIsVisible(String object) {
		WebDriverWait wait = new WebDriverWait(driver, 6000);
		wait.until(ExpectedConditions.visibilityOf(getElement(object)));
	}

	public void waitUntilElementIsClickable(String object) {
		WebDriverWait wait = new WebDriverWait(driver, 6000);
		wait.until(ExpectedConditions.elementToBeClickable(getElement(object)));
	}

	public void waitUntilPageLoads() {
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}
	
	public void implicitlyWait() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	public void keyboardEnter(String object) {
		try {
			getElement(object).sendKeys(Keys.ENTER);
		} catch (Exception e) {
			e.getMessage();
		}
	}

	public void actionMovetoElement(String object) {
		try {
			WebElement element = getElement(object);
			// Build action - Perform mouse hover (moves to centre of element)
			Actions builder = new Actions(driver);
			builder.moveToElement(element).build().perform();
		} catch (Exception e) {
			e.getMessage();
		}
	}

	public void actionClick(String object) {
		try {
			WebElement element = getElement(object);

			// Build action - Perform mouse hover (moves to centre of the element) and click
			Actions builder = new Actions(driver);
			builder.moveToElement(element).click().build().perform();

		} catch (Exception e) {
			e.getMessage();
		}
	}

	// validate element before performing any keyword / action
	public WebElement getElement(String locator) {

		WebElement element = null;

		try {
			element = driver.findElement(By.xpath(PROJECT.getProperty(locator)));
		} catch (Exception e) {
			Assert.fail("Cannot find element: " + e.getMessage());
		}
		return element;
	}

	/// ****************Application Specific Keywords************************

}
