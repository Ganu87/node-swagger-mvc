const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const routes = require('./routes/routes.js');

const app = express();
const PORT=process.env.PORT || 3000;


app.use(express.json());

app.use("/",routes);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(PORT,()=>{console.log(`app running on the PORT ${PORT}`)});
