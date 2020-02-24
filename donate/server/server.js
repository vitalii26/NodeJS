import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/donate.routes.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => { 
    console.log('Server running');
});

