// src/routes.ts
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Ambil semua destinasi
router.get('/', async (req, res) => {
  const destinations = await prisma.destination.findMany();
  res.json(destinations);
});

// Ambil satu destinasi berdasarkan ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const dest = await prisma.destination.findUnique({ where: { id } });
  if (!dest) return res.status(404).json({ error: 'Destinasi tidak ditemukan' });
  res.json(dest);
});

// Tambah destinasi baru
router.post('/', async (req, res) => {
  const { name, location, climate, description } = req.body;
  const newDest = await prisma.destination.create({
    data: { name, location, climate, description },
  });
  res.status(201).json(newDest);
});

// Edit destinasi
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location, climate, description } = req.body;
  const updated = await prisma.destination.update({
    where: { id },
    data: { name, location, climate, description },
  });
  res.json(updated);
});

// Hapus destinasi
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.destination.delete({ where: { id } });
  res.json({ success: true });
});

export default router;
