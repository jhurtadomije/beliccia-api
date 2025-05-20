const express = require('express');
const cors = require('cors');
const path = require('path');

const colecciones = require('./routes/colecciones');
const productos   = require('./routes/productos');

const app  = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS globalmente para todos los orígenes
app.use(cors({ origin: '*', credentials: true }));

// Parseo de JSON
app.use(express.json());

// Servir ficheros estáticos con cabeceras CORS
app.use(
  '/imagenes',
  (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  },
  express.static(path.join(__dirname, '..', 'public', 'imagenes'))
);

app.use(
  '/videos',
  (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  },
  express.static(path.join(__dirname, '..', 'public', 'videos'))
);

// Rutas de la API
app.use('/api/v1/colecciones', colecciones);
app.use('/api/v1/productos',   productos);

// Ruta raíz de comprobación
app.get('/', (req, res) => res.send('API Beliccia corriendo'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
