import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { isValidCountry } from "@/app/lib/valid-countries";
import { notFound } from 'next/navigation'

export default async function PackageDetails({ params }: { params: { title: string, id: string | number, country: string } }) {
  const { title, id, country } = await params
  if (!isValidCountry(country)) {
    notFound()
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/${encodeURIComponent(country)}/${encodeURIComponent(title)}/${id}`
  );
  const data = await res.json();
  const packageInfo = data[0]

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto! pt-8! px-4 py-6">
        <h1 className="text-3xl font-bold text-kent-purple2 mb-6!">
          {packageInfo.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10!">

          <div className="md:col-span-1 flex flex-col justify-end">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                width={500}
                height={200}
                src={packageInfo.image}
                alt={packageInfo.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <div className="mb-4!">
              {
                packageInfo.timeLimited && packageInfo.originalPrice != null ? (
                  <>
                    <span className="font-bold text-2xl mr-1!">From {packageInfo.currency} ${packageInfo.price}</span>
                    <span className="text-gray-400 text-sm line-through mr-1!">${packageInfo.originalPrice}</span>
                    <p className="text-gray-600"> per person</p>
                  </>
                ) : (
                  <>
                    <span className="text-2xl font-bold">From {packageInfo.currency} ${packageInfo.price}</span>
                    <span className="text-gray-600 ml-2!">per person</span>
                  </>
                )
              }
            </div>

            <ul className="mb-6! space-y-3! pl-5">
              <li className="flex items-center">
                {/* <div className="w-2 h-2 rounded-full bg-(--primary-color) mr-3!"></div>
                <span>{packageInfo.destinations}</span> */}
                <span>
                  <i className="fas fa-map-marker-alt mr-[5px]! text-[var(--primary-color)]"></i> {packageInfo.destinations}
                </span>
              </li>
              {packageInfo.duration !== '' && (
                <li className="flex items-center">
                  {/* <div className="w-2 h-2 rounded-full bg-(--primary-color) mr-3!"></div>
    <span>Duration: {packageInfo.duration}</span> */}
                  <span className="">
                    <i className="far fa-calendar-alt mr-[5px]! text-[var(--primary-color)]"></i> {packageInfo.duration}
                  </span>
                </li>
              )}
              {/* <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-(--primary-color) mr-3!"></div>
                <span>Mobile ticket available</span>
              </li>
              {packageInfo.transportation && (
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-(--primary-color) mr-3!"></div>
                  <span>Transportation included</span>
                </li>
              )} */}

              {/* {packageInfo.highlights.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-(--primary-color) mr-3!"></div>
                  <span>{item}</span>
                </li>
              ))} */}

            </ul>


            <div className="mt-auto!"  >
              <Link href={`/enquiry?package_name=${packageInfo.title}`} className="inline-block bg-(--primary-color) hover:bg-(--primary-dark) text-white font-bold py-3 px-6 rounded transition">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
        {packageInfo.description && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8!">
            <h2 className="text-xl font-bold text-(--primary-color) pb-3 border-b border-gray-200 mb-4!">
              Overview
            </h2>
            <p className="text-gray-700">
              {packageInfo.description}
            </p>
          </div>
        )}
        {packageInfo.pdf && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8!">
            <h2 className="text-xl font-bold text-(--primary-color) pb-3 border-b border-gray-200 mb-4!">
              Tour Itinerary
            </h2>
            <p className="text-gray-700">
              Experience this amazing tour with our professional guides. Details of the tour
              and all activities are included in our itinerary PDF.
            </p>
            <p className="mt-4! text-gray-700">
              Download our detailed itinerary PDF for complete information:
            </p>
            <Link
              target="_blank"
              href={packageInfo.pdf}
              className="inline-flex items-center text-(--primary-color) hover:underline mt-3! font-medium"
            >
              <Download size={20} className="mr-2" />
              {packageInfo.title} English Itinerary.pdf
            </Link>
            {packageInfo.chinesePdf &&
              <Link
                target="_blank"
                href={packageInfo.chinesePdf}
                className="block items-center text-(--primary-color) hover:underline mt-3! font-medium"
              >
                <Download size={20} className="mr-2" />
                {packageInfo.title} Chinese Itinerary.pdf
              </Link>
            }
          </div>
        )}

        {packageInfo.terms.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8!">
            <h2 className="text-xl font-bold text-blue-(--primary-color) pb-3 border-b border-gray-200 mb-4!">
              Special Terms and Conditions
            </h2>
            <div className="bg-gray-50 pl-4 py-1 rounded">
              {/* <p className="mb-3!"><strong>Important Notice:</strong></p> */}
              <ul className="pl-5 list-disc! space-y-1!">
                {packageInfo.terms.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}