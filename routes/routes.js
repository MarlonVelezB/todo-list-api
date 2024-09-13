const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/update/:id', todoController.updateTodo);
router.put('/change-state/:id', todoController.changeState);
router.put('/change-state-available/:id', todoController.changeStateAvailable);
// router.delete('/:id', todoController.deleteTodo);

module.exports = router;
