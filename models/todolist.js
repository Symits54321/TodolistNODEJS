const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
        desc:{
            type:String,
            required: true
        },

        category: {
            type:String,
            required: true 
        },

        date: {
            type:String,
            required: true 
        }
        
});

const TodolistSchema = mongoose.model('todoinfo',todolistSchema);

module.exports = TodolistSchema;