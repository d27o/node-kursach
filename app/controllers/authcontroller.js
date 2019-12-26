var exports = (module.exports = {});

var db = require("../../database/models");

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

exports.userRegistration = function(req, res) {
  res.render("userRegistration", { user: req.user });
};

exports.responsiblePeopleTable = function(req, res) {
  db.ResponsiblePerson.findAll({
    include: [
      {
        model: db.Position
      },
      {
        model: db.ExtraOptions,
        include: [
          {
            model: db.Specialization
          }
        ]
      },
      {
        model: db.Address,
        include: [
          {
            model: db.City
          }
        ]
      }
    ]
  }).then(function(person) {
    res.render("responsiblePeopleTable", {
      responsiblePeople: person,
      user: req.user
    });
  });
};

exports.protocolsTable = function(req, res) {
  db.Protocol.findAll({
    include: [
      {
        model: db.MaterialEvidence,
        include: [
          {
            model: db.TypeOfMaterialEvidence
          }
        ]
      },
      {
        model: db.Place
      },
      {
        model: db.Witness,
        through: db.ProtocolWitness,
        include: [
          {
            model: db.Address,
            include: [
              {
                model: db.City
              }
            ]
          }
        ]
      }
    ]
  }).then(function(protocols) {
    res.render("protocolsTable", { protocols: protocols, user: req.user });
  });
};

exports.registrationsTable = function(req, res) {
  db.Registration.findAll({
    include: [
      {
        model: db.ResponsiblePerson,
        include: [
          {
            model: db.Position
          }
        ]
      },
      {
        model: db.MaterialEvidence,
        include: [
          {
            model: db.TypeOfMaterialEvidence
          }
        ]
      }
    ]
  }).then(function(registrations) {
    res.render("registrationsTable", {
      registrations: registrations,
      user: req.user
    });
  });
};

exports.welcome = function(req, res) {
  res.render("welcome", { user: req.user });
};

exports.extraditionsTable = function(req, res) {
  db.Extradition.findAll({
    include: [
      {
        model: db.Document,
        include: [
          {
            model: db.TypeOfDocument
          },
          {
            model: db.ResponsiblePerson
          }
        ]
      },
      {
        model: db.ResponsiblePerson,
        include: [
          {
            model: db.Position
          }
        ]
      },
      {
        model: db.Registration,
        include: [
          {
            model: db.ResponsiblePerson,
            include: [
              {
                model: db.Position
              }
            ]
          },
          {
            model: db.MaterialEvidence,
            include: [
              {
                model: db.TypeOfMaterialEvidence
              }
            ]
          }
        ]
      }
    ]
  }).then(function(extraditions) {
    res.render("extraditionsTable", {
      extraditions: extraditions,
      user: req.user
    });
  });
};

exports.criminalCaseTable = function(req, res) {
  db.CriminalCase.findAll({
    include: [
      {
        model: db.MaterialEvidence,
        through: db.CriminalCaseMaterialEvidence,
        include: [
          {
            model: db.TypeOfMaterialEvidence
          }
        ]
      },
      {
        model: db.Expertise,
        include: [
          {
            model: db.ResponsiblePerson,
            include: [
              {
                model: db.Position
              },
              {
                model: db.ExtraOptions,
                include: [
                  {
                    model: db.Specialization
                  }
                ]
              }
            ]
          },
          {
            model: db.MaterialEvidence,
            include: [
              {
                model: db.TypeOfMaterialEvidence
              }
            ]
          }
        ]
      }
    ]
  }).then(function(criminalCases) {
    res.render("criminalCaseTable", {
      criminalCases: criminalCases,
      user: req.user
    });
  });
};
