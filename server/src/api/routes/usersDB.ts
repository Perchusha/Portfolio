import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/users';
import { getRequestMeta } from '../../utils';

const router = express.Router();

router.get('/', async (req, res, next) => {
  UserModel.find()
    .select('_id name age')
    .exec()
    .then(result => {
      const response = {
        count: result.length,
        users: result.map(({ name, age, _id }) => ({
          _id,
          name,
          age,
          meta: getRequestMeta('GET', _id),
        })),
      };
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.get('/:id', async (req, res, next) => {
  const id: string = req.params.id;
  if (!id) {
    return res.status(400).send('Required ID is not provided.');
  }

  UserModel.findById(id)
    .select('_id name age')
    .exec()
    .then(result => {
      if (result) {
        res.status(200).send({
          user: result,
          meta: getRequestMeta(),
        });
      } else {
        res.status(404).send('User with the provided ID does not exist.');
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.post('/', async (req, res, next) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).send('Required parameters are missing.');
  }

  const newUser = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name,
    age,
  });

  newUser
    .save()
    .then(({ name, age, _id }) => {
      res.status(201).send({
        user: { _id, name, age },
        meta: getRequestMeta('GET', _id),
      });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.patch('/:id', async (req, res, next) => {
  const id: string = req.params.id;
  if (!id) {
    return res.status(400).send('Required ID is not provided.');
  }

  const updateOps: { name?: string; age?: number } = {};
  for (const key in req.body) {
    if (key === 'name' || key === 'age') {
      updateOps[key] = req.body[key];
    }
  }

  if (Object.keys(updateOps).length === 0) {
    return res.status(400).send('Required parameters are missing.');
  }

  UserModel.findByIdAndUpdate(id, {
    $set: updateOps,
  })
    .select('_id name age')
    .exec()
    .then(result => {
      if (result) {
        res.status(200).send({
          oldUser: result,
          newUser: {
            _id: result._id,
            name: result.name,
            age: result.age,
            ...updateOps,
          },
          meta: getRequestMeta('GET', result._id),
        });
      } else {
        res.status(404).send('User with the provided ID does not exist.');
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete('/:id', async (req, res, next) => {
  const id: string = req.params.id;
  if (!id) {
    return res.status(400).send('Required ID is not provided.');
  }

  UserModel.findByIdAndDelete(id)
    .select('_id name age')
    .exec()
    .then(result => {
      if (result) {
        res.status(200).send({
          removedUser: result,
          meta: getRequestMeta(),
        });
      } else {
        res.status(404).send('User with the provided ID does not exist.');
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

export default router;
