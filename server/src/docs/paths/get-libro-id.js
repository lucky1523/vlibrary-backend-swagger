module.exports = {
    get: {
        tags: ["Libro CRUD operations"], // operation's tag.
        description: "Get Libro Id", // operation's desc.
        operationId: "getLibroId", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description: "Libro's Id completed", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LibroId", // Todo model
                },
              },
            },
          },
        },
      },
}