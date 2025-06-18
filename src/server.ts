import express, { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';
import { logRequest } from './logs/logs-request';
import destinationRoutes from './routes/routes-destination';
import kontakRoutes from './routes/routes-kontak';

const app = express();
const PORT = 3000;

// ✅ Karena pakai CommonJS, __dirname bisa langsung digunakan
const loadComponent = async (filePath: string): Promise<string> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error(`❌ Gagal memuat komponen: ${filePath}`, error);
    return `<p>Gagal memuat komponen: ${path.basename(filePath)}</p>`;
  }
};

const renderPage = async (pagePath: string): Promise<string> => {
  const header = await loadComponent(path.join(__dirname, 'views/components/header.html'));
  const navbar = await loadComponent(path.join(__dirname, 'views/components/navbar.html'));
  const footer = await loadComponent(path.join(__dirname, 'views/components/footer.html'));
  const content = await loadComponent(pagePath);
  return `${header}\n${navbar}\n${content}\n${footer}`;
};

// Middleware
app.use(cors());
app.use(logRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/kontak', kontakRoutes);

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Example route
app.get('/', async (_req: Request, res: Response) => {
  const html = await renderPage(path.join(__dirname, 'views/pages/index.html'));
  res.send(html);
});

app.get('/contact', async (_req: Request, res: Response) => {
  const html = await renderPage(path.join(__dirname, 'views/pages/kontak.html'));
  res.send(html);
});

app.get('/destinastion', async (_req: Request, res: Response) => {
  const html = await renderPage(path.join(__dirname, 'views/pages/destinasi.html'));
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
