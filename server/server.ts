require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const modelsFill = require('./models/modelsFill');

var { mongoose } = require('./db/mongoose');
var { Contact } = require('./models/contact');
var cors = require('cors');



var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(cors());


// app.use(function(req, res, next) {
//   // res.bodyParser.json();
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.post('/contacts', (req, res) => {
    var contact = new Contact({
        name: req.body.name,
        number: req.body.number
    });

    contact.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e.errmsg);
    });
});

app.get('/contacts', (req, res) => {
    Contact.find().then((contacts) => {
        res.send({ contacts });
    }, (e) => {
        res.status(400).send(e.errmsg);
    });
});

app.delete('/contacts/:name', (req, res) => {
    Contact.findOneAndDelete({ name: req.params.name }).then((contact) => {
        if (!contact) {
            return res.status(404).send();
        }
        res.status(200).send({ contact });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/contacts/:name', (req, res) => {
    var name = req.params.name;
    var body = _.pick(req.body, ['name', 'number']);

    Contact.findOneAndUpdate({name}, { $set: body }, { new: true }).then((contact) => {
        if (!contact) {
            return res.status(404).send();
        }

        res.send({ contact });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/status', (req, res) =>{
    res.send({
        csq: Math.floor(Math.random() * 6),
        reg: Boolean((Math.floor(Math.random() * 2))),
        data: Boolean((Math.floor(Math.random() * 2)))
    })
});

app.get('/users', (req, res) =>{
  res.send(modelsFill.getUsers());
});

app.get('/users/:name', (req, res) =>{
    var name = req.params.name;
    res.send(modelsFill.getUserByName(name));
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`)
});

module.exports = { app };