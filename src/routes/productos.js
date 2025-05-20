const express = require('express');
const fs      = require('fs');
const path    = require('path');
const router  = express.Router();

// Helper para cargar datos
function loadData() {
  const dataPath = path.join(__dirname, '../../data/productos.json');
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

// 1) GET /api/v1/productos
router.get('/', (req, res) => {
  let { cat, slug, pagina = '1', limite = '10' } = req.query;
  pagina = parseInt(pagina, 10);
  limite = parseInt(limite, 10);
  if (isNaN(pagina) || pagina < 1) {
    return res.status(400).json({ error: `'pagina' debe ser >= 1` });
  }
  if (isNaN(limite) || limite < 1) {
    return res.status(400).json({ error: `'limite' debe ser >= 1` });
  }
  let productos = loadData();
  if (cat)    productos = productos.filter(p => p.categoria === cat);
  if (slug)   productos = productos.filter(p => p.slug === slug);

  const total = productos.length;
  const start = (pagina - 1) * limite;
  const resultados = productos.slice(start, start + limite);

  const respuesta = resultados.map(p => ({
    ...p,
    ventaOnline: p.precio <= 200,
    consultaUrl: p.precio > 200 ? '/contacto' : undefined
  }));

  res.json({ total, pagina, limite, resultados: respuesta });
});

// 2) GET /api/v1/productos/slug/:slug
router.get('/slug/:slug', (req, res) => {
  const productos = loadData();
  const slug = req.params.slug;
  const item = productos.find(p => p.slug === slug);
  if (!item) {
    return res.status(404).json({ error: `Producto con slug '${slug}' no encontrado.` });
  }
  const respuesta = {
    ...item,
    ventaOnline: item.precio <= 200,
    consultaUrl: item.precio > 200 ? '/contacto' : undefined
  };
  res.json(respuesta);
});

// 3) GET /api/v1/productos/:id
router.get('/:id', (req, res) => {
  const productos = loadData();
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: `'${req.params.id}' no es un id válido` });
  }
  const item = productos.find(p => p.id === id);
  if (!item) {
    return res.status(404).json({ error: `Producto con id ${id} no encontrado.` });
  }
  const respuesta = {
    ...item,
    ventaOnline: item.precio <= 200,
    consultaUrl: item.precio > 200 ? '/contacto' : undefined
  };
  res.json(respuesta);
});

module.exports = router;
