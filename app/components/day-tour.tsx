import Link from 'next/link';
import Image from 'next/image';

interface DayTourCardProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  startTime: string;
  destinations: string;
  description: string;
  highlights: string[];
  price: number;
  reviewCount: number;
  groupSize: string;
  link: string;
}

export default function DayTourCard({
  title,
  image,
  duration,
  destinations,
  highlights,
  price,
  description,
  link
}: DayTourCardProps) {
  // const renderStars = (rating: number) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
  //   }

  //   if (hasHalfStar) {
  //     stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
  //   }

  //   const emptyStars = 5 - stars.length;
  //   for (let i = 0; i < emptyStars; i++) {
  //     stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
  //   }

  //   return stars;
  // };

  return (
    <article className="relative hover:translate-y-[-10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-[var(--white)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--box-shadow)] transition-[var(--transition)]">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={260}
          className="hover:scale-[1.05] relative h-[220px] w-full object-cover transition-transform duration-500 relative overflow-hidden max-w-full block"
        />
        <div className="absolute top-[15px] left-[15px] bg-kent-purple2 text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold">Day Tour</div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
      </div>

      <div className="pt-1! p-[1rem]">
        <h3 className="text-[var(--text-color)] text-[1.3rem] mt-0! mb-[0.5rem]!">{title}</h3>

        <div className="flex gap-[15px] mb-[0.7rem]! text-[0.9rem] text-[var(--text-light)]">
          <span className="flex items-center">
            <i className="far fa-clock mr-[5px]! text-[var(--primary-color)]"></i> {duration}
          </span>
          <span className="flex items-center">
            <i className="fas fa-map-marker-alt mr-[5px]! text-[var(--primary-color)]"></i> {destinations}
          </span>
        </div>

        {/* <div className="mb-4 flex items-center">
          <div className="flex mr-2">
            {renderStars(rating)}
          </div>
          <span className="text-[0.85rem] text-[var(--text-light)]">({reviewCount} reviews)</span>
        </div> */}

        {/* <div className="mb-4! bg-gray-50 p-3 rounded-lg">
          <div className="flex justify-between text-[0.85rem] mb-2!">
            <span className="flex items-center"><i className="far fa-calendar-check mr-1! text-green-600"></i> Start Time</span>
            <span className="font-semibold">{startTime}</span>
          </div>
          <div className="flex justify-between text-[0.85rem]">
            <span className="flex items-center"><i className="fas fa-users mr-1! text-green-600"></i> Group Size</span>
            <span className="font-semibold">{groupSize}</span>
          </div>
        </div> */}

        <div className="pb-[3rem] sm:pb-[2rem]">
          <div className="text-[0.9rem] font-semibold mb-1!">Tour Highlights:</div>
          <ul className="text-[0.85rem] text-[var(--text-light)] p-0 ml-3">
            {highlights.length > 0 ? (
              highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start mb-1!">
                  <span className="text-kent-purple2 mr-2!">✓</span>
                  {highlight}
                </li>
              ))
            ) : (
              <p className="text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{description}</p>
            )}
          </ul>
        </div>

        <div className="flex justify-between items-center absolute bottom-0 pb-3 w-full">
          <div>
            <span className="text-[var(--primary-color)] font-bold text-[1.5rem]">${price}</span>
            <span className="text-[0.8rem] text-[var(--text-light)]"> per person</span>
          </div>
          <Link href={link} className="hover:bg-kent-purple2 bg-kent-purple text-white py-[8px] px-[20px] mr-10 rounded-[var(--border-radius)] text-[0.9rem] font-semibold transition-[var(--transition)]">Book Now</Link>
        </div>
      </div>
    </article>
  );
}