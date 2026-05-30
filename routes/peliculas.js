const express = require('express');
const router = express.Router();


let peliculas = [];
let idCounter = 1;


router.get('/', (req, res) => {
  res.json(peliculas);
});


router.post('/', (req, res) => {
  const { titulo, director, anio } = req.body;
  const nueva = { id: idCounter++, titulo, director, anio };
  peliculas.push(nueva);
  res.status(201).json(nueva);
});


router.get('/:id', (req, res) => {
  const pelicula = peliculas.find(p => p.id == req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
  res.json(pelicula);
});


router.put('/:id', (req, res) => {
  const pelicula = peliculas.find(p => p.id == req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
  pelicula.titulo = req.body.titulo || pelicula.titulo;
  pelicula.director = req.body.director || pelicula.director;
  pelicula.anio = req.body.anio || pelicula.anio;
  res.json(pelicula);
});


router.delete('/:id', (req, res) => {
  peliculas = peliculas.filter(p => p.id != req.params.id);
  res.json({ mensaje: 'Película eliminada' });
});

module.exports = router;
