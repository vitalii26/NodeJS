const siteBuilder = require('../controllers/site.controller');

module.exports = app => {
    app
        .route('/api/sites')
        .get(siteBuilder.list_all_sites)
        .post(siteBuilder.create_a_site);
    app
        .route('/api/sites/:siteId')
        .delete(siteBuilder.delete_a_site);
};
