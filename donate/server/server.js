const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/donate.routes');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => { 
    console.log('Server running');
});

