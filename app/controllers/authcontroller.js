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
  require("../../database/models").ResponsiblePerson.findAll().then(function(person) {
    res.render("responsiblePeopleTable", {responsiblePeople: person});
  });
}

exports.citiesTable = function(req, res) {
  require("../../database/models").City.findAll().then(function(city) {
    res.render("citiesTable", {cities: city});
  });
}

exports.addressesTable = function(req, res) {
  require("../../database/models").Address.findAll().then(function(addresses) {
    res.render("addressesTable", {addresses: addresses});
  });
}

exports.specializationsTable = function(req, res) {
  require("../../database/models").Specialization.findAll().then(function(specializations) {
    res.render("specializationsTable", {specializations: specializations});
  });
}

exports.extraOptionsTable = function(req, res) {
  require("../../database/models").ExtraOptions.findAll().then(function(extraOptions) {
    res.render("extraOptionsTable", {extraOptions: extraOptions});
  });
}

exports.positionsTable = function(req, res) {
  require("../../database/models").Position.findAll().then(function(positions) {
    res.render("positionsTable", {positions: positions});
  });
}

exports.witnessesTable = function(req, res) {
  require("../../database/models").Witness.findAll().then(function(witnesses) {
    res.render("witnessesTable", {witnesses: witnesses});
  });
}

exports.welcome = function(req, res) {
  res.render("welcome");
};
