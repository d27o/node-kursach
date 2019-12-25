var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
//   app.get("/signup", authController.signup);

  app.get("/login", authController.login);

//   app.post(
//     "/signup",
//     passport.authenticate("local-signup", {
//       successRedirect: "/dashboard",
//       failureRedirect: "/signup"
//     })
//   );

  app.get("/", authController.home);

  app.get("/logout", authController.logout);

  app.get("/welcome", isLoggedIn, authController.welcome)

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

  app.get("/tables/responsiblePeople", isLoggedIn ,authController.responsiblePeopleTable)

  app.get("/tables/protocols", isLoggedIn ,authController.protocolsTable)
  
  app.get("/tables/registrations", isLoggedIn ,authController.registrationsTable)

  app.get("/tables/extraditions", isLoggedIn ,authController.extraditionsTable)

  app.get("/tables/criminalCases", isLoggedIn ,authController.criminalCaseTable)
};
