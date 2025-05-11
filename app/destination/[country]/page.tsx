import { TourCardList } from "@/components/tour-card-list";

function formatTitle(title) {
  if (title == 'all') return ''
  return title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function CountryPage({ params }: { params: { country: string } }) {
  const { country } = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/destination/${encodeURIComponent(country)}`
  );
  const data = await res.json();
  return (
    <main className="mb-12!">
        <section className="m-0 px-5 md:px-9 lg:px-30">
          <h1 className="text-black text-3xl md:text-4xl font-bold text-primary mb-8 relative inline-block">
            All {formatTitle(country)} Tour Packages
            <div className="mt-2 w-22 md:w-32 lg:w-36 h-1 bg-kent-red" />
          </h1>
        </section>
        <section className="container">
          <TourCardList tours={data} />
        </section>
    </main>
  );
}
