# Simple API

An API server for built with NodeJs to demonstrate jwt, json patching and thumbnail generation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Inside the project directory, run

```
npm install

```
to install required dependencies.

### Credentials
This application requires a secret to work well, on your project directory:
* Create an env file
* Inside .env file, type the following : 

```
SECRET="<secret>"
```
*N/B: Replace secret with any text of your choice*
### Testing
To start the API server run

```
npm start
```
You can then start making requests via postman.

To test the application on your local machine, run

```
npm test
```

To test the application with code-coverage, run

```
npm test-with-coverage
```

A code coverage report will be seen on your console.

## API Endpoints

### Login
You can a new user login by sending a POST request to https://localhost:3000/api/login
Request body should contain username and password; the API will return a token for the user which will be used for future requests to the server.
*Note: Any username/password combination is accepted*

### JSON Patch
This endpoint accepts two parameters (document and patch) which are JSON objects.
Send a PATCH request to https://localhost:3000/api/patch?token=validToken and the API will return a valid patched JSON object.
*Note: Replace validToken with the token gotten from the login for authentication*

### Thumbnail Generation
This endpoint accepts an image url, generates a 50x50 thumbnail image and returns it to the user.
Send a GET request to https://localhost:3000/api/thumbnail?img=ImageUrl&token=validToken
*Note:  Replace imgUrl with the url of the image and validToken with the token gotten from the login for authentication*

## Built With

* [Mocha](http://mochajs.org) - For automated tests.
* [Istanbul](https://www.istanbul.js.org) - For test coverage.
* [jwt](https://www.npmjs.com/package/mysql2) - Token generation and verification.
* [node-thumbnail](https://www.npmjs.com/package/node-thumbnail) - Fast thumbnail generation in Node.
* [should](https://www.npmjs.com/package/should) - Expressive assertion library.
* [supertest](https://www.npmjs.com/package/supertest) - High level HTTP tests.

## Author

* **Ibe Ogele** - [ibesoft11](https://github.com/ibesoft11)