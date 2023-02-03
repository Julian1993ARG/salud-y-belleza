'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function Navigation ({
  slug,
  children,
  className
}: {
  slug: string,
    children: string,
  className?: string
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const patchname = usePathname();
  const isActive = slug === patchname;

  return (
    <Link
      className={`${className} ${isActive ? 'text-pink-500 font-bold' : ''} `}
      href={slug}
      // Change style depending on whether the link is active
    >
      {children}
    </Link>
  );
}
