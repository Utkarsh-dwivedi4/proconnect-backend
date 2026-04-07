import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Example API
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
  ]);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  res.json({ message: 'Product added', product });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
