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
      <div className="bg-(--corporate) text-white sm:px-6 px-[0] py-2">
        <div className="flex justify-end items-center">
          <div className="flex items-center">
            <Link href="mailto:info@kentholidays.com" className="flex text-white items-center text-sm mr-6! hover:text-blue-300 transition-colors">
              <i className="fas fa-envelope h-4 w-4 mr-1!"></i>
              <span className='hidden sm:block'>sales@kentholidays.com</span>
            </Link>
            <Link href="tel:+6591234567" className="flex text-white items-center text-sm mr-6! hover:text-blue-300 transition-colors">
              <i className="fas fa-phone h-4 w-4 mr-1!"></i>
              <span className='hidden sm:block'>+65 6534 1033</span>
            </Link>
            <Link href="https://facebook.com/kentholidays" target="_blank" rel="noopener noreferrer" className="mr-6 text-white flex items-center text-sm hover:text-blue-300 transition-colors">
              <i className="fab fa-facebook-f h-4 w-4 mr-1!"></i>
              <span className="hidden sm:block">follow us</span>
            </Link>
            <Link href="/about-us" className="text-white flex items-center text-sm hover:text-blue-300 transition-colors">
              <i className="fas fa-info h-4 w-4 mr-1!"></i>
              <span className="hidden sm:block">about us</span>
            </Link>
          </div>
          {/* <div>
            <a href="/enquiry" target="_blank" rel="noopener noreferrer" className="text-white flex items-center text-sm hover:text-blue-300 transition-colors">
              <span className='text-sm'>Contact Us</span>
            </a>
          </div> */}
        </div>
      </div>
      <div className="p-0 m-0">
        <div className="header-content p-0 sm:ml-5! sm:mr-8! ml-0!">
          <Link href="/" className="logo">
            <Image src="/images/kent.jpg" width={85} height={90} alt="Kent Holidays Logo" priority/>
            <div className="leading-7 p-0 m-0">
              <span className={`${humanist.className} tracking-[.10em]  text-(--corporate)`}>KENT</span>
              <span className={`${humanist_light.className} leading-8 tracking-[.10em] text-(--corporate)`}>HOLIDAYS</span>
              <span className={`${browaui.className} leading-3 text-[#ce2620] tracking-[.10em] text-[1.43rem] font-thin block`}>your world starts here</span>
            </div>
          </Link>

          <button
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'active pl-[1.5rem]' : ''}`}>
            <ul className="nav-list p-0 m-0">
              {[
                {
                  title: 'Singapore Packages',
                  content: (
                    <div className="dropdown-column">
                      <ul className='p-0 list-none'>
                        <li><Link onClick={toggleMenu} href="/destinations/singapore">Top Packages</Link></li>
                        <li><Link onClick={toggleMenu} href="/destinations/singapore?dayTour=true">Day Tour</Link></li>
                        <li><Link onClick={toggleMenu} href="/destinations/singapore?multiDay=true">Multi-Day Journey</Link></li>
                        <li><Link onClick={toggleMenu} href="/destinations/singapore?transportation=true">Transportation</Link></li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: 'International Packages',
                  content: (
                    <>
                      <div className="dropdown-column">
                        <h3 className="dropdown-heading p-0 m-0">Asia</h3>
                        <ul className='p-0 m-0 list-none'>
                          <li><Link onClick={toggleMenu} href="/destinations/dubai">Dubai</Link></li>
                          <li><Link onClick={toggleMenu} href="/destinations/taiwan">Taiwan</Link></li>
                          <li><Link onClick={toggleMenu} href="/destinations/malaysia">Malaysia</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown-column">
                        <h3 className="dropdown-heading">ASEAN</h3>
                        <ul className='p-0 m-0 list-none'>
                          <li><Link onClick={toggleMenu} href="/destinations/thailand">Thailand</Link></li>
                          <li><Link onClick={toggleMenu} href="/destinations/vietnam">Vietnam</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown-column">
                        <h3 className="dropdown-heading">China</h3>
                        <ul className='p-0 m-0 list-none'>
                          <li><Link onClick={toggleMenu} href="#">Beijing</Link></li>
                          <li><Link onClick={toggleMenu} href="#">Xiamen</Link></li>
                          <li><Link onClick={toggleMenu} href="#">Shenzhen</Link></li>
                        </ul>
                      </div>
                    </>
                  ),
                },
                {
                  title: 'Cruise Packages',
                  content: (
                    <ul className='p-0 m-0 list-none'>
                      <li><Link onClick={toggleMenu} href="/cruise/genting-dream">Genting Dream</Link></li>
                      <li><Link onClick={toggleMenu} href="/cruise/star-voyager">Star Voyager</Link></li>
                      <li><Link onClick={toggleMenu} href="/cruise/star-navigator">Star Navigator</Link></li>
                    </ul>
                  ),
                },
                {
                  title: 'Customized Programme',
                  content: (
                    <ul className='p-0 m-0 list-none'>
                      <li><Link onClick={toggleMenu} href="/schools">School Trip</Link></li>
                      <li><Link onClick={toggleMenu} href="#">Corporate Retreat</Link></li>
                      <li><Link onClick={toggleMenu} href="#">Family Package</Link></li>
                    </ul>
                  ),
                },
                {
                  title: 'Travel Insurance',
                  content: (
                    <ul className='p-0 m-0 list-none'>
                      <li><Link onClick={toggleMenu} target="_blank" rel="noopener noreferrer" href="https://www.etiqa.com.sg/online/quotation/Travel-Infinite?referral=KentHolidays&referralId=910733&promoCode=TS20">eTiQa</Link></li>
                      <li><Link onClick={toggleMenu} target="_blank" rel="noopener noreferrer" href="https://www.aig.sg/personal/travel-guard/producers?dc=Y&sc=888&pc=010244&staff=Y">AIG Travel Guard</Link></li>
                      <li><Link onClick={toggleMenu} target="_blank" rel="noopener noreferrer" href="https://www.aig.sg/home/solutions/personal/travel-guard/lite/travel-guard-lite?dc=Y&sc=Y&pc=010244&staff=Y&st=TLPT">AIG Travel Guard Lite</Link></li>
                    </ul>
                  ),
                },
              ].map((dropdown, index) => (
                <li
                  key={index}
                  className={`list-none nav-item dropdown ${activeDropdown === index ? 'active' : ''}`}
                >
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <span className='inline-block sm:text-sm xl:text-base'>{dropdown.title}</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="dropdown-menu  sm:text-sm! xl:text-base! sm:min-w-[7em] xl:min-w-[9em]">{dropdown.content}</div>
                </li>
              ))}

              {/* <li className="nav-item">
                <Link href="#" className="nav-link">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
