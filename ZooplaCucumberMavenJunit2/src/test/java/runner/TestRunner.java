package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//http://www.atetric.com/atetric/javadoc/io.cucumber/cucumber-junit/2.3.1/cucumber/api/junit/Cucumber.html
//https://cucumber.io/docs/reference/jvm#installation
	
//empty class with annotations
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features", 
		glue = { "stepDefinition" },
		plugin = {"html:target/cucumber-html-report", "pretty", "json:target/cucumber.json" }
		)
public class TestRunner {

}