// tslint:disable-next-line:comment-format
 //import {element} from 'protractor';

const { Given , When , Then } = require('cucumber');
const { browser, by } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const searchPage = require('../pages/searchpage.po');

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

  When('I search for a valid character', async () => {
    await searchPage.radioBtnPeople.click();
    await searchPage.inputSearch.sendKeys('Chewbacca');
    await searchPage.btnSearch.click();
    await browser.sleep(2000);
  });

When('I search for an invalid character', async () => {
  await searchPage.radioBtnPeople.click();
  await searchPage.inputSearch.sendKeys('Bewchacca');
  await searchPage.btnSearch.click();
  await browser.sleep(2000);
});

When('I search for a valid planet', async () => {
  await searchPage.radioBtnPlanets.click();
  await searchPage.inputSearch.sendKeys('Endor');
  await searchPage.btnSearch.click();
  await browser.sleep(2000);
});

When('I search for an invalid planet', async () => {
  await searchPage.radioBtnPlanets.click();
  await searchPage.inputSearch.sendKeys('DEnor');
  await searchPage.btnSearch.click();
  await browser.sleep(2000);
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
    await browser.sleep(2000);

  });

  When('I click the search button', async () => {
    await searchPage.btnSearch.click();
    await browser.sleep(2000);

  });

  Then('I should get an empty result field', async () => {

    await chai.expect(searchPage.cardBlock.isDisplayed()).to.eventually.be.false;
  });
