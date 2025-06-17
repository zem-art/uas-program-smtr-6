// src/server.ts
import express from 'express';
import cors from 'cors';
import path from 'path';
import destinationRoutes from './routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/destinations', destinationRoutes);

// ✅ Serve file statis dari folder public
app.use(express.static(path.join(__dirname, '../../public')));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
