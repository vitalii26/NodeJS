const donateBuilder = require('../controllers/donate.controller');

module.exports = app => {
    app
        .route('/api/donates')
        .get(donateBuilder.list_all_donates)
        .post(donateBuilder.create_donate)
    app
        .route('/api/donates/max')
        .get(donateBuilder.max_donate)
    app
        .route('/api/donates/sum')
        .get(donateBuilder.donates_sum)
    app
        .route('/api/donates/month')
        .get(donateBuilder.donates_month)
    app
        .route('/api/donates/chart')
        .get(donateBuilder.chart_donates)
};