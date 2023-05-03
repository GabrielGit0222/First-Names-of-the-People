let peopleNames = require("../country/state/city/index");

let firstName = require("../utilities/utils/index");

let getPeopleInCity = (peopleNames) => {
  return firstName(peopleNames);
};

module.exports = getPeopleInCity;
