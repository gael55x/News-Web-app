'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();
  // console.log('Pathnames: ', path);

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  );
}