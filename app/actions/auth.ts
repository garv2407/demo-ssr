'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function loginAction(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');
  
  if (username && password && username.toString().length > 0 && password.toString().length > 0) {
    const cookieStore = await cookies();
    
    cookieStore.set('loggedIn', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    
    cookieStore.set('username', username.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    
    redirect('/dashboard');
  }
  
  redirect('/?error=invalid');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('loggedIn');
  cookieStore.delete('username');
  redirect('/');
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get('loggedIn')?.value === 'true';
}

export async function getUsername() {
  const cookieStore = await cookies();
  return cookieStore.get('username')?.value;
}
