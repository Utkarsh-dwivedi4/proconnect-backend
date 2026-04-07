import express from 'express';
import Professional from '../models/Professional.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Professional.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await Professional.create(req.body);
  res.json(data);
});

export default router;