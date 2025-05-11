import { FilterProvider } from "@/app/(tour pages)/destinations/[country]/filter-context";
import { FilterTabs } from "@/app/components/filter-tabs";
import { TourCardList } from "@/app/(tour pages)/destinations/[country]/components/tour-card-list";
import SearchBar from '@/app/(tour pages)/destinations/[country]/components/search-bar';
import { notFound } from 'next/navigation'
import { isValidCountry } from "@/app/lib/valid-countries";

function formatTitle(title) {
  if (title == 'all') return ''
  return title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export default async function CountryPage({ params }: { params: { country: string } }) {
  const { country } = await params

  if (!isValidCountry(country)) {
    notFound()
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/${encodeURIComponent(country)}`
  );
  const data = await res.json();
  return (
    <main className="mb-12!">
      <FilterProvider>
        <section className="bg-light m-0 px-5 md:px-9 lg:px-30">
          <h1 className="text-kent-purple2 text-3xl md:text-4xl font-bold text-primary mb-8 relative inline-block">
            All {formatTitle(country)} Tour Packages
            <div className="mt-2 w-22 md:w-32 lg:w-36 h-1 bg-kent-red" />
          </h1>
          <div className="bg-white shadow-md rounded-xl p-4">
            <SearchBar
              placeholder="Search for destinations, activities, or tour highlights..."
              country={country}
            />
          </div>
          <FilterTabs className="py-6 mb-10" />
        </section>
        <section className="container">
          <TourCardList tours={data} />
        </section>
      </FilterProvider>
    </main>
  );
}
