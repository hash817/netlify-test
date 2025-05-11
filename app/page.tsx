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
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/${country}?shown_on_home_page=1`
  );
  return res.json()
}

async function getPackage(package_type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/all?package_type=${package_type}&shown_on_home_page=1`
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
  const singaporeData = getPackageFromCountry("singapore")
  const taiwanData = getPackageFromCountry("taiwan")
  const vietnamData = getPackageFromCountry("vietnam")
  const thailandData = getPackageFromCountry("thailand")
  // const limitedData = getPackage("time_limited")
  // const dayData = getPackage("day_tour")

  const [singapore, vietnam, taiwan, thailand] = await Promise.all([singaporeData, vietnamData, taiwanData, thailandData])

  return (
    <>
      <HeroBanner />
      {singapore.length != 0 && (
        <section id="featured-tours" className="featured-tours py-1 px-10">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Top Singapore Getaways</h2>
              <p className="section-subtitle">
                Discover our carefully curated travel experiences that showcase the best of Singapore
              </p>
            </div>

            <div className="tour-grid">
              {singapore.slice(-3).map(tour => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>

            <div className="section-footer">
              <Link href="/destinations/singapore" className="view-all-button">View All Singapore Packages <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>
      )}

      {/* <section className="section-footer bg-(--bg-light) pb-3 px-10">
        <div className="container ">
          <div className="section-header">
            <h2 className="section-title pt-1">Limited-Time Offers</h2>
          </div>

          <div className="tour-grid">
            {limited.slice(-3).map(deal => (
              <LimitedDealCard key={deal.id} {...deal} />
            ))}
          </div>

          <div className="section-footer">
          <Link href="/destinations/all?timeLimited=true" className="view-all-button">View All Limited Deals <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section> */}
      {vietnam.length != 0 && (
        <section className="section-footer bg-white pb-6 px-3 sm:px-10">
          <div className="container ">
            <div className="section-header">
              <h2 className="section-title pt-1">Vietnam Packages</h2>
            </div>

            <div className="tour-grid">
              {vietnam.slice(-3).map(tour => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>

            <div className="section-footer">
              <Link href="/destinations/vietnam" className="view-all-button">View all Vietnam tour packages<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>
      )}
      {taiwan.length != 0 && (
        <section className="section-footer bg-white pb-6 px-3 sm:px-10">
          <div className="container ">
            <div className="section-header">
              <h2 className="section-title pt-1">Taiwan Packages</h2>
            </div>

            <div className="tour-grid">
              {taiwan.slice(-3).map(tour => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>

            <div className="section-footer">
              <Link href="/destinations/taiwan" className="view-all-button">View all Taiwan tour packages<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>
      )}
      {thailand.length != 0 && (
        <section className="section-footer bg-white pb-6 px-3 sm:px-10">
          <div className="container ">
            <div className="section-header">
              <h2 className="section-title pt-1">Thailand Packages</h2>
            </div>

            <div className="tour-grid">
              {thailand.slice(-3).map(tour => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>

            <div className="section-footer">
              <Link href="/destinations/thailand" className="view-all-button">View all Thailand tour packages<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>
      )}
      {/* {day.length != 0 && (
        <section className="section-footer px-10 pb-3">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Day Tours</h2>
            </div>

            <div className="tour-grid">
              {day.slice(-3).map(tour => (
                <DayTourCard key={tour.id} {...tour} />
              ))}
            </div>

            <div className="section-footer">
              <Link href="/destinations/all?dayTour=true" className="view-all-button">
                View All Day Tours <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      )} */}


      <section className="section-footer pt-3 px-10 bg-(--bg-light)">
        <div className="container ">
          <div className="section-header">
            <h2 className="section-title m-0">Explore Beyond Singapore</h2>
          </div>

          <TopDestinations />

        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Traveler Stories</h2>
            <p className="section-subtitle">
              What our customers say about their experiences
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready for Your Next Adventure?</h2>
            <p className="cta-text">
              Contact our travel specialists to plan your perfect itinerary
            </p>
            <div className="cta-buttons">
              <Link href="tel:+6565341033" className="cta-button phone-button">
                <i className="fas fa-phone"></i> Call Now
              </Link>
              <Link href="/enquiry" className="cta-button email-button">
                <i className="fas fa-envelope"></i> Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}