Beliccia API

API RESTful construida con Node.js y Express para gestionar el catálogo de productos y colecciones de Beliccia Dresscode. Esta API ofrece endpoints para listar, crear, actualizar y eliminar colecciones y productos, además de permitir paginación y filtrado.

⚙️ Tecnologías

Node.js

Express

MongoDB (opcional, o cambia por tu base de datos preferida)

dotenv para gestión de variables de entorno

nodemon (en desarrollo)

🚀 Instalación

Clonar el repositorio:

git clone https://github.com/tu-usuario/beliccia-api.git
cd beliccia-api

Instalar dependencias:

npm install

Crear un fichero .env en la raíz con las siguientes variables (ajusta según tu config):

PORT=3000
MONGODB_URI=mongodb://<usuario>:<password>@<host>:<puerto>/<base_de_datos>

Levantar en entorno de desarrollo:

npm run dev

La API escuchará en http://localhost:3000/

🛠️ Estructura del Proyecto

beliccia-api/
├── src/
│   ├── controllers/      # Lógica de endpoints
│   ├── models/           # Definición de esquemas (Mongoose o tu ORM)
│   ├── routes/           # Definición de rutas
│   ├── utils/            # Funciones auxiliares
│   ├── server.js         # Punto de entrada de la aplicación
│   └── app.js            # Configuración de Express
├── .env                  # Variables de entorno
├── package.json
├── README.md
└── .gitignore

📚 Endpoints Principales

Método

Ruta

Descripción

GET

/api/v1/collections

Obtener todas las colecciones

GET

/api/v1/collections/:id

Obtener una colección por ID

POST

/api/v1/collections

Crear una nueva colección

PUT

/api/v1/collections/:id

Actualizar una colección existente

DELETE

/api/v1/collections/:id

Eliminar una colección

GET

/api/v1/products

Obtener todos los productos (con paginación/filter)

GET

/api/v1/products/:id

Obtener un producto por ID

POST

/api/v1/products

Crear un nuevo producto

PUT

/api/v1/products/:id

Actualizar un producto existente

DELETE

/api/v1/products/:id

Eliminar un producto

Para más rutas o parámetros de consulta, consulta el código en src/routes.

⚙️ Despliegue en Railway

Conecta tu repo a Railway:

En https://railway.app, crea un nuevo proyecto y vincúlalo a tu repositorio de GitHub.

Selecciona la rama main para desplegar.

Configura variables de entorno en Railway (Settings → Variables):

PORT 3000
MONGODB_URI mongodb://<usuario>:<password>@<host>:<puerto>/<base_de_datos>

Railway detectará tu package.json y ejecutará npm start tras cada push a main.

Accede a tu API en la URL proporcionada por Railway, por ejemplo:

https://beliccia-api-xxxxx.up.railway.app/api/v1/collections

📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

🤝 Contribuciones

¡Las contribuciones son bienvenidas! Abre un Issue o un Pull Request para mejorar este proyecto.

