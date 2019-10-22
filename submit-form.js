// add some values to input fields and submit form

const url = 'https://www.citizengo.org/';
const addUrl = 'https://www.citizengo.org/en/node/add/noticia';
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
driver.get(url);

const loginLink = driver.wait(until.elementLocated(By.css('#login-box a')), 20000);

loginLink.click().then(function () {
  let emailField = driver.wait(until.elementLocated(By.css('#edit-login-id'))).sendKeys('your_login');
  let passField = driver.wait(until.elementLocated(By.css('#edit-login-password'))).sendKeys('your_password');
  loginButton = driver.wait(until.elementLocated(By.css('.login-button input'))).click(); // login to CGO main page
}).then(function () {
  driver.wait(until.elementLocated(By.css('.admin-menu-action'))).then(function () {
    driver.get(addUrl);
    driver.wait(until.titleIs('Create Noticia | CitizenGO'));

    driver.wait(until.elementLocated(By.css('#edit-title'))).sendKeys('selenium notica title');
    driver.findElement(By.css('#edit-field-topic-und > option[value="OT"]')).click();

    driver.switchTo().frame(driver.findElement(By.id("edit-body-und-0-value_ifr"))); // enter frame by ID
    driver.wait(until.elementLocated(By.id('tinymce'))).sendKeys('selenium-created notica');
    driver.switchTo().getTitle();

    // TODO: problem going out of iFrame to click submit form button and create a noticia...

  });
});

driver.wait(until.titleIs('some_value')); // do not close browser
