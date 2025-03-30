import * as jose from 'jose'; // Import jose library

// Your secret key and types
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true';

// Define the JWT payload type
type JwtPayload = {
  userId: number;
  email: string;
  roles: string[];
  permissions?: string[];
};

/**
 * Verify a JWT token using jose library (Edge Runtime compatible)
 */
export async function verifyToken(token: string): Promise<JwtPayload | null> {
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
    // Convert the secret to Uint8Array for jose
    const secretKey = new TextEncoder().encode(JWT_SECRET);
    
    // Verify the token
    const { payload } = await jose.jwtVerify(token, secretKey);
    
    // Cast and return the payload
    return payload as unknown as JwtPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Generate a JWT token using jose library (Edge Runtime compatible)
 */
export async function generateToken(payload: JwtPayload): Promise<string> {
  if (isStaticExport) {
    // In static mode, just return a dummy token
    return 'static-token';
  }
  
  // Convert the secret to Uint8Array
  const secretKey = new TextEncoder().encode(JWT_SECRET);
  
  // Create a new JWT with 1 hour expiration
  const token = await new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey);
  
  return token;
}