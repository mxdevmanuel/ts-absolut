import express, { Application } from 'express';
import morgan from 'morgan';
import routes from 'routes';

const app: Application = express();

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(morgan('dev'));
app.use('/', routes);

app.listen({ host: '0.0.0.0', port: 5000 });
