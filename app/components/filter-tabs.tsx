// interface TabProps {
//   id: string;
//   label: string;
// }

// interface FilterTabsProps {
//   tabs: TabProps[];
//   activeTab: string;
//   onTabChange: (tab: string) => void;
// }
//export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
'use client';

import { useState, useEffect, useContext } from 'react';
import { FilterContext } from '../(tour pages)/destinations/[country]/filter-context';
import { usePathname, useSearchParams } from 'next/navigation';

export function FilterTabs({className}: {className: string}) {
  const searchParams = useSearchParams();
  const { activeFilters, setActiveFilters } = useContext(FilterContext)
  // const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
  //   timeLimited: searchParams.get('timeLimited') === 'true',
  //   dayTour: searchParams.get('dayTour') === 'true',
  //   multiDay: searchParams.get('multiDay') === 'true',
  //   transportation: searchParams.get('transportation') === 'true'
  // });

  const toggleFilter = (filter) => {
    setActiveFilters({
      ...activeFilters,
      [filter]: !activeFilters[filter]
    });
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <span className="text-gray-600 self-center">Filter by:</span>

      <button
        className={`border-[0] px-4 py-1.5 text-sm rounded-full transition-all font-medium ${activeFilters.timeLimited ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'}`}
        onClick={() => toggleFilter('timeLimited')}
      >
        Time Limited
      </button>

      <button
        className={`border-[0] px-4 py-1.5 text-sm rounded-full transition-all font-medium ${activeFilters.dayTour ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'}`}
        onClick={() => toggleFilter('dayTour')}
      >
        Day Tours
      </button>

      <button
        className={`border-[0] px-4 py-1.5 text-sm rounded-full transition-all font-medium ${activeFilters.multiDay ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'}`}
        onClick={() => toggleFilter('multiDay')}
      >
        Multi-Day Tours
      </button>

      <button
        className={`border-[0] px-4 py-1.5 text-sm rounded-full transition-all font-medium ${activeFilters.transportation ? 'bg-blue-600 text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'}`}
        onClick={() => toggleFilter('transportation')}
      >
        Transportation
      </button>
    </div>
  );
}