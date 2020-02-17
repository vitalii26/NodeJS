const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/api/sites', (req, res) => {
    fs.readFile(path.join(__dirname, 'sites.json'), 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const obj = JSON.parse(data);
        console.log(obj);
        res.json(obj);
    });
    
});

app.listen(port, () => {
    console.log('Server running');
});