var authController = require("../controllers/authcontroller.js");
var db = require("../../database/models");

module.exports = function(app, passport) {
  //   app.get("/signup", authController.signup);

  app.get("/login", authController.login);

  app.get("/registration", isAdmin, authController.userRegistration);

  app.post(
    "/registration",
    isAdmin,
    passport.authenticate("local-registration", {
      successRedirect: "/registration",
      failureRedirect: "/registration"
    })
  );

  app.get("/", authController.home);

  app.get("/logout", authController.logout);

  app.get("/welcome", isLoggedIn, authController.welcome);

  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/welcome",
      failureRedirect: "/login"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/login");
  }

  function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin === true) {
      return next();
    } else if (req.isAuthenticated()) {
      res.sendStatus(401);
    } else {
      res.redirect("/login");
    }
  }

  app.get(
    "/tables/responsiblePeople",
    isLoggedIn,
    authController.responsiblePeopleTable
  );

  app.post("/api/responsiblePeople", function(req, res) {
    db.ResponsiblePerson.create({
      name: req.body.name,
      patronymicName: req.body.patronymicName,
      lastName: req.body.lastName,
      PositionId: req.body.PositionId,
      AddressId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function(responsiblePerson) {
      res.redirect("/tables/responsiblePeople");
    });
  });

  app.delete("/api/responsiblePeople/:id", function(req, res) {
    db.ResponsiblePerson.destroy({ where: { id: req.params.id } }).then(
      function(responsiblePerson) {
        res.redirect("/tables/responsiblePeople");
      }
    );
  });

  app.put("/api/responsiblePeople/:id", function(req, res) {
    console.log(req.body.json)
    db.ResponsiblePerson.update(
      {
        name: req.body.name,
        patronymicName: req.body.patronymicName,
        lastName: req.body.lastName,
        PositionId: req.body.PositionId,
        AddressId: 1,
      },
      {
        where: { id: req.params.id }
      }
    ).then(function(responsiblePerson) {
      res.redirect("/tables/responsiblePeople");
    });
  });

  app.get("/tables/protocols", isLoggedIn, authController.protocolsTable);

  app.get(
    "/tables/registrations",
    isLoggedIn,
    authController.registrationsTable
  );

  app.get("/tables/extraditions", isLoggedIn, authController.extraditionsTable);

  app.get(
    "/tables/criminalCases",
    isLoggedIn,
    authController.criminalCaseTable
  );
};
