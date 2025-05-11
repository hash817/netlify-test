import Link from 'next/link';
import Image from 'next/image';

interface TourCardProps {
  id: number;
  title: string;
  image: string;
  dayTour?: string;
  transportation: string;
  duration: string;
  destinations: string;
  endValidityDate: string;
  description: string;
  highlights: string[];
  price: number;
  link: string;
  currency: string;
}

export default function TourCard({
  title,
  image,
  dayTour,
  transportation,
  duration,
  destinations,
  endValidityDate,
  highlights,
  description,
  price,
  link,
  currency
}: TourCardProps) {
  const utcExpiryDate = new Date(endValidityDate);

  // Check if deal has expired - comparing UTC date with current time
  const isExpired = utcExpiryDate < new Date();

  const cardContent = (
    <article className="h-full relative hover:translate-y-[-10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] shadow-custom bg-[var(--white)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--box-shadow)] transition-[var(--transition)]">
      <div className="relative h-[250px] overflow-hidden ">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="hover:scale-[1.05] relative h-[250px] w-full object-cover transition-transform duration-500 relative overflow-hidden max-w-full block"
        />
        {dayTour ? (
          <>
            <div className="absolute top-[15px] left-[15px] bg-kent-purple2 text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold">Day Tour</div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
          </>
        ) : transportation ? (
          <>
            <div className="absolute top-[15px] left-[15px] bg-kent-purple2 text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold">Transportation</div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
          </>
        ) : null}
      </div>

      <div className="pt-1! p-[1rem]">
        <h3 className="text-[var(--text-color)] text-[1.5rem] m-0">{title}</h3>
        <div className="flex gap-25 mb-[0.5rem]! text-[0.9rem] text-[var(--text-light)]">
          {duration !== '' && (
            <span className="flex items-start">
              <i className="far fa-calendar-alt mr-[5px]! mt-[4px] text-[var(--primary-color)]"></i> {duration}
            </span>
          )}
          <span className='flex items-start'>
            <i className="fas fa-map-marker-alt mr-[5px]! mt-[5px] text-[var(--primary-color)]"></i> {destinations}
          </span>
        </div>

        {/* <p className="text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{description}</p> */}

        {description && (
          <div className="pb-[3rem] sm:pb-[2rem]">
            {/* <div className="text-[0.9rem] font-semibold mb-1! text-kent-purple2">Tour Highlights:</div>
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
     </ul> */}
            <p className="mt-0 text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{description}</p>
          </div>
        )}


        <div className="flex justify-between items-center absolute bottom-0 pb-3">
          <div>
            <span className="text-[0.8rem] text-[var(--text-light)]">From </span>
            <span className="text-[var(--primary-color)] font-bold text-[1.5rem]">{currency} ${price}</span>
            <span className="text-[0.8rem] text-[var(--text-light)]"> per person</span>
          </div>
          {/* <Link href={link} className="mr-10 hover:bg-[var(--primary-dark)] bg-[var(--primary-color)] text-[var(--white)] py-[8px] px-[20px] rounded-[var(--border-radius)] text-[0.9rem] font-semibold transition-[var(--transition)]">View Details</Link> */}
        </div>
      </div>
    </article>
  );
  return (
    isExpired ? (
      <div className="block cursor-not-allowed opacity-75 grayscale">{cardContent}</div>
    ) : (
      <Link href={link} className="block">{cardContent}</Link>
    )
  );
}