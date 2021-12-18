module.exports = {
    post: {
        tags: ["User CRUD operations"], // operation's tag
        description: "Register new user", // short desc
        operationId: "createRegister", // unique operation id
        parameters: [],
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Register", // todo input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            description: "Register created successfully", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },   
}