const db = require('../database');

const Opiskelija = {
  getAll: function(callback) {
    return db.query('select * from Opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(Opiskelija, callback) {
    return db.query(
      'insert into Opiskelija (Etunimi,Sukunimi,Osoite, Luokkatunnus) values(?,?,?,?)',
      [Opiskelija.Etunimi, Opiskelija.Sukunimi, Opiskelija.Osoite, Opiskelija.Luokkatunnus ],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, Opiskelija, callback) {
    return db.query(
      'update Opiskelija set Etunimi=?,Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [Opiskelija.Etunimi, Opiskelija.Sukunimi, Opiskelija.Osoite, Opiskelija.Luokkatunnus, id],
      callback
    );
  }
};
module.exports = Opiskelija;