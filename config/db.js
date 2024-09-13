// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Conectado a la base de datos PostgreSQL');
  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
    process.exit(1);
  }
};

module.exports = { pool, connectDB }; // Asegúrate de exportar `connectDB` aquí