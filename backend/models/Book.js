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
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Book', bookSchema)