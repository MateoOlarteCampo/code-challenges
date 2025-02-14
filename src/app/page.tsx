// app/page.tsx
'use client'; // Mark this component as a Client Component

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/about'); // Navigate to the /about page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Go to About</button>
    </div>
  );
}