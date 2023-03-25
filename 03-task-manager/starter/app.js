const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');

//middleware
app.use(express.json());
//to access app
app.use(express.static('./public'));
app.use(notFound);
//routes
app.use('/api/v1/tasks', tasks);
port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Port runnig on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
