var exports = (module.exports = {});

// exports.signup = function(req, res) {
//   res.render("signup");
// };

exports.login = function(req, res) {
  res.render("login", {layout: 'loginMain'});
};

exports.home = function(req, res) {
  res.render("home");
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
