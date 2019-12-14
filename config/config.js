// database conection
 pgp = require("pg-promise")(/*options*/);
 exports.db = pgp("postgres://d27o:secret@127.0.0.1:5432/kursach");