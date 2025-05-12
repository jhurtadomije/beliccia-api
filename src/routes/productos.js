const express = require('express');
const fs = require('fs');
const router = express.Router();

// GET /api/v1/productos
// GET /api/v1/productos?cat=novias
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(
    __dirname + '/../../data/productos.json', 'utf8'
  ));
  const { cat, slug } = req.query;

  let results = data;
  if (cat) results = results.filter(p => p.categoria === cat);
  if (slug) results = results.filter(p => p.slug === slug);

  res.json(results);
});

module.exports = router;