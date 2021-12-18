module.exports = {
    get: {
        tags: ["User CRUD operations"], // operation's tag.
        description: "Get User Id", // operation's desc.
        operationId: "getUserId", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description: "User's Id completed", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserId", // Todo model
                },
              },
            },
          },
        },
      },
}