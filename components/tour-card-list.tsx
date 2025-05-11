"use client"

import { useState } from "react";
import { TourCard } from "@/components/tour-card";

export function TourCardList({ tours }: { tours: Array<{}> }) {
    const [toursShown, setToursShown] = useState(tours);

    if (!toursShown) {
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