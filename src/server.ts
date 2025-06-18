import express from 'express';
import cors from 'cors';
import path from 'path';
import { logRequest } from './logs/logs-request';
import destinationRoutes from './routes/routes-destination';
import kontakRoutes from './routes/routes-kontak';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(logRequest); // ✅ Aktifkan middleware logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/destinations', destinationRoutes);
app.use('/api/kontak', kontakRoutes);

// ✅ Serve file statis dari folder public
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
