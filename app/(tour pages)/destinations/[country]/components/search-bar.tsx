'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import Form from "next/form"

interface SearchBarProps {
  placeholder?: string;
  country?: string
  className?: string;
  defaultQuery?: string
}
export default function SearchBar({
  placeholder = "Search for destinations, activities, or package types...",
  country,
  className = "",
  defaultQuery = ""
}: SearchBarProps) {
  const [query, setQuery] = useState<string>(defaultQuery);

  const clearSearch = () => setQuery('');

  return (
    <Form
      className={`flex gap-2 ${className}`}
      action="/search"
    >
      <div className="relative flex flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <Search size={18} />
        </div>

        <input
          type="text"
          name='fulltext'
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type="hidden"
          name='country_of_package'
          value={country}
        />

        {/*         
        {query && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            onClick={clearSearch}
          >
            <X size={18} />
          </button>
        )} */}
      </div>
        <button className="hidden sm:block cursor-pointer border-none bg-[#ce4533] text-white px-5 py-3 rounded-md font-medium hover:bg-[#b53d2d] transition">
          Search
        </button>
    </Form>
  );
}
