import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.get('/', (req, res) => {
  db.query("SELECT * FROM professionals", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const { name, category, location } = req.body;

  const sql = "INSERT INTO professionals (name, category, location) VALUES (?, ?, ?)";

  db.query(sql, [name, category, location], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Professional added" });
  });
});

export default router;