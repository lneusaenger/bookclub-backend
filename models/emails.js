const mongoose = require('mongoose')

const Schema = mongoose.Schema

const emailSchema = new Schema({
        address : {
            type: String,
            require: true,
            unique: true
        }
    });

module.exports = mongoose.model('Email', emailSchema)