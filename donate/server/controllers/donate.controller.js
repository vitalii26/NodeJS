const mysql = require('mysql');
const knex = require('../db/knex');
const date = new Date();

const connection = mysql.createConnection({
    host : '127.0.1.1',
    user : 'root',
    password : '',
    database : 'fundraising',
    charset: 'utf8'
});

connection.connect(function(err){
    if (err) {
      return console.error("Error " + err.message);
    }
    else{
      console.log("Connected to MySQL");
    }
 });

date.setMonth( date.getMonth() - 1);

exports.list_all_donates = (req, res) => {
    knex.select()
    .from('fundraising')
    .then(function(fundraising) {
        res.send(fundraising);
    });
}

exports.max_donate = (req, res) => {
    knex('fundraising')
    .select('name')
    .max('donation', {as: 'donation'})
    .then(function(fundraising) {
        res.send(fundraising);
    });
};

exports.donates_sum = (req, res) => {
    knex('fundraising')
    .sum('donation', {as: 'sum'})
    .then(function(fundraising) {
        res.send(fundraising);
    });
};

exports.donates_month = (req, res) => {
    knex('fundraising')
    .where('donated_at', '>=', date.toISOString())
    .sum('donation', {as: 'sum'})
    .then(function(fundraising) {
        res.send(fundraising);
    });
};

exports.create_donate = (req, res) => {
    knex('fundraising').insert({
        name: req.query.name,
        email: req.query.email,
        donation: req.query.donation,
        message: req.query.message,
    })
        .then(function() {
        knex.select()
        .from('fundraising') 
        .then(function(fundraising) {
            res.send(fundraising);
        });
    });

};

exports.chart_donates = (req, res) => {
    connection.query("SELECT DATE(donated_at) as date, SUM(`donation`) totalDonation FROM fundraising GROUP BY DATE(donated_at)",
    function(err, results, fields) {
        console.log(err);
        res.send(results);
});
}