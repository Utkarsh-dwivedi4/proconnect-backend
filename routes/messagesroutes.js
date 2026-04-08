import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { user_email, professional_id, message } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO messages (user_email, professional_id, message) VALUES ($1, $2, $3) RETURNING *",
      [user_email, professional_id, message]
    );

    return res.json({
      message: "Message saved successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error("DB ERROR:", err);
    return res.status(500).json({ error: "Database error" });
  }
});

export default router;