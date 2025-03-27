// src/app/api/auth/login/route.ts
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { loginUser } from '@/lib/auth/auth-service';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Input validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Attempt to login user
    const { user, token, refreshToken, roles, permissions } = await loginUser({
      email,
      password,
    });

    // Set the auth token in an HTTP-only cookie
    const cookieStore = cookies();
    
    // Set auth token as HTTP-only cookie (more secure)
    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      sameSite: 'lax',
    });

    // Set refresh token as HTTP-only cookie
    cookieStore.set({
      name: 'refreshToken',
      value: refreshToken,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      sameSite: 'lax',
    });

    // Return user info and token (token included so client can store in memory if needed)
    return NextResponse.json({
      user,
      token,
      refreshToken,
      roles,
      permissions,
    });
  } catch (error) {
    console.error('Login error:', error);
    
    // Handle specific errors
    if (error instanceof Error) {
      if (error.message === 'Invalid credentials') {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        );
      }
    }
    
    // Generic error
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}