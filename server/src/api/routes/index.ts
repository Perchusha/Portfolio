import { Request, Response, Router } from 'express';
import sse from './sse';
import users from './users';

export default (router: Router) => {
  sse(router);
  users(router);

  router.route('/').get((req: Request, res: Response) => {
    res.status(200).send({ response: 'success' });
  });

  return router;
};
