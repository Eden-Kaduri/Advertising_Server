const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    userName: String,
    passWord: String,

});

const Admin = mongoose.model('Admins', adminSchema);

module.exports = Admin;