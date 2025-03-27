import bcrypt from 'bcrypt';

// Salt rounds for password hashing (higher is more secure but slower)
const SALT_ROUNDS = 10;

/**
 * Hash a password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compare a plain text password with a hashed password
 * Returns true if they match, false otherwise
 */
export async function comparePasswords(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}