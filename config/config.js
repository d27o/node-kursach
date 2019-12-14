// database conection
   export var pgp = require("pg-promise")(/*options*/);
   export var db = pgp("postgres://d27o:secret@127.0.0.1:5432/kursach");