import {element, by} from 'protractor';

module.exports = {
  get inputSearch() {
    return element(by.id('query'));
  },
  get btnSearch() {
    return element(by.xpath('//button[@type=\'submit\']'));
  },
  get radioBtnPeople() {
    return element(by.id('people'));
  },
  get radioBtnPlanets() {
    return element(by.id('planets'));
  },
  get labelCharacterName() {
    return element(by.xpath('//h6[@class=\'card-subtitle mb-2 text-muted\']'));
  },
  get labelGender() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(0);
  },
  get labelBirthYear() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(1);
  },
  get labelEyeColor() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(2);
  },
  get labelSkinColor() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(3);
  },
  get labelPlanetName() {
    return element(by.xpath('//h6[@class=\'card-subtitle mb-2 text-muted\']'));
  },
  get labelPopulation() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(0);
  },
  get labelClimate() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(1);
  },
  get labelGravity() {
    return element.all(by.xpath('//div[@class=\'col-sm-10\']')).get(2);
  },
  get resultNotFound() {
    return element(by.xpath('//div[contains(text(),\'Not found\')]'));
  },
  get cardBlock() {
    return element(by.xpath('//app-character//div[@class=\'card\']'));
  },
};
