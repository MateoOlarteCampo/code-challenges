// app/dashboard/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}