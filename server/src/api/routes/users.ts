import express from 'express';
import crypto from 'crypto';

import { ID, IUser } from '../../types';
import { findById, readFile, writeFile, removeElementById, updateElementById } from '../../utils';

const router = express.Router();

const filePath = process.env.USER_FILE || './storage/users.json';

// TODO: add POSTMAN/SWAGGER documentation

router.get('/', async (req, res, next) => {
  const content = await readFile(filePath);
  const users = JSON.parse(content);
  res.status(200).send(users);
});

router.get('/:id', async (req, res, next) => {
  const id: ID = req.params.id; // получаем id
  if (!id) {
    return res.status(400).send('Required id is not provided.');
  }

  const content = await readFile(filePath);
  const users = JSON.parse(content);
  const user = findById(id, users);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send('User with the provided id does not exist.');
  }
});

router.post('/', async (req, res, next) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).send('Required parameters are missing.');
  }

  const content = await readFile(filePath);
  const users = JSON.parse(content);
  const newUser: IUser = { id: crypto.randomUUID(), name, age };
  users.push(newUser);

  writeFile(filePath, JSON.stringify(users, null, '\t')).then(() => {
    res.status(201).send(newUser);
  });
});

router.patch('/:id', async (req, res, next) => {
  const id: ID = req.params.id;
  if (!id) {
    return res.status(400).send('Required id is not provided.');
  }

  const { name, age } = req.body;
  if (!name && !age) {
    return res.status(400).send('Required parameters are missing.');
  }

  const content = await readFile(filePath);
  const users = JSON.parse(content);
  const user = findById(id, users);

  if (user) {
    const newUser = { id, name: name || user.name, age: age || user.age };
    const newData = updateElementById(id, users, newUser);
    writeFile(filePath, JSON.stringify(newData, null, 4)).then(() => {
      res.status(200).send(newUser);
    });
  } else {
    res.status(404).send('User with the provided id does not exist.');
  }
});

router.delete('/:id', async (req, res, next) => {
  const id: ID = req.params.id;
  if (!id) {
    return res.status(400).send('Required id is not provided.');
  }

  const content = await readFile(filePath);
  const users = JSON.parse(content);
  const user = findById(id, users);

  if (user) {
    const newData = removeElementById(id, users);
    writeFile(filePath, JSON.stringify(newData, null, 4)).then(() => {
      res.sendStatus(200);
    });
  } else {
    res.status(404).send('User with the provided id does not exist.');
  }
});

export default router;
