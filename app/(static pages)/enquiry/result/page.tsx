
export default async function Page(props: { searchParams: Promise<string[]>; }) {
  const searchParams = await props.searchParams;
  console.log(searchParams)
  if ("error" in searchParams) {
    return (
      <div className="min-h-screen flex justify-center pt-24  px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800">
            {searchParams.error as string}
          </h2>
        </div>
      </div>
    );
  }
  if ("success" in searchParams) {
    return (
      <div className="min-h-screen flex justify-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-800">
            {searchParams.success as string}
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex justify-center pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-800">
          Error 404
        </h2>
      </div>
    </div>
  );
}
