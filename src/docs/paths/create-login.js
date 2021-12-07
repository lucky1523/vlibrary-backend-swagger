module.exports = {
    post: {
        tags: ["User CRUD operations"], // operation's tag
        description: "Create user", // short desc
        operationId: "createUser", // unique operation id
        parameters: [
            // expected params
            {
              name: "username",  // name of param
              in: "path", // location of param
              schema: {
                $ref: "#/components/schemas/Login", // id model
              },
              required: true, // mandatory
              description: "Username required", // short desc.
            },
            {
                name: "password",  // name of param
                in: "path", // location of param
                schema: {
                  $ref: "#/components/schemas/Login", // id model
                },
                required: true, // mandatory
                description: "password required", // short desc.
              },
          ], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login", // todo input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            description: "Login created successfully", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },   
}