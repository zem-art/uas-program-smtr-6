import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();


router.post('/add/publik', async (req:Request, res:Response) => {
  const { nama, email, pesan } = req.body;
  console.log('==>', req.body);
  if (!nama || !email || !pesan) return res.status(400).json({ message: 'Lengkapi semua field' });

  // Simpan ke database kalau kamu mau
  try {
    await prisma.kontak.create({
      data: {
        nama,
        email,
        pesan,
      },
    });

    res.json({ message: 'Pesan berhasil disimpan!' });
  } catch (err) {
    console.error('Gagal menyimpan pesan:', err);
    res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan pesan.' });
  }
});

export default router;