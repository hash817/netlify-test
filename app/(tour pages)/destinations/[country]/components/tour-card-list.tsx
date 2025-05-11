"use client"

import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../filter-context";
import { TourCard } from "@/app/components/tour-card-v2";

export function TourCardList({ tours }: { tours: Array<{}> }) {
    const { activeFilters, setActiveFilters } = useContext<any>(FilterContext)
    const [toursShown, setToursShown] = useState([]);

    useEffect(() => {
        const filteredTours = {
            all: tours.filter(tour => {
                if (!activeFilters.timeLimited && !activeFilters.dayTour &&
                    !activeFilters.multiDay && !activeFilters.transportation) {
                    return true;
                }
                return (
                    (activeFilters.timeLimited && tour.timeLimited) ||
                    (activeFilters.dayTour && tour.dayTour) ||
                    (activeFilters.multiDay && tour.multiDay) ||
                    (activeFilters.transportation && tour.transportation)
                );
            }),
            timeLimited: tours.filter(tour => tour.timeLimited),
            dayTour: tours.filter(tour => tour.dayTour),
            multiDay: tours.filter(tour => tour.multiDay),
            transportation: tours.filter(tour => tour.transportation),
        };
        console.log(filteredTours['all'])
        if (filteredTours['all'].length == 0) {
            setToursShown(null);
        } else {
            setToursShown(filteredTours['all']);
        }

    }, [activeFilters, tours])

    if (!toursShown && !Object.values(activeFilters).every(value => value === false)) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">No tours match your selected filters.</p>
                <button
                    className="cursor-pointer border-[0] mt-4! bg-(--primary-color) text-white px-6 py-2 rounded-full"
                    onClick={() => setActiveFilters({ timeLimited: false, dayTour: false, multiDay: false, transportation: false })}
                >
                    Clear Filters
                </button>
            </div>
        );
    }

    if (!toursShown && Object.values(activeFilters).every(value => value === false)) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">No tour packages found.</p>
            </div>
        );
    }
    
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-10">
                {toursShown.map(tour => (
                    <TourCard key={tour.id} {...tour} />
                ))}
            </div>
        </>
    );
}