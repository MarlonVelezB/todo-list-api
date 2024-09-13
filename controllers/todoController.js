// controllers/todoController.js
const todoService = require('../services/todoService');

exports.createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    console.error('ERROR CREATE TASK ', error);
    res.status(500).json({ error: 'Error al crear la tarea: ' });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoService.updateTodo(id, req.body);
    res.status(201).json(todo);
  } catch (error) {
    console.error('ERROR UPDATE TASK ', error);
    res.status(500).json({ error: 'Error al crear la tarea: ' });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error get all ', error);
    res.status(500).json({ error: 'Error al recuperar las tareas' });
  }
};

exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoService.getTodoById(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar la tarea' });
  }
};

exports.changeState = async (req, res) => {
  const { id } = req.params;
  const stateComplete = req.body.stateComplete;
  try {
    const task = await todoService.changeState(id, stateComplete);
    res.status(201).json(task);
  } catch (error) {
    console.log('Error al cambiar estado de la tarea: ', error);
    res.status(500).json({ error: 'Error al cambiar estado de la tarea' });
  }
}

exports.changeStateAvailable = async (req, res) => {
  const { id } = req.params;
  const stateAvailable = req.body.stateAvailable;
  try {
    const task = await todoService.changeStateAvailable(id, stateAvailable);
    res.status(201).json(task);
  } catch (error) {
    console.log('Error al cambiar estado de la tarea: ', error);
    res.status(500).json({ error: 'Error al cambiar estado de la tarea' });
  }
}