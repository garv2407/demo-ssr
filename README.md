# SSR Login Project

A simple Next.js login page that works with Server-Side Rendering (SSR) and functions even with JavaScript disabled in the browser.

## Features

- ✅ **Server-Side Rendering (SSR)**: All pages are rendered on the server
- ✅ **Works without JavaScript**: Uses native HTML forms and Next.js Server Actions
- ✅ **Session Management**: Uses HTTP-only cookies for secure session handling
- ✅ **Progressive Enhancement**: Works with JS disabled, enhanced when JS is available
- ✅ **Modern UI**: Built with Tailwind CSS with dark mode support
- ✅ **Type-Safe**: Built with TypeScript

## How It Works

### Authentication Flow

1. **Login Page** (`/`):
   - Uses a standard HTML `<form>` element
   - Form action points to a Next.js Server Action
   - When submitted, the form data is sent to the server
   - No client-side JavaScript required for form submission

2. **Server Action**:
   - Processes form data on the server
   - Validates credentials (currently accepts any non-empty username/password)
   - Sets HTTP-only cookies for session management
   - Redirects to dashboard on success

3. **Dashboard Page** (`/dashboard`):
   - Protected route that checks for authentication cookie
   - Displays user information
   - Provides logout functionality via another Server Action

### Key Technologies

- **Next.js 15**: App Router with Server Actions
- **React**: Server Components for SSR
- **TypeScript**: Type safety throughout the application
- **Tailwind CSS**: Styling with responsive design
- **HTTP-only Cookies**: Secure session management

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Test without JavaScript**:
   - In Chrome/Edge: Open DevTools → Command Palette (Cmd+Shift+P) → Type "Disable JavaScript"
   - In Firefox: about:config → javascript.enabled → false
   - In Safari: Develop → Disable JavaScript

## Testing the Application

### With JavaScript Enabled
1. Visit `http://localhost:3000`
2. Enter any username and password
3. Click "Sign In"
4. You'll be redirected to the dashboard
5. Click "Logout" to return to login page

### With JavaScript Disabled
1. Disable JavaScript in your browser
2. Visit `http://localhost:3000`
3. Enter any username and password
4. Click "Sign In"
5. The form will still submit and work perfectly!
6. You'll be redirected to the dashboard
7. Click "Logout" to return to login page

## Project Structure

```
ssr-project/
├── app/
│   ├── page.tsx              # Login page with Server Action
│   ├── dashboard/
│   │   └── page.tsx          # Protected dashboard page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
└── README.md
```

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

No environment variables are required for the basic demo. In production, you should:

- Use a proper authentication system (e.g., NextAuth.js, Auth0)
- Store passwords securely with hashing (e.g., bcrypt)
- Use a database for user management
- Configure proper cookie settings for your domain

## Notes

- This is a **demo application** for educational purposes
- Currently accepts any non-empty credentials
- In production, implement proper authentication and validation
- Session expires after 24 hours
- All cookies are HTTP-only for security

## Why This Works Without JavaScript

1. **Native HTML Forms**: Forms can submit to servers without JavaScript
2. **Server Actions**: Next.js processes form submissions on the server
3. **HTTP Redirects**: Server-side redirects work without client-side JS
4. **Cookies**: Set on the server, automatically included in subsequent requests
5. **Server Components**: Pages render on the server and send complete HTML

This approach provides a robust, accessible experience that works for all users, regardless of their JavaScript settings!
