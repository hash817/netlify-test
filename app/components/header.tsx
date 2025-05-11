'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PT_Sans_Narrow } from 'next/font/google'
import localFont from 'next/font/local'

// const pt_thin = PT_Sans_Narrow({
//   weight: '400',
//   subsets: ['latin'],
// })

// const pt_bold = PT_Sans_Narrow({
//   weight: '700',
//   subsets: ['latin'],
// })

const browaui = localFont({ src: '../../public/fonts/browaui.ttf' })
const humanist = localFont({ src: '../../public/fonts/humanist.otf' })
const humanist_light = localFont({ src: '../../public/fonts/humanist-light.ttf' })

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // track which dropdown is open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <header className="main-header p-0 m-0">
                        <Link href="/destinations/singapore">Singapore</Link>
      <Link href="/destinations/dubai">Dubai</Link>
                          <Link href="/destinations/taiwan">Taiwan</Link>
                          <Link href="/destinations/malaysia">Malaysia</Link>
        

    </header>
  );
}
