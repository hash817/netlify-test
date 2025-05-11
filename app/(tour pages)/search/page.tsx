import { FilterProvider } from "@/app/(tour pages)/destinations/[country]/filter-context";
import { FilterTabs } from "@/app/components/filter-tabs";
import { TourCardList } from "@/app/(tour pages)/destinations/[country]/components/tour-card-list";
import SearchBar from '@/app/(tour pages)/destinations/[country]/components/search-bar';
// import { SubmitSearch } from '@/app/action';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParamsData = await searchParams
  // if (!searchParamsData.fulltext) {
  //   return <div>No query</div>
  // }
  const url = new URL(`${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/search`);

  Object.entries(searchParamsData).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const res = await fetch(url.toString());
  const data = await res.json();
  console.log(data)
  return (
    <main className="mb-12!">
      <FilterProvider>
      <section className="bg-(--bg-light) m-0 px-5 md:px-9 lg:px-30">
          <h1 className="text-kent-purple text-3xl md:text-4xl font-bold text-primary mb-8 relative inline-block">
            Showing {data.length} results for {searchParamsData.fulltext}
          </h1>
          <div className="bg-white shadow-md rounded-xl p-4">
            <SearchBar
              placeholder={searchParamsData.fulltext}
              defaultQuery={searchParamsData.fulltext}
              country={searchParamsData.country_of_package}
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
