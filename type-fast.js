// automatically type all words on the type benchmark page 
// selenium will type in about 600 words per minute - human about 60 :-)

const url = 'https://10fastfingers.com/typing-test/english';
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

driver.get(url);
driver.findElement(By.id('row1')).getAttribute('innerHTML').then(function(profile) {
	let arr = profile.match(/>[a-zA-Z']+</g);
	let inputEl = driver.findElement(By.id('inputfield'));
	for (index in arr) {
		inputEl.sendKeys(arr[index].replace('<','').replace('>',''), Key.SPACE);
	}
});
