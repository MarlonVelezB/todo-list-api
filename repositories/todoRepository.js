// repositories/todoRepository.js
const { pool } = require('../config/db'); // Importar la instancia de pool

exports.create = async (todoData) => {
  const { title, state_completed, status_available, priority } = todoData;
  const query = `
    INSERT INTO task (title, state_completed, status_available, priority)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  
  try {
    const result = await pool.query(query, [title, state_completed, status_available, priority]);
    return result.rows[0]; // Devolver la fila recién creada
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error;
  }
};

exports.update = async (id, todoData) => {
  const { title, state_completed, status_available, priority } = todoData;
  const query = `
    UPDATE task
    SET title = $1, state_completed = $2, status_available = $3, priority = $4
    WHERE id = $5
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [title, state_completed, status_available, priority, id]);
    return result.rows[0]; // Devolver la fila actualizada
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
    throw error;
  }
};


exports.findAll = async () => {
  const query = `
    SELECT * FROM task;
  `;

  try {
    // Ejecuta la consulta de selección
    const result = await pool.query(query);
    return result.rows; // Devuelve todas las filas seleccionadas
  } catch (error) {
    console.error('Error al recuperar las tareas:', error);
    throw error;
  }
};

exports.findById = async (id) => {
  const query = `
    SELECT * FROM task
    WHERE id = $1;
  `;

  try {
    // Ejecuta la consulta con un filtro
    const result = await pool.query(query, [id]);
    return result.rows[0]; // Devuelve la fila encontrada por el ID
  } catch (error) {
    console.error('Error al recuperar la tarea:', error);
    throw error;
  }
};

/**
 * Cambia el estado de completado de una tarea.
 * @param {number} id - El ID de la tarea que se desea actualizar.
 * @param {boolean} state_completed - El nuevo estado de completado de la tarea.
 * @returns {Promise<object>} - La tarea actualizada.
 * @throws {Error} - Si ocurre un error al realizar la consulta.
 */
exports.changeStateComplete = async (id, state_completed) => {

  const query = `
  UPDATE task
  SET state_completed = $2
  WHERE id = $1
  RETURNING *;
  `;

  try{
    const result = await pool.query(query, [id, state_completed]);
    if (result.rows.length === 0) {
      throw new Error(`No se encontró la tarea con ID ${id}`);
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error al cambiar state completed: ', error);
    throw error;
  }
}


exports.changeStateComplete = async (id, state_completed) => {

  const query = `
  UPDATE task
  SET state_completed = $2
  WHERE id = $1
  RETURNING *;
  `;

  try{
    const result = await pool.query(query, [id, state_completed]);
    if (result.rows.length === 0) {
      throw new Error(`No se encontró la tarea con ID ${id}`);
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error al cambiar state completed: ', error);
    throw error;
  }
}

exports.changeStateAvailable = async (id, state_available) => {

  const query = `
  UPDATE task
  SET available = $2
  WHERE id = $1
  RETURNING *;
  `;

  try{
    const result = await pool.query(query, [id, state_available]);
    if (result.rows.length === 0) {
      throw new Error(`No se encontró la tarea con ID ${id}`);
    }
    return result.rows[0];
  } catch (error) {
    console.error('Error al cambiar state completed: ', error);
    throw error;
  }
}