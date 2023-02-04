'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function Navigation ({
  slug,
  children,
  className,
  handleClick
}: {
  slug: string,
    children: string,
    className?: string,
    handleClick?: () => void
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const patchname = usePathname();
  const isActive = slug === patchname;

  const isToId = slug.startsWith('#');

  if (isToId) {
    return (
      <a
        className={className}
        href={slug}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={`${className} ${isActive ? 'text-pink-500 font-bold' : ''} `}
      href={slug}
      onClick={handleClick}
      // Change style depending on whether the link is active
    >
      {children}
    </Link>
  );
}
