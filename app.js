const express = require('express');
const morgan = require('morgan');
const peliculasRoutes = require('./routes/peliculas');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345') {
    return res.status(403).json({ error: 'API Key inválida' });
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
