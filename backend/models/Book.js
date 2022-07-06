const { Schema, model } = require("mongoose");

const bookSchema  = new Schema({ 
    title: {
        type: "string",
        required: true
    },
    author: { 
        type: "string",
        required: true
    },
    isbn: { 
        type: "string",
        required: true
    },
    imagePath: {
        type: "string",
        required: true
    },
    created_at: { 
        type: Date, 
        required: true, 
        default: Date.now }

}, { 
    versionKey: false
})

module.exports = model('Book', bookSchema)