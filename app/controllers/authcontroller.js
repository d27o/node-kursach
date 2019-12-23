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

exports.typeOfDocumentsTable = function(req, res) {
  require("../../database/models").TypeOfDocument.findAll().then(function(typeOfDocuments) {
    res.render("typeOfDocumentsTable", {typeOfDocuments: typeOfDocuments});
  });
}

exports.placesTable = function(req, res) {
  require("../../database/models").Place.findAll().then(function(places) {
    res.render("placesTable", {places: places});
  });
}

exports.protocolsTable = function(req, res) {
  require("../../database/models").Protocol.findAll().then(function(protocols) {
    res.render("protocolsTable", {protocols: protocols});
  });
}

exports.documentsTable = function(req, res) {
  require("../../database/models").Document.findAll().then(function(documents) {
    res.render("documentsTable", {documents: documents});
  });
}

exports.typeOfMaterialEvidencesTable = function(req, res) {
  require("../../database/models").TypeOfMaterialEvidence.findAll().then(function(typeOfMaterialEvidences) {
    res.render("typeOfMaterialEvidencesTable", {typeOfMaterialEvidences: typeOfMaterialEvidences});
  });
}

exports.materialEvidencesTable = function(req, res) {
  require("../../database/models").MaterialEvidence.findAll().then(function(materialEvidences) {
    res.render("materialEvidencesTable", {materialEvidences: materialEvidences});
  });
}

exports.registrationsTable = function(req, res) {
  require("../../database/models").Registration.findAll().then(function(registrations) {
    res.render("registrationsTable", {registrations: registrations});
  });
}

exports.welcome = function(req, res) {
  res.render("welcome");
};
