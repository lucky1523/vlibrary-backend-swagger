module.exports = {
    get: {
        tags: ["Boleta Reservacion CRUD operations"], // operation's tag.
        description: "Get a boleta", // operation's desc.
        operationId: "getBoleta", // unique operation id
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              $ref: "#/components/schemas/id", // data model of the param
            },
            required: true, // Mandatory param
            description: "A single user id", // param desc.
          },
        ],
        // expected responses
        responses: {
          // response code
          200: {
            description: "Boleta is obtained", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Boleta", // todo data model
                },
              },
            },
          },
          // response code
          404: {
            description: "Boleta is not found", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error", // error data model
                },
              },
            },
          },
        },
      },
}