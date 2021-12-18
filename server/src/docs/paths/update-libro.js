module.exports = {
    put: {
        tags: ["Libro CRUD operations"], // operation's tag
        description: "Create libro", // short desc
        operationId: "createLibro", // unique operation id
        parameters: [],
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/newLibro", // todo input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            description: "New libro created successfully", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },   
}