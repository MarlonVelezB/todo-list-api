# Todo API

## Introducción

Este proyecto es una API para gestionar tareas (todos) desarrollada con Node.js y Express. Proporciona funcionalidades para crear, leer, actualizar y eliminar tareas, con autenticación de usuarios y persistencia de datos.

## Estructura del Proyecto

```
.
├── config
│   └── db.js
├── controllers
│   └── todoController.js
├── dtos
│   └── todoDTO.js
├── middlewares
│   └── authMiddleware.js
├── models
│   └── taskModel.js
├── repositories
│   └── todoRepository.js
├── routes
│   └── routes.js
├── services
│   └── todoService.js
├── README.md
├── package.json
├── pnpm-lock.yaml
└── server.js
```

## Requisitos Previos

- Node.js (versión 14.x o superior)
- pnpm 

## Cómo Empezar

Para empezar a trabajar con el proyecto, sigue estos pasos:

1. Instalar
[NodeJs](https://nodejs.org/en)

2. Instalar PNPM
```
npm install -g pnpm
```
3. Clona el repositorio:
```
git clone [https://github.com/MarlonVelezB/todolist-app.git](https://github.com/MarlonVelezB/todolist-app.git)
cd todo-api
```
4. Instala las dependencias:
```
pnpm install
```
5. Ejecutar y iniciar app
```
pnpm run dev
```

## Ejecución de la API

Para iniciar el servidor en modo de desarrollo:
npm run dev

La API estará disponible en `http://localhost:3000`.

## Endpoints Principales

- `GET /todos`: Obtiene todas las tareas
- `POST /todos`: Crea una nueva tarea
- `GET /todos/:id`: Obtiene una tarea específica
- `PUT /todos/update/:id`: Actualiza una tarea
- `PUT /todos/change-state/:id`: Actualiza estado de completado de una tarea
- `PUT /todos/change-state-available/:id`: Actualiza el estado de borrado de una tarea

Para más detalles sobre los endpoints y su uso, consulta el archivo `routes.js`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

📱 [WhatsApp](https://wa.me/593979574883?text=Hola,%20vi%20tu%20repositorio%20en%20GitHub) - +593 97 957 4883  
✉️ [marlon.velez.brito@gmail.com](mailto:marlon.velez.brito@gmail.com)

