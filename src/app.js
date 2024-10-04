const express = require('express');
require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');
const drugRoutes = require('./routes/drugRoutes');

const app = express();
const apiRouter = express.Router();

apiRouter.use('/drugs', drugRoutes);

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
  });
  
  