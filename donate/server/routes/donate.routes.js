import { list_all_donates, create_donate, max_donate, donates_sum, donates_month, chart_donates } from '../controllers/donate.controller.js';

export default app => {
    app
        .route('/api/donates')
        .get(list_all_donates)
        .post(create_donate);
    app
        .route('/api/donates/max')
        .get(max_donate);
    app
        .route('/api/donates/sum')
        .get(donates_sum);
    app
        .route('/api/donates/month')
        .get(donates_month);
    app
        .route('/api/donates/chart')
        .get(chart_donates);
};
