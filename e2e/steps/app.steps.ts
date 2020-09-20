import {element, protractor} from 'protractor';

const {Given, When, Then} = require('cucumber');
const {browser, by} = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const searchPage = require('../pages/searchpage.po');

Given('The app is open on {string}', {timeout: 25 * 1000}, async (string) => {
  await browser.get('http://' + string + ':4200/');
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

Then('the details of the character are displayed', async () => {
  await chai.expect(searchPage.labelCharacterName.getAttribute('innerText'))
    .to.eventually.contain('Chewbacca');
  await chai.expect(searchPage.labelGender.getAttribute('innerText'))
    .to.eventually.contain('male');
  await chai.expect(searchPage.labelBirthYear.getAttribute('innerText'))
    .to.eventually.contain('200BBY');
  await chai.expect(searchPage.labelEyeColor.getAttribute('innerText'))
    .to.eventually.contain('blue');
  await chai.expect(searchPage.labelSkinColor.getAttribute('innerText'))
    .to.eventually.contain('unknown');
});

Then('the details of the planet are displayed', async () => {
  await chai.expect(searchPage.labelPlanetName.getAttribute('innerText'))
    .to.eventually.contain('Endor');
  await chai.expect(searchPage.labelPopulation.getAttribute('innerText'))
    .to.eventually.contain('30000000');
  await chai.expect(searchPage.labelClimate.getAttribute('innerText'))
    .to.eventually.contain('temperate');
  await chai.expect(searchPage.labelGravity.getAttribute('innerText'))
    .to.eventually.contain('0.85 standard');
});

Then('a message is display that nothing is found', async () => {
  await chai.expect(searchPage.resultNotFound.getAttribute('innerText'))
    .to.eventually.contain('Not found');
});

When('I clear the search field', async () => {
  await searchPage.inputSearch.clear();
});

When('I click the search button', async () => {
  await searchPage.btnSearch.click();
});

Then('I should get an empty result field', async () => {
  await chai.expect(searchPage.cardBlock.isDisplayed()).to.eventually.be.false;
});

When(/^I enter "([^"]*)" in the search field$/, async (searchQuery) => {
  await searchPage.inputSearch.sendKeys(searchQuery);
});

When('I press enter', async () => {
  await searchPage.btnSearch.sendKeys(protractor.Key.ENTER);
});

When(/^I search for planet "([^"]*)"$/, async (planetName) => {
  await searchPage.radioBtnPlanets.click();
  await searchPage.inputSearch.sendKeys(planetName);
  await searchPage.btnSearch.click();
});

When(/^I search for character "([^"]*)"$/, async (characterName) => {
  await searchPage.radioBtnPeople.click();
  await searchPage.inputSearch.sendKeys(characterName);
  await searchPage.btnSearch.click();
});

When('I switch to search for people', async () => {
  await searchPage.radioBtnPeople.click();
})
;
Then(/^I should get multiple results$/, async () => {
  const result = element.all(by.xpath('//h6[@class=\'card-subtitle mb-2 text-muted\']'));

  await browser.sleep(500);
  await result.count().then(function (totalResults) {
    chai.expect(totalResults).to.be.above(1);
  });
});
