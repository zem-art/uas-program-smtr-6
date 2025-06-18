// logs-request.ts
import { Request, Response, NextFunction } from 'express';

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log('[DEBUG] METHOD:', req.method);
  console.log('[DEBUG] HEADERS:', req.headers['content-type']);
  console.log('[DEBUG] BODY:', req.body);
  next();
};
