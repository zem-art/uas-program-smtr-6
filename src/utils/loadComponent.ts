import fs from 'fs/promises';

export const loadComponent = async (filePath: string): Promise<string> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    console.error(`Gagal memuat komponen: ${filePath}`, err);
    return '<!-- Error loading component -->';
  }
};
