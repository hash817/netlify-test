'use client'

import { createContext, useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';

export const FilterContext = createContext({})

export function FilterProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const searchParams = useSearchParams();

    const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
        timeLimited: searchParams.get('timeLimited') === 'true',
        dayTour: searchParams.get('dayTour') === 'true',
        multiDay: searchParams.get('multiDay') === 'true',
        transportation: searchParams.get('transportation') === 'true'
    });
    useEffect(() => {
        setActiveFilters({
            timeLimited: searchParams.get('timeLimited') === 'true',
            dayTour: searchParams.get('dayTour') === 'true',
            multiDay: searchParams.get('multiDay') === 'true',
            transportation: searchParams.get('transportation') === 'true'
        })
    }, [searchParams])
    return (
        <FilterContext.Provider value={{ activeFilters, setActiveFilters }}>
            {children}
        </FilterContext.Provider>
    );
}