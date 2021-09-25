const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: { type: String, default: 'Number' },
    email: { type: String, default: 'Number' },
    password: {
        type: String, default: 'Number'
    },
});

module.exports = User = mongoose.model('User', UserSchema);