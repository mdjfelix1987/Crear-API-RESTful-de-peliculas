const { Pelicula } = require('../modules/db');

async function getAll() { return await Pelicula.findAll(); }
async function getById(id) { return await Pelicula.findByPk(id); }
async function create(data) { return await Pelicula.create(data); }
async function update(id, data) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  return await pelicula.update(data);
}
async function remove(id) {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return pelicula;
}

module.exports = { getAll, getById, create, update, remove };
