const mongoose = require('mongoose');
const emailValidation = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: [emailValidation, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,

    },
    languages:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Language'
        }]

},
    { toJSON: { virtuals: true, id: false }, }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;