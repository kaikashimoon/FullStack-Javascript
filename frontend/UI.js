import BookService from './services/BookService'
const bookService = new BookService()

import {format} from "timeago.js" 

class UI {
    async renderBooks() {
        const books = await bookService.getBooks();
        const booksCardContainer = document.getElementById('books-cards');
        booksCardContainer.innerHTML = '';
        books.reverse().forEach((book) => {
          const div = document.createElement('div');
          div.className = 'animated fadeInRight';
          div.innerHTML = `
          <div class="card m-2">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${book.imagePath}" class="img-fluid" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-block px-2">
                        <h4 class="card-title text-muted">${book.title}<h4>
                        <p class="card-text text-muted">${book.author}</p>
                        <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                    </div>
                </div>
            </div>
            <div class="card-footer w-100 text-muted">
              ${format(book.created_at)}
            </div>
          </div>
          `;
          booksCardContainer.appendChild(div);
        });
      }

    async addNewBooks(book) { 
       await bookService.postBook(book)
       this.clearBookForm()
       this.renderBooks()
    }

    async clearBookForm() { 
        document.getElementById('book-form').reset()
    }

    async renderMessages(message, colorMessage, secondsToRemove) {
        // Creating a div
        const div = document.createElement('div');
        // Styling the div
        div.className = `message ${colorMessage} mb-4 pl-2 p-2` 
        div.appendChild(document.createTextNode(message));
        // Puting in the documnet
        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');
        container.insertBefore(div, bookForm);
        // Removing the div after some secconds
        setTimeout(() => {
          document.querySelector('.message').remove();
        }, secondsToRemove);
      }

      async deleteBook(bookId) {
        await bookService.deleteBook(bookId);
        this.renderBooks();
      }
    

    }

export default UI;
