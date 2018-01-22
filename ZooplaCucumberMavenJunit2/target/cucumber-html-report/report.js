$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/001 signIn.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In to Zoopla",
  "description": "\r\nAs a user\r\nI want to SignIn to Zoopla successfully\r\nSo that I can start searching for properties",
  "id": "sign-in-to-zoopla",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignInFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that the user can sign-in successfully to Zoopla",
  "description": "",
  "id": "sign-in-to-zoopla;verify-that-the-user-can-sign-in-successfully-to-zoopla",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "the Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"testUrl\" on \"browserType\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"signinLink\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"emailText\" as \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"passwordText\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"signinButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Signin should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "sign-in-to-zoopla;verify-that-the-user-can-sign-in-successfully-to-zoopla;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "Email",
        "Password",
        "Expected_Result"
      ],
      "line": 19,
      "id": "sign-in-to-zoopla;verify-that-the-user-can-sign-in-successfully-to-zoopla;;1"
    },
    {
      "cells": [
        "Y",
        "planmex@hotmail.com",
        "selenium321",
        "successful"
      ],
      "line": 20,
      "id": "sign-in-to-zoopla;verify-that-the-user-can-sign-in-successfully-to-zoopla;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that the user can sign-in successfully to Zoopla",
  "description": "",
  "id": "sign-in-to-zoopla;verify-that-the-user-can-sign-in-successfully-to-zoopla;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@signin"
    },
    {
      "line": 1,
      "name": "@SignInFeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "the Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"testUrl\" on \"browserType\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"signinLink\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"emailText\" as \"planmex@hotmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"passwordText\" as \"selenium321\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"signinButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Signin should be \"successful\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 16
    }
  ],
  "location": "CommonSteps.Runmode_is(String)"
});
formatter.result({
  "duration": 1401618308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUrl",
      "offset": 15
    },
    {
      "val": "browserType",
      "offset": 28
    }
  ],
  "location": "CommonSteps.I_navigate_to(String,String)"
});
formatter.result({
  "duration": 19103950458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinLink",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_click_on(String)"
});
formatter.result({
  "duration": 2772241125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emailText",
      "offset": 9
    },
    {
      "val": "planmex@hotmail.com",
      "offset": 24
    }
  ],
  "location": "SignInTest.I_enter_as(String,String)"
});
formatter.result({
  "duration": 309192605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwordText",
      "offset": 9
    },
    {
      "val": "selenium321",
      "offset": 27
    }
  ],
  "location": "SignInTest.I_enter_as(String,String)"
});
formatter.result({
  "duration": 248245721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinButton",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_click_on(String)"
});
formatter.result({
  "duration": 3679955848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successful",
      "offset": 18
    }
  ],
  "location": "SignInTest.Signin_Validation(String)"
});
formatter.result({
  "duration": 1188061618,
  "status": "passed"
});
formatter.uri("features/002. propertiesResultsHeaderTitle.feature");
formatter.feature({
  "line": 2,
  "name": "For Sale properties results header title",
  "description": "\r\nAs a user\r\nI want to see the location string in the header title\r\nSo that I can verify I am searching for properties in the correct location",
  "id": "for-sale-properties-results-header-title",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ForSalePropertiesFeature"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "# line 14 allows for auto complete in the dropdown"
    }
  ],
  "line": 10,
  "name": "Verify that the location is correct.....",
  "description": "",
  "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SalePropertiesResultsScenario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"testUrl\" on \"browserType\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003csearchLocation\u003e\" into \"searchLocationText\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"searchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the For Sale properties results page \"headerTitleLabel\" should show \"\u003cExpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "searchLocation",
        "Expected"
      ],
      "line": 18,
      "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;;1"
    },
    {
      "cells": [
        "Y",
        "London",
        "London"
      ],
      "line": 19,
      "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;;2"
    },
    {
      "cells": [
        "Y",
        "London",
        "Test"
      ],
      "line": 20,
      "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that the location is correct.....",
  "description": "",
  "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SalePropertiesResultsScenario"
    },
    {
      "line": 1,
      "name": "@ForSalePropertiesFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"testUrl\" on \"browserType\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"London\" into \"searchLocationText\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"searchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the For Sale properties results page \"headerTitleLabel\" should show \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 16
    }
  ],
  "location": "CommonSteps.Runmode_is(String)"
});
formatter.result({
  "duration": 3707068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUrl",
      "offset": 15
    },
    {
      "val": "browserType",
      "offset": 28
    }
  ],
  "location": "CommonSteps.I_navigate_to(String,String)"
});
formatter.result({
  "duration": 13820096171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    },
    {
      "val": "searchLocationText",
      "offset": 23
    }
  ],
  "location": "PropertiesResultsHeaderTitle.I_enter_location(String,String)"
});
formatter.result({
  "duration": 1051642824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_click_on(String)"
});
formatter.result({
  "duration": 6539657369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "headerTitleLabel",
      "offset": 38
    },
    {
      "val": "London",
      "offset": 69
    }
  ],
  "location": "PropertiesResultsHeaderTitle.Sale_properties_results(String,String)"
});
formatter.result({
  "duration": 1574646380,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that the location is correct.....",
  "description": "",
  "id": "for-sale-properties-results-header-title;verify-that-the-location-is-correct.....;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SalePropertiesResultsScenario"
    },
    {
      "line": 1,
      "name": "@ForSalePropertiesFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"testUrl\" on \"browserType\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"London\" into \"searchLocationText\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"searchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the For Sale properties results page \"headerTitleLabel\" should show \"Test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 16
    }
  ],
  "location": "CommonSteps.Runmode_is(String)"
});
formatter.result({
  "duration": 1405196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUrl",
      "offset": 15
    },
    {
      "val": "browserType",
      "offset": 28
    }
  ],
  "location": "CommonSteps.I_navigate_to(String,String)"
});
formatter.result({
  "duration": 13740592953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    },
    {
      "val": "searchLocationText",
      "offset": 23
    }
  ],
  "location": "PropertiesResultsHeaderTitle.I_enter_location(String,String)"
});
formatter.result({
  "duration": 997716789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchButton",
      "offset": 12
    }
  ],
  "location": "CommonSteps.I_click_on(String)"
});
formatter.result({
  "duration": 6245238452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "headerTitleLabel",
      "offset": 38
    },
    {
      "val": "Test",
      "offset": 69
    }
  ],
  "location": "PropertiesResultsHeaderTitle.Sale_properties_results(String,String)"
});
formatter.result({
  "duration": 1615540760,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat stepDefinition.PropertiesResultsHeaderTitle.Sale_properties_results(PropertiesResultsHeaderTitle.java:37)\r\n\tat ✽.Then the For Sale properties results page \"headerTitleLabel\" should show \"Test\"(features/002. propertiesResultsHeaderTitle.feature:15)\r\n",
  "status": "failed"
});
});