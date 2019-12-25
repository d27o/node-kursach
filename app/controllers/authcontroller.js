var exports = (module.exports = {});

// exports.signup = function(req, res) {
//   res.render("signup");
// };

exports.login = function(req, res) {
  res.render("login", { layout: "loginMain" });
};

exports.home = function(req, res) {
  res.render("home", { layout: "loginMain" });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};

exports.responsiblePeopleTable = function(req, res) {
  require("../../database/models")
    .ResponsiblePerson.findAll({
      include: [
        {
          model: require("../../database/models").Position
        },
        {
          model: require("../../database/models").ExtraOptions,
          include: [
            {
              model: require("../../database/models").Specialization
            }
          ]
        }
      ]
    })
    .then(function(person) {
      res.render("responsiblePeopleTable", { responsiblePeople: person });
    });
};

exports.protocolsTable = function(req, res) {
  require("../../database/models")
    .Protocol.findAll({
      include: [
        {
          model: require("../../database/models").MaterialEvidence,
          include: [
            {
              model: require("../../database/models").TypeOfMaterialEvidence
            }
          ]
        },
        {
          model: require("../../database/models").Place
        },
        {
          model: require("../../database/models").Witness,
          through: require("../../database/models").ProtocolWitness,
          include: [
            {
              model: require("../../database/models").Address,
              include: [
                {
                  model: require("../../database/models").City
                }
              ]
            }
          ]
        }
      ]
    })
    .then(function(protocols) {
      res.render("protocolsTable", { protocols: protocols });
    });
};



exports.registrationsTable = function(req, res) {
  require("../../database/models")
    .Registration.findAll({
      include: [
        {
          model: require("../../database/models").ResponsiblePerson,
          include: [{
            model: require("../../database/models").Position
          }]
        },
        {
          model: require("../../database/models").MaterialEvidence,
          include: [
            {
              model: require("../../database/models").TypeOfMaterialEvidence
            }
          ]
        }
      ]
    })
    .then(function(registrations) {
      res.render("registrationsTable", { registrations: registrations });
    });
};

exports.welcome = function(req, res) {
  res.render("welcome");
};
