const express = require("express");

const bookDB = require('../../books');

const getTitles =() => {
    return bookDB.books.map(b => b.title);
};

const getISBNs = () => {
    return bookDB.books.map(b => b.isbn);
};

const getBookByISBN = (isbn) => {
    return bookDB.books.find(b => b.isbn === isbn);
};

const filterByTitlesAndMaxPage = (title, maxPages) => {
    return bookDB.books
        .filter(b => {
            const startwith = !!title ? b.title.startsWith(title) : true;
            const pages = !!maxPages ? b.pages <= maxPages : true;
            return startwith && pages;
        })
        .map(b => b.title);
};

const app = express();
app.use(express.json());

app.get('', (req, res, next) => {
    res.end('pong');
});

app.get('/books($|/|/title|/titles)', (req, res, next) => {

    let maxPages = null;
    let titleStartWith = null;
    if(req.query.maxpages && !isNaN(req.query.maxpages) && req.query.maxpages > 0) {
        maxPages = req.query.maxpages;
    }

    if(req.query.title && typeof req.query.title === 'string') {
        titleStartWith = req.query.title;
    }

    if(maxPages || titleStartWith) {
        res.json(filterByTitlesAndMaxPage(titleStartWith, maxPages));
    } else {
        res.json(getTitles());
    }
});

app.get('/books/isbn', (req, res, next) => {
    res.json(getISBNs());
});

app.get('/books/isbn/:isbn', (req, res, next) => {
    const isbn = req.params.isbn;
    const book = getBookByISBN(isbn);

    if(book) {
        res.json(book);
    }

    res.status(404).end();
});

app.listen(3000);
