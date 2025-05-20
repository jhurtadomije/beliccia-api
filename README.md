# Beliccia API

API RESTful construida con Node.js y Express para gestionar el catálogo de productos y colecciones de Beliccia Dresscode. Esta API ofrece endpoints para listar, crear, actualizar y eliminar colecciones y productos, y permite paginación, filtrado y lógica de venta online según precio.

---

## ⚙️ Tecnologías

* **Backend**: Node.js, Express
* **Base de datos**: JSON plano (opcional migrar a MongoDB u otra)
* **Variables de entorno**: `dotenv`
* **Desarrollo**: `nodemon`
* **CORS**: configuración de orígenes permitidos

---

## 🚀 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/beliccia-api.git
   cd beliccia-api
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Crear un fichero `.env` en la raíz con:

   ```env
   PORT=3000
   # Si usas MongoDB:
   MONGODB_URI=mongodb://<usuario>:<password>@<host>:<puerto>/<base_de_datos>
   ```
4. Levantar en desarrollo:

   ```bash
   npm run dev
   ```

La API escuchará en [http://localhost:3000/](http://localhost:3000/)

---

## 🛠️ Estructura del Proyecto

```
beliccia-api/
├── public/                # Assets estáticos (imágenes, videos)
│   ├── imagenes/
│   └── videos/
├── data/                  # JSON de productos
│   └── productos.json
├── src/
│   ├── routes/            # Definición de rutas
│   │   ├── colecciones.js
│   │   └── productos.js
│   ├── app.js             # Configuración de Express
│   └── server.js          # Punto de entrada
├── .env                   # Variables de entorno
├── package.json
└── README.md
```

---

## 📚 Endpoints Principales

### Colecciones

| Método | Ruta                             | Descripción                                   |
| ------ | -------------------------------- | --------------------------------------------- |
| GET    | `/api/v1/colecciones`            | Listar todas las colecciones                  |
| GET    | `/api/v1/colecciones/:categoria` | Obtener productos de una colección específica |

### Productos

| Método | Ruta                           | Descripción                               |
| ------ | ------------------------------ | ----------------------------------------- |
| GET    | `/api/v1/productos`            | Listar productos con paginación y filtros |
| GET    | `/api/v1/productos/:id`        | Obtener un producto por su ID             |
| GET    | `/api/v1/productos/slug/:slug` | Obtener un producto por su slug           |

\*\*Query params en \*\*\`\`:

* `?cat=<categoria>`: filtra por categoría (novias, invitada, complementos).
* `?pagina=<n>`: número de página (entero ≥1).
* `?limite=<m>`: elementos por página (entero ≥1).
* `?slug=<slug>`: filtra por slug.
* `?talla=<talla>`: filtra productos que incluyen esa talla.
* `?estilo=<estilo>`: filtra novias por estilo (`Corte A`, `Corte Recto`, `Corte Sirena`, `Corte Princesa`).

**Respuesta**:

```json
{
  "total": 45,
  "pagina": 1,
  "limite": 10,
  "resultados": [
    {
      "id": 1,
      "slug": "modelo-novia-01",
      "nombre": "Modelo Novia 1",
      "categoria": "novias",
      "estilo": "Corte Sirena",
      "descripcion": "Vestido elegante de corte sirena.",
      "imagenes": ["/imagenes/productos/novias/vestido1.jpg"],
      "precio": 180,
      "ventaOnline": true,
      "consultaUrl": null
    },
    // … más productos
  ]
}
```

---

## 💰 Lógica de Venta Online

* Cada producto tiene un campo numérico `precio` (en euros).
* La API añade un campo booleano `ventaOnline`:

  * `true` si `precio <= 200` → el frontend muestra “Añadir al carrito”.
  * `false` si `precio > 200` → el frontend debe mostrar “Solicitar información” y usar `consultaUrl`.
* Campo `consultaUrl` con la ruta al formulario de contacto (ej: `/contacto`).

---

## ☁️ Despliegue en Railway

1. Conecta tu repo a Railway.
2. Configura variables de entorno en la sección Settings:

   * `PORT=3000`
   * `MONGODB_URI` si aplica.
3. Railway detectará el `package.json` y ejecutará `npm start`.
4. La API estará disponible en una URL como:

   ```
   ```

[https://beliccia-api-xxxxx.up.railway.app/api/v1/colecciones](https://beliccia-api-xxxxx.up.railway.app/api/v1/colecciones)

```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Abre un Issue o un Pull Request para mejorar la API.

```
