const express = require('express');
const morgan = require('morgan');
const peliculasRoutes = require('./routes/peliculas');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Middleware validarApiKey
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345') {
    return res.status(403).json({ error: 'API Key inválida' });
  }
  next();
});

app.use('/peliculas', peliculasRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
