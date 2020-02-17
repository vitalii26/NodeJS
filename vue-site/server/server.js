const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
const siteSchema = new Schema({
    url: String,
    server: {
        ip: String,
        name: String
    }
});

const url = `mongodb+srv://vitalik77795:aPcZe7BMEMqDxr73@cluster0-hbzme.mongodb.net/sites?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
const Site = mongoose.model("Site", siteSchema);

const port = 3000;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api/sites', (req, res) => {
    Site.find({}, (err, docs) => {
        if (err) {
            throw err;
        }
        console.log(docs);
        res.json(docs);
        mongoose.disconnect();
    });
    
});

app.listen(port, () => {
    console.log('Server running');
});