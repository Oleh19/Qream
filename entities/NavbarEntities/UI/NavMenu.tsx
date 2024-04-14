import React from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  key: string;
}

interface NavMenuProps {
  navLinks: NavLink[];
}

const NavMenu = ({ navLinks }: NavMenuProps) => {
  return (
    <ul className='hidden h-full gap-12 lg:flex'>
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
