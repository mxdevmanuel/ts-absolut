import bodyParser from 'body-parser';
import express, { Application } from 'express';
import morgan from 'morgan';
import routes from 'routes';

const app: Application = express();

const templateDir =
  process.env.NODE_ENV === 'development' ? './src/views' : './views';
console.log(process.env.NODE_ENV);
app.set('view engine', 'pug');
app.set('views', templateDir);
app.use(morgan('common'));
app.use(bodyParser.json());
app.use('/', routes);

app.listen({ host: '0.0.0.0', port: 5000 });
