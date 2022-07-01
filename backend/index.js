const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const books = require('./routes/books')
const app = express()

require('./database')
app.set('port', 3000)

app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads',),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/books", books)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
})