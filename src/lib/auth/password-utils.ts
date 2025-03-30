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
 * Securely compares a plain text password with a hashed password
 * @param password Plain text password input by user
 * @param hashedPassword Hashed password from database
 * @returns Boolean indicating if passwords match
 */
export async function comparePasswords(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  try {
    console.debug('[Auth] Attempting password verification');
    const startTime = Date.now();
    
    // Check if inputs are valid
    if (!password || !hashedPassword) {
      console.warn('[Auth] Password verification attempted with missing input');
      return false;
    }
    
    // Perform password comparison
    const isMatch = await bcrypt.compare(password, hashedPassword);
    
    // Log result (without revealing password)
    const duration = Date.now() - startTime;
    console.log(`[Auth] Password verification ${isMatch ? 'succeeded' : 'failed'} in ${duration}ms`);
    
    return isMatch;
  } catch (error) {
    // Log any errors that occur during comparison
    console.error('[Auth] Error during password comparison', 
      error instanceof Error ? error.message : 'Unknown error'
    );
    return false;
  }
}