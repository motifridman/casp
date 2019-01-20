require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var {Contact} = require('./models/contact')

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/contacts', (req, res) => {
    var contact = new Contact({
        name: req.body.name,
        number: req.body.number
    });

    // Contact.findOne({name: contact.name}).then((doc) =>
    // {
    //     throw new Error(`The name ${contact.name} is already exist`);
    //     //res.status(404).send({error: `The name ${contact.name} is already exist`, doc})
    // }, (doc) =>{
    //     Contact.findOne({})
    // })

    contact.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/contacts', (req, res) => {
    Contact.find().then((contacts) => {
        res.send({ contacts });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`)
});

module.exports = { app };