module.exports = {
    delete: {
        tags: ["User CRUD operations"], // operation's tag
        description: "Deleting a User", // short desc
        operationId: "deleteTodo", // unique operation id
        parameters: [
          // expected parameters
          {
            name: "id", // name of param
            in: "path", // location of param
            schema: {
              $ref: "#/components/schemas/id", // id model
            },
            required: true, // mandatory
            description: "Deleting a user done", // param desc
          },
        ],
        // expected responses
        responses: {
          // response code
          200: {
            description: "User deleted successfully", // response desc
          },
          // response code
          404: {
            description: "User not found", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },
}