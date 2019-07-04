const express = require("express");
const Joi = require('@hapi/joi');
const uuidv4 = require('uuid/v4');

const todoSchema = Joi.object().keys({
    title:Joi.string().min(3).max(100).required(),
    description:Joi.string().min(3).required(),
    done:Joi.boolean().required()
});

const validPayload = (payload) => {
  return todoSchema.validate(payload);
};

const updateStatus = (id, status) => {
        let todo = todos.get(id);
        if(todo) {
            todo.done = status;
            todos.set(id, todo);
        }
};

const todos = new Map();

const app = express();
app.use(express.json({
    type:'application/json'
}));

app.get('/todo', (req, res, next) => {
    res.json([...todos.keys()])
});

app.get('/todo/:id', (req, res, next) => {
    const id = req.params.id;
    if(todos.has(id)) {
        res.json(todos.get(id)).end();
    }
    res.status(404).end();
});

app.post('/todo', (req, res, next) => {
    if(req.body) {
        const validation = validPayload(req.body);
        if(!!!validation.error) {
            const id = uuidv4();
            todos.set(id, req.body);
            res.json({id}).end();
        }
        res.status(400).end(JSON.stringify({error: validation.error}));
    }
    res.status(400).end();
});

app.put('/todo/:id/done', (req, res, next) => {
    const id = req.params.id;
    if(todos.has(id)) {
        updateStatus(id, true);
        res.end();
    }
    res.status(404).end();
});

app.put('/todo/:id/ongoing', (req, res, next) => {
    const id = req.params.id;
    if(todos.has(id)) {
        updateStatus(id, false);
        res.end();
    }
    res.status(404).end();
});

app.listen(3000);
