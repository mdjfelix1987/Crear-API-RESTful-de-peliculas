const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Funciona el GET /peliculas' });
});

module.exports = router;
