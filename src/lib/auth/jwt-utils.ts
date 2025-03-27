import jwt from 'jsonwebtoken';

// Get JWT secret from environment variables
// First, define or import your JWT constants
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export function generateToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/**
 * Verify a JWT token
 * Returns the decoded payload if valid, null if invalid
 */
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Decode a JWT token without verification
 * Useful for debugging or extracting non-sensitive info
 */
export function decodeToken(token: string) {
  return jwt.decode(token);
}