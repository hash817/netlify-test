export const dynamic = 'force-dynamic';

import HeroBanner from '@/app/components/hero-banner'
import TourCard from '@/app/components/tour-card'
import TestimonialCard from '@/app/components/testimonial-card'
import LimitedDealCard from '@/app/components/limited-deals';
import DayTourCard from '@/app/components/day-tour';
import TopDestinations from '@/app/components/top-destinations';
import "./globals.css";
import Link from 'next/link';

async function getPackageFromCountry(country: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/destination/${country}?shown_on_home_page=1`
  );
  return res.json()
}

async function getPackage(package_type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/destination/all?package_type=${package_type}&shown_on_home_page=1`
  );
  return res.json()
}

export default async function Home() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Judy is professional and very detailed person. Very glad that I booked my cruise with her.",
      author: "Salicia Hoe",
      tour: "",
      image: "/images/user1.jpeg"
    },
    {
      id: 2,
      rating: 5,
      quote: "Enjoyed the tour arrangements; especially the customized free & easy holidays with this company, like the efficient and friendly services, that's why I booked holidays via them more than 4 times already.",
      author: "Gary Wong Garyyh",
      tour: "",
      image: "/images/user2.jpeg"
    }
  ];

  // const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  // await sleep(1000);
  // const singaporeData = getPackageFromCountry("singapore")
  // const taiwanData = getPackageFromCountry("taiwan")
  // const vietnamData = getPackageFromCountry("vietnam")
  // const thailandData = getPackageFromCountry("thailand")
  // const limitedData = getPackage("time_limited")
  // const dayData = getPackage("day_tour")

  // const [singapore, vietnam, taiwan, thailand] = await Promise.all([singaporeData, vietnamData, taiwanData, thailandData])

  return (
    <>
      test
    </>
  )
}