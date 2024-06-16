const express = require('express');
const authMiddleware = require('../middleware/auth');
const { 
    insertTodo, 
    getAllTodos, 
    getTodoById, 
    getTodosByDate, 
    updateTodo, 
    deleteTodo, 
    searchTodos, 
    filterTodos 
} = require('../controllers/todoController');
const router = express.Router();

router.use(authMiddleware);

router.post('/', insertTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.get('/date/:date', getTodosByDate);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/search/:keyword', searchTodos);
router.get('/filter/:order', filterTodos);

module.exports = router;