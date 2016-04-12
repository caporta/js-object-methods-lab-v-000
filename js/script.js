'use strict';

var President = function (name, party, years, state) {
  this.name = name;
  this.politicalParty = party;
  this.yearsInOffice = years;
  this.homeState = state;
};

President.prototype.veto = function () {
  return "NO!";
};

President.prototype.passBill = function () {
  return "You can do that!";
};

President.prototype.doCharity = function () {
  return "I like to help people.";
};

President.prototype.conductPressInterview = function () {
  return "I am proud to be an American.";
};

President.prototype.sayHi = function () {
  var cannedGreeting = "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
  return cannedGreeting;
};
