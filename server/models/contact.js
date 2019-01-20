var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    name: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    },
    number: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {Contact};