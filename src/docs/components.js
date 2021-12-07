
module.exports = {
    components: {
        schemas: {
          // id model
          id: {
            type: "string", // data type
            description: "An id of a user", // desc
            example: "1", // example of an id
          },
          // todo model
          Todo: {
            type: "object", // data type
            properties: {
              id: {
                type: "string", // data-type
                description: "Todo identification number", // desc
                example: "ytyVgh", // example of an id
              },
              title: {
                type: "string", // data-type
                description: "Todo's title", // desc
                example: "Coding in JavaScript", // example of a title
              },
              completed: {
                type: "boolean", // data type
                description: "The status of the todo", // desc
                example: false, // example of a completed value
              },
            },
          },
          // User Schema
          User: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data-type
                description: "User identification number", // desc
                example: "luciano", // example of an id
              },
              password: {
                type: "string", // data-type
                description: "User's password", // desc
                example: "1234567", // example of a title
              },
              completed: {
                type: "boolean", // data type
                description: "The status of the user", // desc
                example: false, // example of a completed value
              },
            },
          },
          
          // User Id model
          UserId: {
            type: "object", // data type
            properties: {
              id: {
                type: "number", // data-type
                description: "User identification number", // desc
                example: "1010", // example of an id
                },
              username: {
                type: "string", // data type
                description: "User's username", // desc
                example: "luciano", // example of a title
              },
              password: {
                type: "string", // data type
                description: "password", // desc
                example: "123456", // example of a completed value
              },
            },
          },

          // User Input model
          UserInput: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data type
                description: "User's username", // desc
                example: "luciano", // example of a title
              },
              password: {
                type: "string", // data type
                description: "password", // desc
                example: "123456", // example of a completed value
              },
            },
          },

          // login model
          Login: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data type
                description: "User's username", // desc
                example: "luciano", // example of a title
              },
              password: {
                type: "string", // data type
                description: "password", // desc
                example: "123456", // example of a completed value
              },
            },
          },

          Register: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data type
                description: "User's username", // desc
                example: "luciano", // example of a title
              },
              password: {
                type: "string", // data type
                description: "password", // desc
                example: "123456", // example of a completed value
              },
              email: {
                type: "string", // data type
                description: "User's email", // desc
                example: "luciano@gmail.com", // example of a title
              },
            },
          },
          // error model
          Error: {
            type: "object", //data type
            properties: {
              message: {
                type: "string", // data type
                description: "Error message", // desc
                example: "Not found", // example of an error message
              },
              internal_code: {
                type: "string", // data type
                description: "Error internal code", // desc
                example: "Invalid parameters", // example of an error internal code
              },
            },
          },
          // Libros Schema
          Libro: {
            type: "object", // data type
            properties: {
              id: {
                type: "number", // data-type
                description: "Libro identification number", // desc
                example: "20", // example of an id
              },
              author: {
                type: "string", // data-type
                description: "Author of the Book", // desc
                example: "J.K. Rowling", // example of an id
              },
              titulo: {
                type: "string", // data-type
                description: "Title's Book", // desc
                example: "Harry Potter", // example of a title
              },
              pictureUrl: {
                type: "string", // data-type
                description: "Book cover", // desc
                example: "https://cdn.culturagenial.com/es/imagenes/harry-potter-libros-1-cke.jpg", // example of a title
              },
              created: {
                type: "date", // data type
                description: "Date created", // desc
                example: "06/12/2021", // example of a completed value
              },
              updated: {
                type: "date", // data type
                description: "Date updated", // desc
                example: "07/12/2021", // example of a completed value
              },
              sinopsis: {
                type: "string", // data type
                description: "Sinopsis of the book", // desc
                example: "Harry Potter by someone", // example of a completed value
              },
            },
          },
          // Libro Id model
          LibroId: {
            type: "object", // data type
            properties: {
              id: {
                type: "number", // data-type
                description: "Libro identification number", // desc
                example: "20", // example of an id
                },
                author: {
                  type: "string", // data-type
                  description: "Author of the Book", // desc
                  example: "J.K. Rowling", // example of an id
                },
                titulo: {
                  type: "string", // data-type
                  description: "Title's Book", // desc
                  example: "Harry Potter", // example of a title
                },
            },
          },
          //Boleta model
          Boleta: {
            type: "object", // data type
            properties: {
              id: {
                type: "number", // data-type
                description: "Boleta identification number", // desc
                example: "12", // example of an id
              },
              idUsuario: {
                type: "number", // data-type
                description: "User identification number", // desc
                example: "18", // example of an id
              },
              idLibro: {
                type: "number", // data-type
                description: "Libro identification number", // desc
                example: "10", // example of an id
              },
              reservation: {
                type: "date", // data type
                description: "Date of reservation", // desc
                example: "07/12/2021", // example of a completed value
              },
              returnDate: {
                type: "date", // data type
                description: "Date to return the book", // desc
                example: "07/01/2022", // example of a completed value
              },
              created: {
                type: "date", // data type
                description: "Date created", // desc
                example: "06/12/2021", // example of a completed value
              },
            },
          },
        },
      },
}