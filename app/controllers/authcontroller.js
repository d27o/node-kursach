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
          include: [
            {
              model: require("../../database/models").Position
            }
          ]
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

exports.extraditionsTable = function(req, res) {
  require("../../database/models")
    .Extradition.findAll({
      include: [
        {
          model: require("../../database/models").Document,
          include: [
            {
              model: require("../../database/models").TypeOfDocument
            },
            {
              model: require("../../database/models").ResponsiblePerson
            }
          ]
        },
        {
          model: require("../../database/models").ResponsiblePerson,
          include: [
            {
              model: require("../../database/models").Position
            }
          ]
        },
        {
          model: require("../../database/models").Registration,
          include: [
            {
              model: require("../../database/models").ResponsiblePerson,
              include: [
                {
                  model: require("../../database/models").Position
                }
              ]
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
        }
      ]
    })
    .then(function(extraditions) {
      res.render("extraditionsTable", { extraditions: extraditions });
    });
};

exports.criminalCaseTable = function(req, res) {
  require("../../database/models")
    .CriminalCase.findAll({
      include: [
        {
          model: require("../../database/models").MaterialEvidence,
          through: require("../../database/models")
            .CriminalCaseMaterialEvidence,
          include: [
            {
              model: require("../../database/models").TypeOfMaterialEvidence
            }
          ]
        },
        {
          model: require("../../database/models").Expertise,
          include: [
            {
              model: require("../../database/models").ResponsiblePerson,
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
        }
      ]
    })
    .then(function(criminalCases) {
      res.render("criminalCaseTable", { criminalCases: criminalCases });
    });
};
