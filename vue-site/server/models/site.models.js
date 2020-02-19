const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SiteSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        server: {
            type: Object,
            ip: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
        }
    },
    { collection: 'sites' }
);

module.exports = mongoose.model('Site', SiteSchema);