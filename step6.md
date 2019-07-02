
### Goal

Learn how to use the express framework to build REST API 

Resources : 

 - Express Framework v4.x : http://expressjs.com/
 - Express 4.x documentation : https://expressjs.com/en/4x/api.html

----

## 1) 

Start from scratch a new nodejs project, install express and apply this simple 'hello world' tutorial

----

## 2) 

Build a REST API that use the books.json file, and with the help of express and body-parser middleware, to respond to these APIs :

- /books or /books/ or /books/title or /books/titles : 
    - return the books titles as a json array. Ex: ["Don Quixote", "Hamlet"]
    - with optional query parameters 'maxpages' : filter the books titles that contains this maximum of pages
    - with optional query parameters 'title' : filter the books that titles start with this value 

- /books/isbn : 
    - return all the books ISBN numbers as a json array. Ex: ["9781449325862","9781449365035"]


- /books/isbn/<ISBN> :

    - return the book json object matching the specified ISBN number. The API must return a 404 if the ISBN number do not match any books

----

## 3) 


