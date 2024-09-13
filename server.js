require('dotenv').config();  // Cargar las variables del archivo .env

const express = require('express');
const { connectDB } = require('./config/db');
const todoRoutes = require('./routes/routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza con tu dominio permitido
  optionsSuccessStatus: 200, // algunos navegadores antiguos (IE11, opciones de SmartTV) fallan con 204
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS antes de definir las rutas
app.use(cors(corsOptions));

// Definir las rutas
app.use('/todos', todoRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


