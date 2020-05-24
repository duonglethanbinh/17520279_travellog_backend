const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const placesRoute = require('./routes/places');
const contactRoute = require('./routes/contacts');
const blogsRoute = require('./routes/blogs');
const usersRoute = require('./routes/users');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/uploads', express.static('uploads'));
app.use('/places', placesRoute);
app.use('/blogs', blogsRoute);
app.use('/contacts', contactRoute);
app.use('/users', usersRoute);


// connect to database
// DB_CONNECTION_2_2_12: use clusters connection version 2.2.12 or later
// DB_CONNECTION_3_0: use clusters connection version 3.0 or later
mongoose.connect(
    process.env.DB_CONNECTION_2_2_12,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
).then(() => console.log('MongoDB Connected!'))
    .catch((err) => {
      console.log(err);
    });

// Routes
app.get('/', function(req, res) {
  res.send('We are at server');
});

module.exports = app;
