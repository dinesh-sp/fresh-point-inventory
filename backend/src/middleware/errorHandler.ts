import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

// Centralized error handler. Zod validation errors become 400s with
// field-level details; anything else becomes a 500.
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.flatten(),
    });
  }

  console.error(err);
  return res.status(500).json({ error: 'Internal server error' });
}

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ error: 'Route not found' });
}
