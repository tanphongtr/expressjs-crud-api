const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API REST de exemplo de uso do Swagger em Node.js",
      description:
        "Mostra como configurar uma aplicação Node.js com expressjs, swagger-ui-express para geração da Swagger UI e swagger-jsdoc para especificar os endpoints implementados com expressjs por meio de comentários JSDoc.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "http://38.242.231.190:3000",
        description: "Production server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
