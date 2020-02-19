const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

global.Site = require('./models/site.models');
const routes = require('./routers/site.routes');

const url = `mongodb+srv://vitalik77795:aPcZe7BMEMqDxr73@cluster0-hbzme.mongodb.net/sites?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log('Server running');
});

