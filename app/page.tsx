import { redirect } from 'next/navigation';
import Header from './components/header';
import LoginPage from './components/login-page';
import { loginAction, checkAuth } from './actions/auth';

interface PageProps {
  searchParams: Promise<{ error?: string }>;
}

async function checkUserAuth() {
  const isLoggedIn = await checkAuth();
  if (isLoggedIn) {
    redirect('/dashboard');
  }
}

async function getErrorMessage(searchParams: Promise<{ error?: string }>) {
  const params = await searchParams;
  return params.error;
}

export default async function Page({ searchParams }: PageProps) {
  await checkUserAuth();
  const error = await getErrorMessage(searchParams);
  
  return (
    <>
      <Header />
      <LoginPage error={error} onSubmit={loginAction} />
    </>
  );
}
