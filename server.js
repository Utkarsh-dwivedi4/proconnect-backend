import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import messageRoutes from "./routes/messagesroutes.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors()); // VERY IMPORTANT
app.use(express.json());

// ✅ Routes
app.use("/api/messages", messageRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// ✅ Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});