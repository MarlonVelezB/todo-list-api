// services/todoService.js
const todoRepository = require('../repositories/todoRepository');

// Método para crear una tarea
exports.createTodo = async (todoData) => {
  return await todoRepository.create(todoData);
};

//Metodo pata editar una tarea
exports.updateTodo = async (id, todoData) => {
  return await todoRepository.update(id, todoData);
};

// Método para obtener todas las tareas
exports.getAllTodos = async () => {
  try {
    return await todoRepository.findAll()
  } catch (error) {
    console.error('Error al obtener todas las tareas en el servicio:', error);
    throw error;
  }
};

// Método para obtener una tarea por ID
exports.getTodoById = async (id) => {
  try {
    return await todoRepository.findById(id);
  } catch (error) {
    console.error('Error al obtener la tarea por ID en el servicio:', error);
    throw error;
  }
};

exports.changeState = async (id, stateComplete) => {
  try{
    return await todoRepository.changeStateComplete(id, stateComplete);
  } catch(error) {
    console.error('Error al tratar de cambiar estado:', error);
    throw error;
  }
}

exports.changeStateAvailable = async (id, stateAvailable) => {
  try{
    return await todoRepository.changeStateAvailable(id, stateAvailable);
  } catch(error) {
    console.error('Error al tratar de cambiar estado:', error);
    throw error;
  }
}
