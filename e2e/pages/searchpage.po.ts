import { element, by } from 'protractor';

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
      return element(by.xpath('//h6[@class=\'card-subtitle mb-2 text-mute\']'));
    },
    get labelGender() {
      return element(by.xpath('//div[@class=\'col-sm-10\'][0]'));
    },
    get labelBirthYear() {
      return element(by.xpath('//div[@class=\'col-sm-10\'][1]'));
    },
    get labelEyeColor() {
      return element(by.xpath('//div[@class=\'col-sm-10\'][2]'));
    },
    get labelSkinColor() {
      return element(by.xpath('//div[@class=\'col-sm-10\'][3]'));
    },
  };
