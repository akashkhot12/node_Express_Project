const { ObjectId } = require('mongodb');
const { getDb } = require('../config');

const insertTodo = async (req, res) => {
    const { title, dueDate } = req.body;
    try {
        const db = getDb();
        const todo = { userId: req.user.id, title, dueDate, completed: false };
        await db.collection('todos').insertOne(todo);
        res.status(201).send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllTodos = async (req, res) => {
    try {
        const db = getDb();
        const todos = await db.collection('todos').find({ userId: req.user.id }).toArray();
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const db = getDb();
        const todo = await db.collection('todos').findOne({ _id: ObjectId(id), userId: req.user.id });
        if (!todo) return res.status(404).send({ message: 'Todo not found' });
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getTodosByDate = async (req, res) => {
    const { date } = req.params;
    try {
        const db = getDb();
        const todos = await db.collection('todos').find({ userId: req.user.id, dueDate: date }).toArray();
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed, dueDate } = req.body;
    try {
        const db = getDb();
        const result = await db.collection('todos').updateOne(
            { _id: ObjectId(id), userId: req.user.id },
            { $set: { title, completed, dueDate } }
        );
        if (result.matchedCount === 0) return res.status(404).send({ message: 'Todo not found' });
        res.send({ message: 'Todo updated' });
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const db = getDb();
        const result = await db.collection('todos').deleteOne({ _id: ObjectId(id), userId: req.user.id });
        if (result.deletedCount === 0) return res.status(404).send({ message: 'Todo not found' });
        res.send({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};

const searchTodos = async (req, res) => {
    const { keyword } = req.params;
    try {
        const db = getDb();
        const todos = await db.collection('todos').find({ 
            userId: req.user.id, 
            title: { $regex: keyword, $options: 'i' } 
        }).toArray();
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
};

const filterTodos = async (req, res) => {
    const { order } = req.params;
    try {
        const db = getDb();
        const todos = await db.collection('todos').find({ userId: req.user.id }).sort({ dueDate: order === 'asc' ? 1 : -1 }).toArray();
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    insertTodo,
    getAllTodos,
    getTodoById,
    getTodosByDate,
    updateTodo,
    deleteTodo,
    searchTodos,
    filterTodos
};
