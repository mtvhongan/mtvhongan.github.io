import crypto from 'crypto';

import { prisma } from '../db';
import { generateToken } from './jwt-utils';
import { comparePasswords, hashPassword } from './password-utils';

type RegisterUserParams = {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  address?: string;
};

type LoginUserParams = {
  email: string;
  password: string;
};

/**
 * Register a new user
 */
export async function registerUser({ 
  email, 
  password, 
  fullName, 
  phone, 
  address 
}: RegisterUserParams) {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ 
    where: { email } 
  });
  
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash password
  const passwordHash = await hashPassword(password);

  // Create user with default 'user' role
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      fullName,
      phone,
      address,
      userRoles: {
        create: {
          role: {
            connectOrCreate: {
              where: { name: 'user' },
              create: { name: 'user', description: 'Regular user' }
            }
          }
        }
      }
    },
    include: {
      userRoles: {
        include: {
          role: true
        }
      }
    }
  });

  // Extract roles for the token
  const roles = user.userRoles.map(ur => ur.role.name);

  // Generate JWT token
  const token = generateToken({ 
    userId: user.id,
    email: user.email,
    roles
  });

  // Create refresh token
  const refreshToken = await createRefreshToken(user.id);

  return { 
    user: { 
      id: user.id, 
      email: user.email, 
      fullName: user.fullName 
    }, 
    roles,
    token, 
    refreshToken 
  };
}

/**
 * Login a user
 */
export async function loginUser({ email, password }: LoginUserParams) {
  // Find user
  const user = await prisma.user.findUnique({ 
    where: { email },
    include: {
      userRoles: {
        include: {
          role: {
            include: {
              rolePermissions: {
                include: {
                  permission: true
                }
              }
            }
          }
        }
      }
    }
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Verify password
  const isValid = await comparePasswords(password, user.passwordHash);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  // Extract roles and permissions
  const roles = user.userRoles.map(ur => ur.role.name);
  const permissions = user.userRoles.flatMap(ur => 
    ur.role.rolePermissions.map(rp => rp.permission.name)
  );

  // Generate JWT token
  const token = generateToken({ 
    userId: user.id,
    email: user.email,
    roles,
    permissions
  });
  
  // Create refresh token
  const refreshToken = await createRefreshToken(user.id);

  return { 
    user: { 
      id: user.id, 
      email: user.email, 
      fullName: user.fullName 
    }, 
    roles,
    permissions,
    token, 
    refreshToken 
  };
}

/**
 * Create a refresh token for a user
 */
async function createRefreshToken(userId: number) {
  // Generate a random token
  const token = crypto.randomBytes(40).toString('hex');
  
  // Set expiration to 30 days from now
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  // Save token to database
  await prisma.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt
    }
  });

  return token;
}

/**
 * Refresh a user's access token using a refresh token
 */
export async function refreshUserToken(refreshToken: string) {
  // Find token in database
  const tokenRecord = await prisma.refreshToken.findUnique({
    where: { token: refreshToken },
    include: { 
      user: {
        include: {
          userRoles: {
            include: {
              role: {
                include: {
                  rolePermissions: {
                    include: {
                      permission: true
                    }
                  }
                }
              }
            }
          }
        }
      } 
    }
  });

  // Validate token
  if (!tokenRecord || new Date() > tokenRecord.expiresAt) {
    throw new Error('Invalid or expired refresh token');
  }

  // Extract roles and permissions
  const roles = tokenRecord.user.userRoles.map(ur => ur.role.name);
  const permissions = tokenRecord.user.userRoles.flatMap(ur => 
    ur.role.rolePermissions.map(rp => rp.permission.name)
  );

  // Generate new JWT token
  const token = generateToken({ 
    userId: tokenRecord.userId,
    email: tokenRecord.user.email,
    roles,
    permissions
  });

  return { token };
}

/**
 * Logout a user by invalidating their refresh token
 */
export async function logoutUser(refreshToken: string) {
  try {
    // Delete the refresh token
    await prisma.refreshToken.delete({
      where: { token: refreshToken }
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error during logout:', error);
    return { success: false };
  }
}

/**
 * Get user by ID with roles and permissions
 */
export async function getUserById(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      userRoles: {
        include: {
          role: {
            include: {
              rolePermissions: {
                include: {
                  permission: true
                }
              }
            }
          }
        }
      }
    }
  });

  if (!user) {
    return null;
  }

  const roles = user.userRoles.map(ur => ur.role.name);
  const permissions = user.userRoles.flatMap(ur => 
    ur.role.rolePermissions.map(rp => rp.permission.name)
  );

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    phone: user.phone,
    address: user.address,
    roles,
    permissions
  };
}