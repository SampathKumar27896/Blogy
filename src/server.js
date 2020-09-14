const express = require('express');
const cors = require('cors');
require('./db/config.js');
const authRoute = require('./routes/AuthRoute')
const postRoute = require('./routes/PostRoute')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use(cors({
  origin : 'http://localhost:3000',
  exposedHeaders : ['content-type']
}))



app.use(authRoute);
app.use(postRoute);
app.listen(port, () => `Server running on port ${port}`);