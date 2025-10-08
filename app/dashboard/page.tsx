import { redirect } from 'next/navigation';
import { checkAuth, getUsername, logoutAction } from '../actions/auth';

async function verifyAuth() {
  const isLoggedIn = await checkAuth();
  if (!isLoggedIn) {
    redirect('/');
  }
}

async function getUserData() {
  const username = await getUsername();
  return { username };
}

function DashboardHeader({ username }: { username?: string }) {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Welcome, <span className="font-semibold text-green-600 dark:text-green-400">{username}</span>!
        </p>
      </div>
      <form action={logoutAction}>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </form>
    </div>
  );
}

function InfoCard({ title, description, bgColor }: { title: string; description: string; bgColor: string }) {
  return (
    <div className={`${bgColor} p-6 rounded-lg border`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      <InfoCard
        title="Profile"
        description="View and edit your profile information"
        bgColor="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300"
      />
      <InfoCard
        title="Settings"
        description="Manage your account settings"
        bgColor="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-300"
      />
      <InfoCard
        title="Activity"
        description="Check your recent activities"
        bgColor="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-900 dark:text-green-300"
      />
    </div>
  );
}

function DemoInfo() {
  return (
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
      <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
        🎉 SSR Login Demo
      </h3>
      <p className="text-yellow-800 dark:text-yellow-400 text-sm mb-2">
        This login page works with Server-Side Rendering and functions even with JavaScript disabled!
      </p>
      <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-500 text-sm space-y-1">
        <li>Form submission uses native HTML forms</li>
        <li>Authentication handled via Next.js Server Actions</li>
        <li>Session management using HTTP-only cookies</li>
        <li>No client-side JavaScript required</li>
      </ul>
    </div>
  );
}

export default async function DashboardPage() {
  await verifyAuth();
  const { username } = await getUserData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <DashboardHeader username={username} />
          <DashboardCards />
          <DemoInfo />
        </div>
      </div>
    </div>
  );
}
