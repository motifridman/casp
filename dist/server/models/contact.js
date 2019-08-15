var mongoose = require('mongoose');
var Contact = mongoose.model('Contact', {
    name: {
        type: String,
        require: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    number: {
        type: String,
        require: true,
        minLength: 1,
        trim: true,
        unique: true
    }
});
module.exports = { Contact };
//# sourceMappingURL=contact.js.map