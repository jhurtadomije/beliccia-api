const express = require('express');
const cors = require('cors');
const path = require('path');

const colecciones = require('./routes/colecciones');
const productos   = require('./routes/productos');

const app  = express();
const PORT = process.env.PORT || 3000;

// Permitir peticiones CORS desde tus frontends
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://beliccia-dresscode.vercel.app',                         // Production
    'https://beliccia-dresscode-git-main-jose-ramons-projects-9506e846.vercel.app',  // Preview main
    'https://beliccia-dresscode-k97jgv7rq-jose-ramons-projects-9506e846.vercel.app'   // Otro preview
  ],
  credentials: true
}));

// Parseo JSON (para futuros endpoints POST, si los tuvieras)
app.use(express.json());

// ————————————————————————————————
// Servir ficheros estáticos
// ————————————————————————————————
// Carpeta raiz del proyecto
//   beliccia-api-express/
//   ├── public/
//   │   ├── imagenes/
//   │   └── videos/
//   └── src/
//       └── server.js

// Montamos /imagenes → public/imagenes
app.use(
  '/imagenes',
  express.static(path.join(__dirname, '..', 'public', 'imagenes'))
);

// Montamos /videos → public/videos
app.use(
  '/videos',
  express.static(path.join(__dirname, '..', 'public', 'videos'))
);

// ————————————————————————————————
// Rutas de la API
// ————————————————————————————————
app.use('/api/v1/colecciones', colecciones);
app.use('/api/v1/productos',   productos);

// Ruta raíz de comprobación
app.get('/', (req, res) => res.send('API Beliccia corriendo'));

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
