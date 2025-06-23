// src/routes.ts
import { Router, Request, Response } from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const router = Router();

// Ambil semua destinasi
router.get('/', async (req, res) => {
  const destinations = await prisma.destination.findMany({
    include: {
      images: true, // Join table image
    }
  });

  // Tambahkan `image` utama (contoh: ambil gambar pertama)
  const formatted = destinations.map(dest => ({
    ...dest,
    image: dest.images[0]?.url || null // ambil gambar pertama jika ada
  }));

  res.json(formatted);
});


// Ambil satu destinasi berdasarkan ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const dest = await prisma.destination.findUnique({
      where: { id },
      include: {
        images: true, // ← ambil semua gambar terkait
      },
    });

    if (!dest) {
      return res.status(404).json({ error: 'Destinasi tidak ditemukan' });
    }

    res.json(dest);
  } catch (error) {
    console.error('❌ Gagal mengambil destinasi:', error);
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
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
