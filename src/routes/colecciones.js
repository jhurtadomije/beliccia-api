const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_PATH = path.join(__dirname, '../../data/productos.json');

// GET /api/v1/colecciones
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const cats = [...new Set(data.map(p => p.categoria))];
  const resultado = cats.map(c => ({
    id: c,
    nombre: c.charAt(0).toUpperCase() + c.slice(1)
  }));
  res.json(resultado);
});

// GET /api/v1/colecciones/:categoria
router.get('/:categoria', (req, res) => {
  const categoria = req.params.categoria.toLowerCase();
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const productos = data.filter(p => p.categoria.toLowerCase() === categoria);
  if (productos.length === 0) {
    return res.status(404).json({ error: `Colección '${categoria}' no encontrada.` });
  }
  res.json(productos);
});

module.exports = router;
