import { Request, Response, Router } from 'express';

export default (router: Router) => {
  router.route('/sse').get(async (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    setInterval(() => {
      const data = {
        date: new Date().toLocaleTimeString(),
      };
      res.write(`data:${JSON.stringify(data)}\n\n`, 'utf-8');
      res.flushHeaders();
    }, 1000);
  });
};
