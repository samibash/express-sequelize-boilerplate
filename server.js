// importing dependencies and middleware
const express = require('express');
const logger = require('morgan');
const Cors = require('cors');
const bodyParser = require('body-parser');

// importing our routes from router
const { PrimRoute } = require('./routes/PrimRoute');
const { SecondRoute } = require('./routes/SecondRoute');

const PORT = process.env.PORT || 3001;

const app = express();

// declaring middleware here
app.use(Cors());
app.use(logger('dev'));
app.use(bodyParser.json());

// telling express what endpoints we want to use to route
app.use('/route', PrimRoute);
app.use('/secondRoute', SecondRoute);


// telling express what port to listen on
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});