// app/about/page.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function AboutPage() {
  const pathname = usePathname();

  return (
    <div>
      <h1>About Page</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
}