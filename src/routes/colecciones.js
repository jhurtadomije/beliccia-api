const express = require('express');
const fs = require('fs');
const router = express.Router();

// GET /api/v1/colecciones
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(
    __dirname + '/../../data/productos.json', 'utf8'
  ));
  const cats = [...new Set(data.map(p => p.categoria))];
  res.json(cats.map(c => ({ id: c, nombre: c.charAt(0).toUpperCase()+c.slice(1) })));
});

module.exports = router;