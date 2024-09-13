# Todo API

## Introducción

Este proyecto es una API para gestionar tareas (todos) desarrollada con Node.js y Express. Proporciona funcionalidades para crear, leer, actualizar y eliminar tareas, con autenticación de usuarios y persistencia de datos.

## Estructura del Proyecto

```
todo-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── todoController.js
├── dtos/
│   └── todoDTO.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── taskModel.js
├── repositories/
│   └── todoRepository.js
├── services/
│   └── todoService.js
├── routes/
│   └── routes.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Requisitos Previos

- Node.js (versión 14.x o superior)
- pnpm (normalmente viene con Node.js)

## Configuración

1. Clona el repositorio:
git clone https://github.com/tu-usuario/todo-api.git
cd todo-api

2. Instala las dependencias:
npm install

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todo_db
JWT_SECRET=tu_secreto_jwt

## Ejecución de la API

Para iniciar el servidor en modo de desarrollo:
npm run dev

Para iniciar el servidor en modo de producción:
npm start

La API estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## Endpoints Principales

- `GET /todos`: Obtiene todas las tareas
- `POST /todos`: Crea una nueva tarea
- `GET /todos/:id`: Obtiene una tarea específica
- `PUT /todos/update/:id`: Actualiza una tarea
- `PUT /todos/change-state/:id`: Actualiza una tarea
- `PUT /todos/change-state-available/:id`: Actualiza una tarea

Para más detalles sobre los endpoints y su uso, consulta el archivo `routes.js`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

📱 [WhatsApp](https://wa.me/593979574883?text=Hola,%20vi%20tu%20repositorio%20en%20GitHub) - +593 97 957 4883  
✉️ [marlon.velez.brito@gmail.com](mailto:marlon.velez.brito@gmail.com)

