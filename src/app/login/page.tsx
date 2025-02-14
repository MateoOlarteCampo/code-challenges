// app/login/page.tsx
import { redirect } from 'next/navigation';

export default function LoginPage() {
  redirect('/dashboard'); // Redirect to the /dashboard page
}