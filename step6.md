
### Goal

Learn how to use the express framework to build REST API 

Resources : 

 - Express Framework v4.x : http://expressjs.com/
 - Express 4.x documentation : https://expressjs.com/en/4x/api.html
 - https://codewithhugo.com/parse-express-json-form-body/

----

## 1) 

Start from scratch a new nodejs project, install express and apply this simple 'hello world' tutorial

----

## 2) 

Build a REST API that use the books.json file, and with the help of express, to respond to these APIs :

- GET /books or /books/ or /books/title or /books/titles : 
    - return the books titles as a json array. Ex: ["Don Quixote", "Hamlet"]
    - with optional query parameters 'maxpages' : filter the books titles that contains this maximum of pages
    - with optional query parameters 'title' : filter the books that titles start with this value 

- GET /books/isbn : 
    - return all the books ISBN numbers as a json array. Ex: ["9781449325862","9781449365035"]


- GET /books/isbn/<ISBN> :

    - return the book json object matching the specified ISBN number. The API must return a 404 if the ISBN number do not match any books

----

## 3) 

Build a REST API to manage todos, with the help of express, and extra modules : uuid, @hapi/joi
(uuid : https://github.com/kelektiv/node-uuid)
(@hapi/joi : https://github.com/hapijs/joi)
 
The API must follow these requirements :

- no DB persistence on disk. Only in memory (like a ES6 Map)
- a Todo must follow these requirements :
	- A unique Id
	- must have a title (string)
	- must have a description (string)
	- must have a done status (boolean)

- API calls to implements are the following :

	- GET /todo : return a todos Id in a json array
	- GET /todo/<Id> : return a todo that match the Id, or 404 if not found
	- POST /todo : add a new todo in the DB, the API must return the new todo Id (generated on the server side). Must return 400 if the json payload does not follow the expected requirements
	- PUT /todo/<Id>/done : must set the todo done status to "true" or return 404 is not found
        - PUT /todo/<Id>/ongoing : must set the todo done status to "false" or return 404 is not found

