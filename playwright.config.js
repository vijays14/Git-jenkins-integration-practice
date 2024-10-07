// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//this export will let the config object to be available for all the tests to use it
module.exports = defineConfig({
  //Test runner will scan the testDir inside the playwright config file and run all the tests inside it
  testDir: './tests',
  retries:2,
  timeout: 30*1000,
  expect:{
    //Expect is an assertion component in Playwright
    timeout : 5000
  },
  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  
  
  /* Configure projects for major browsers */
  
  projects: [
    {
      name: 'chromium',
      

  use:{
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
   reporter: [['allure-playwright']],
    headless: true,
    ...devices['Desktop Chrome']
  },
     
    },
    //to run in the Branded browsers like Google chrome, firefox  - use the following section
    {
      name: 'Chrome',
      

  use:{
    browserName:'chromium',
    screenshot:'only-on-failure',
    reporter: [['allure-playwright']],
    headless: false,
    trace : 'on',
    ignoreHTTPSErrors : true,// to handle the SSL certificate error
    permissions:['notifications'],
    video:'retain-on-failure',
    ...devices['Desktop Chrome'],//This option decides the device in which the tests should run.
    // other values available are, ipad, iphone, tabs, desktops, laptops etc.,
    channel: 'chrome',
    //viewport:{width:720,height:720},
  },
     
    },
    

    //  {
    //    name: 'firefox',
    //    use: { ...devices['Desktop Firefox'] },
    //  },
// Webkit is provided by playwright to run the Safari browser
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


  ]
});

