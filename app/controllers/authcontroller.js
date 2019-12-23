var exports = (module.exports = {});

// exports.signup = function(req, res) {
//   res.render("signup");
// };

exports.login = function(req, res) {
  res.render("login", {layout: 'loginMain'});
};

exports.home = function(req, res) {
  res.render("home", {layout: "loginMain"});
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};

exports.responsiblePeopleTable = function(req, res) {
  let responsiblePerson = require("../../database/models").ResponsiblePerson;
  responsiblePerson.findAll().then(function(person) {
    res.render("responsiblePeopleTable", {responsiblePeople: person});
  });
}

exports.citiesTable = function(req, res) {
  let city = require("../../database/models").City;
  city.findAll().then(function(city) {
    res.render("citiesTable", {cities: city});
  });
}

exports.addressesTable = function(req, res) {
  let address = require("../../database/models").Address;
  address.findAll().then(function(addresses) {
    res.render("addressesTable", {addresses: addresses});
  });
}

exports.welcome = function(req, res) {
  res.render("welcome");
};
