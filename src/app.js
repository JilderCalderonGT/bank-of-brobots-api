import express from 'express';
import bodyParser from 'body-parser';
import { expConf } from './config';

import auth from './middleware/auth';
import cors from './middleware/cors';
import helmet from 'helmet';

import routes from './routes';
import connectDatabase from './data/connectDb';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth);
app.use(cors);
app.use(helmet());

app.use('/api', routes);

let server = app.listen(expConf['port'], () => {
  console.log('Listening on port: ' + server.address().port);
  connectDatabase();
});
