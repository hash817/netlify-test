import Link from "next/link";

export default async function Home({ params }: { params: { country: string } }) {
  const { country } = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/destination/${encodeURIComponent(country)}`
  );
  const data = await res.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.capital}
    </div>
  );
}
