const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'peliculas.sqlite'
});

const Pelicula = sequelize.define('Pelicula', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  director: { type: DataTypes.STRING },
  anio: { type: DataTypes.INTEGER }
});

sequelize.sync();

module.exports = { sequelize, Pelicula };
