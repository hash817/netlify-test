"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LimitedDealCardProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  destinations: string;
  description: string;
  originalPrice: number;
  price: number;
  highlights: string[]
  expiryDate: string; // Assumed to be in UTC timezone
  link: string;
  short: boolean
}

export default function LimitedDealCard({ short, ...props }: LimitedDealCardProps) {
  // State to store user's timezone
  // const [userTimezone, setUserTimezone] = useState<string>("");

  // Calculate discount percentage
  const discountPercent = Math.round(((props.originalPrice - props.price) / props.originalPrice) * 100);

  // Parse the UTC date string - expiryDate is already in UTC format
  const utcExpiryDate = new Date(props.expiryDate);

  // Check if deal has expired - comparing UTC date with current time
  const isExpired = utcExpiryDate < new Date();

  // Format expiry date with time in user's local timezone
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) + ' at ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get user's timezone on component mount
  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      //setUserTimezone(timezone);
    } catch (e) {
      //setUserTimezone("your local timezone");
    }
  }, []);

  const cardContent = (
    <article className={`h-full relative hover:translate-y-[-10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-[var(--white)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--box-shadow)] transition-[var(--transition)] ${isExpired ? 'opacity-75 grayscale' : ''}`}>
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          width={400}
          height={300}
          className="hover:scale-[1.05] relative h-[250px] w-full object-cover transition-transform duration-500 relative overflow-hidden max-w-full block"
        />
        {props.originalPrice == null ? (
          <></>
        ) : (
          <div className="absolute top-[15px] right-[15px] bg-kent-red text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-bold">
            {props.originalPrice}% OFF
          </div>
        )}

        <div className={`absolute bottom-[15px] left-[15px] py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold ${isExpired
          ? 'bg-gray-600 text-white'
          : 'bg-kent-purple2 text-white'
          }`}>
          {isExpired ? 'Expired Offer' : 'Ending on ' + formatDate(utcExpiryDate)}
        </div>

      </div>

      <div className="pt-1! p-[1rem]">
        <h3 className="leading-7 text-[var(--text-color)] text-[1.3rem] mt-0! pt-1 mb-[0.1rem]!">{props.title}</h3>
        <div className="flex gap-[15px] text-[0.9rem] text-[var(--text-light)]">
          <span className="">
            <i className="far fa-calendar-alt mr-[5px]! text-[var(--primary-color)]"></i> {props.duration}
          </span>
          {props.destinations && (
            <span>
              <i className="fas fa-map-marker-alt mr-[5px]! text-[var(--primary-color)]"></i> {props.destinations}
            </span>
          )}
        </div>

        {/* <p className="text-[var(--text-light)] mb-[0.5rem]! text-[0.95rem]">{props.description}</p> */}
        <div className="pb-3">
          <div className="text-[0.9rem] text-kent-purple font-semibold">Tour Highlights:</div>
          <ul className="text-[0.85rem] text-[var(--text-light)] p-0 ml-3">
            {props.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start mb-1">
                <span className="text-kent-purple2 mr-2">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mb-[1rem]! absolute bottom-0">
          <div className="flex items-baseline">
            <p className="text-kent-purple2 m-0! font-bold text-xl mr-1!">${props.price}</p>
            {props.originalPrice == null ? (
              <></>
            ) : (
              <p className="text-gray-400 m-0! text-xs line-through mr-1!"> ${props.originalPrice}</p>
            )}

            <p className="text-gray-500 m-0! text-xs"> per person</p>
          </div>
        </div>
      </div>
    </article>
  );

  if (short) {
    return (
      isExpired ? (
        <div className="block cursor-not-allowed">{cardContent}</div>
      ) : (
        <Link href={props.link} className="block">{cardContent}</Link>
      )
    );
  }
  return (
    <article className={`hover:translate-y-[-10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-[var(--white)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--box-shadow)] transition-[var(--transition)] ${isExpired ? 'opacity-75 grayscale' : ''}`}>
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          width={400}
          height={300}
          className="hover:scale-[1.05]  h-[250px] w-full object-cover transition-transform duration-500 overflow-hidden max-w-full block"
        />
        {props.originalPrice == null ? (
          <></>
        ) : (
          <div className="absolute top-[15px] right-[15px] bg-kent-red text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-bold">
            {props.originalPrice}% OFF
          </div>
        )}

        <div className={`absolute bottom-[15px] left-[15px] py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold ${isExpired
          ? 'bg-gray-600 text-white'
          : 'bg-kent-purple2 text-white'
          }`}>
          {isExpired ? 'Expired Offer' : 'Limited Offer'}
        </div>
      </div>

      <div className="pt-1! p-[1rem]">
        <h3 className="text-[var(--text-color)] text-[1.5rem] m-0">{props.title}</h3>
        <div className="flex gap-[15px] mb-[1rem]! text-[0.9rem] text-[var(--text-light)]">
          <span className="">
            <i className="far fa-calendar-alt mr-[5px]! text-[var(--primary-color)]"></i> {props.duration}
          </span>
          {props.destinations && (
            <span>
              <i className="fas fa-map-marker-alt mr-[5px]! text-[var(--primary-color)]"></i> {props.destinations}
            </span>
          )}
        </div>
        <div className="">
          <div className="text-[0.9rem] font-semibold">Tour Highlights:</div>
          <ul className="text-[0.85rem] text-[var(--text-light)] p-0 ml-3">
            {/* {props.highlights.length > 0 ? (
              props.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start mb-1!">
                  <span className="text-kent-purple2 mr-2!">✓</span>
                  {highlight}
                </li>
              ))
            ) : (
              <p className="text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{props.description}</p>
            )} */}
            {props.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start mb-1">
                <span className="text-kent-purple2 mr-2">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        {/* <p className="text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{props.description}</p> */}

        <div className="flex justify-between items-center pb-[1.5rem]!">
          <div className="">
            <span className="text-[0.8rem] text-[var(--text-light)]">Deal Price</span>
            <div className="flex items-center gap-2">
              <span className="text-[var(--primary-color)] font-bold text-[1.5rem]">${props.price}</span>
              {props.originalPrice == null ? (
                <></>
              ) : (
                <p className="text-gray-400 m-0! text-xs line-through mr-1!"> ${props.originalPrice}</p>
              )}            </div>
            <span className="text-[0.8rem] text-[var(--text-light)]">per person</span>
          </div>
          <div className={`border rounded-lg px-3 py-2 ${isExpired
            ? 'bg-gray-100 border-gray-300'
            : 'bg-amber-100 border-amber-300'
            }`}>
            <div className={`text-[0.7rem] font-medium ${isExpired
              ? 'text-gray-700'
              : 'text-amber-800'
              }`}>
              {isExpired ? 'Offer ended on' : 'Offer ends on'}
            </div>
            <div className={`text-[0.9rem] font-bold ${isExpired
              ? 'text-gray-900'
              : 'text-amber-900'
              }`}>
              {formatDate(utcExpiryDate)}
            </div>
          </div>
        </div>

        {isExpired ? (
          <button
            disabled
            className="bg-gray-400 w-full text-white py-[10px] px-[20px] rounded-[var(--border-radius)] text-[0.9rem] font-semibold block text-center cursor-not-allowed"
          >
            Offer Expired
          </button>
        ) : (
          <Link
            href={props.link}
            className="bg-kent-purple2 text-white py-[10px] px-[20px] rounded-[var(--border-radius)] text-[0.9rem] font-semibold transition-[var(--transition)] block text-center"
          >
            View Deal Details Now
          </Link>
        )}
      </div>
    </article>
  );
}