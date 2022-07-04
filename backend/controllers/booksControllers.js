const Book = require('../models/Book')

const getBooks = async (req, res) => {
   try {
    const findBooks = await Book.find().lean()
    res.status(201).json(findBooks)
   } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
   }
}

const createBooks = async (req, res) => {  
    try {
        const {title, author, isbn, imagePath} = req.body
        const newBook = new Book({
            title,
            author,
            isbn,
            imagePath,
        })
        const creatingBook = await newBook.save()
        res.status(201).json(creatingBook)
    } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
    }
}

const deleteBook = async (req, res) => {    
    try {
        const findBook = await Book.findById(req.params.id)
        if (!findBook) {
            res.status(404).json({ message: 'Book not found' })
        } 
        await findBook.remove()
        res.status(201).json({ message: 'Book deleted successfully' })
        
    } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
    }
}


module.exports = {
    getBooks,
    createBooks,
    deleteBook
}