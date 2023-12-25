import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
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

export default router;
