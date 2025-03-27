// src/lib/auth/jwt-utils-safe.ts
import jwt from 'jsonwebtoken';

// Environment check
const isStaticExport = process.env.EXPORT_MODE === 'static';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export type JwtPayload = {
  userId: number;
  email: string;
  roles: string[];
  permissions?: string[];
  iat?: number;
  exp?: number;
};

/**
 * Generate JWT token
 */
export function generateToken(payload: Omit<JwtPayload, 'iat' | 'exp'>) {
  if (isStaticExport) {
    console.warn('Token generation attempted in static export mode');
    return 'static-mode-placeholder-token';
  }
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): JwtPayload | null {
  if (isStaticExport) {
    // In static mode, just return a dummy payload
    return {
      userId: 0,
      email: 'static@example.com',
      roles: ['user'],
      permissions: []
    };
  }
  
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}