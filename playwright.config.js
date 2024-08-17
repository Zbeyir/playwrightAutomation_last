// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
   // fullyParallel: true,  // böyle idi
   fullyParallel: false,    // bu hale cevirdik HOOKS 'tan sonra

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,  // HOOKS icin buranin da byöle olmasi lazim
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html', // p36 da reporters de bunu kapattik (sonra düzelttim)
  //reporter: 'list',  // p36 da reporters de bunu actik (sonra düzelttim) 
  //reporter: [['json', { outputFile: 'results.json' }]],  // p36 da reporters de bunu actik (sonra düzelttim)
  reporter: [['html'],  // bu sekilde de birden fazla yazabilir iz bir Array in icine
              ['list'],
              ['json', { outputFile: 'results.json' }],
              ['junit', { outputFile: 'results.xml' }],
              ['allure-playwright',{outputFolder: 'my-allure-results'}]
              ],



  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",  // P31_Tracing 'de ekledik
    screenshot:"only-on-failure",  // P29-->bunu screenshot da yaptik("----"-->TIRNAK ISARETINI ACINCA 3 tane özellik var birini secebiliyoruz")
    video:"retain-on-failure"  // bunu video da yaptik 30- video-->P30-->BUNDA DA BIR SÜRÜ ÖZELLI VAR
   },
   
   //timeout:1000,  // bunu ekledikP33_Annatations 'da--> slov()

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

