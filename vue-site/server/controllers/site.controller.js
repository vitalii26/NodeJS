const mongoose = require('mongoose');
const Site = require('../models/site.models');

exports.list_all_sites = (req, res) => {
    Site.find({}, (err, sites) => {
        if (err) {
            res.send(err);
        }
        res.json(sites);
    });
};

exports.create_a_site = (req, res) => {
    const newSite = new Site(req.query);
    newSite.save((err, site) => {
        if (err) {
            res.send(err);
        }
        res.json(site);
    });
};

exports.delete_a_site = (req, res) => {
    Site.deleteOne({_id: req.params.siteId }, err => {
        if (err) {
            res.send(err);
        }
        res.json({
            _id: req.params.siteId
        });
    });
};