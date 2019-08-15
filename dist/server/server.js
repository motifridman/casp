require('./config/config');
const path = require('path');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const modelsFill = require('./models/modelsFill');
const socketIO = require('socket.io');
const http = require('http');
var { mongoose } = require('./db/mongoose');
var { Contact } = require('./models/contact');
var cors = require('cors');
// var statusTimer;
const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT;
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(cors());
let statusTimer;
let statusFunction = function () {
    io.emit('newStatus', {
        csq: Math.floor(Math.random() * 6),
        reg: Boolean((Math.floor(Math.random() * 2))),
        data: Boolean((Math.floor(Math.random() * 2)))
    });
};
// app.use(function(req, res, next) {
//   // res.bodyParser.json();
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
io.on('connection', (socket) => {
    statusTimer = setInterval(statusFunction, 5000);
    console.log('New User Connected');
    socket.on('stopStatus', (params, callback) => {
        clearInterval(statusTimer);
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
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
    Contact.findOneAndUpdate({ name }, { $set: body }, { new: true }).then((contact) => {
        if (!contact) {
            return res.status(404).send();
        }
        res.send({ contact });
    }).catch((e) => {
        res.status(400).send();
    });
});
app.get('/status', (req, res) => {
    res.send({
        csq: Math.floor(Math.random() * 6),
        reg: Boolean((Math.floor(Math.random() * 2))),
        data: Boolean((Math.floor(Math.random() * 2)))
    });
});
app.get('/users', (req, res) => {
    res.send(modelsFill.getUsers());
});
app.get('/users/:name', (req, res) => {
    var name = req.params.name;
    res.send(modelsFill.getUserByName(name));
});
server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
module.exports = { app };
//# sourceMappingURL=server.js.map