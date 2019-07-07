import * as config from 'config';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

const port = config.get('port') as number;

app.set('trust proxy', 1);
app.set('x-powered-by', false);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

(async () => {
  try {
    app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello world from a Node.js apps ....!');
    });

    app.use((err, req, res, next) => {
      console.log(
        'ERROR',
        `Uncaught exception - message: ${err.message}, stack: ${err.stack}`
      );
      res.status(500).json({ error: { message: err.message } });
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`Media server is running on port ${port}`);
    });
  } catch (error) {
    console.log('ERROR', 'Closing......', error);
  }
})();
