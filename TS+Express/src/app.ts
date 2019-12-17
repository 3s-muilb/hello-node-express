import * as express from 'express';

export const expressApp = express();

/* istanbul ignore next */
expressApp.get('/', (req, res) => {
  const response: Hello3SU = { message: 'Hello 3SI!' };
  res.send(response);
});
expressApp.get('/name', (req, res) => {
  const response: Myname = { message: 'Nhân Cool!' };
  res.send(response);
});
/**
 * Start the express application.
 *
 * @param port The port to listen to.
 */
export function start(port = 3000) {
  expressApp.listen(port, (err: any) => {
    if (err) {
      console.error(`Unable to start app. Found error: ${err.message}`);
      return;
    }
    console.info(`Example app listening on port ${port}!`);
  });
}
