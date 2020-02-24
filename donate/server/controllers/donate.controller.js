import mysql from 'mysql';
import knex from '../db/knex.js';
const date = new Date();

const connection = mysql.createConnection({
    host : '127.0.1.1',
    user : 'root',
    password : '',
    database : 'fundraising',
    charset: 'utf8'
});

date.setMonth( date.getMonth() - 1);

export const list_all_donates = (req, res) => {
    knex.select()
        .from('fundraising')
        .then(function(fundraising) {
            res.send(fundraising);
        });
};

export const max_donate = (req, res) => {
    connection.query("SELECT donation, name FROM fundraising WHERE donation =(SELECT MAX(donation) FROM fundraising)",
    function(err, results, fields) {
        console.log(err);
        res.send(results);
    });
};

export const donates_sum = (req, res) => {
    knex('fundraising')
        .sum('donation', {as: 'sum'})
        .then(function(fundraising) {
            res.send(fundraising);
        });
};

export const donates_month = (req, res) => {
    knex('fundraising')
        .where('donated_at', '>=', date.toISOString())
        .sum('donation', {as: 'sum'})
        .then(function(fundraising) {
            res.send(fundraising);
        });
};

export const create_donate = (req, res) => {
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

export const chart_donates = (req, res) => {
    connection.query("SELECT DATE(donated_at) as date, SUM(`donation`) totalDonation FROM fundraising GROUP BY DATE(donated_at)",
    function(err, results, fields) {
        console.log(err);
        res.send(results);
    });
};

