import Link from 'next/link';
import Image from 'next/image';
import LimitedDealCard from '@/app/components/limited-deals';

interface TourCardProps {
  id: number;
  title: string;
  image: string;
  dayTour?: string;
  transportation?: string;
  duration: string;
  destinations: string;
  description: string;
  highlights: string[];
  price: number;
  link: string;
  timeLimited: boolean;
  originalPrice: number;
  expiryDate: string
  endValidityDate: string;
  currency: string;
}

export function TourCard(props: TourCardProps) {
  if (props.timeLimited) {
    return (
      <LimitedDealCard short {...props} />
    );
  }
  const utcExpiryDate = new Date(props.endValidityDate);

  // Check if deal has expired - comparing UTC date with current time
  const isExpired = utcExpiryDate < new Date();

  const cardContent = (
    <article className=" relative hover:translate-y-[-10px] h-full hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] shadow-custom bg-[var(--white)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--box-shadow)] transition-[var(--transition)]">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          width={400}
          height={300}
          className="hover:scale-[1.05] relative h-[200px] w-full object-cover transition-transform duration-500 relative overflow-hidden max-w-full block"
        />
        {props.dayTour ? (
          <>
            <div className="absolute top-[15px] left-[15px] bg-kent-purple2 text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold">Day Tour</div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
          </>
        ) : props.transportation ? (
          <>
            <div className="absolute top-[15px] left-[15px] bg-kent-purple2 text-white py-[5px] px-[15px] rounded-[20px] text-[0.8rem] font-semibold">Transportation</div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div>
          </>
        ) : null}
      </div>

      <div className="pl-[1rem] pr-[1rem] pt-[0.5rem]">
        <h3 className="leading-7 text-[var(--text-color)] text-[1.3rem] mt-0! mb-[0.1rem]!">{props.title}</h3>
        <div className="flex gap-12 mb-[0.5rem]! text-[0.9rem] text-[var(--text-light)]">
          {props.duration !== '' && (
            <span className="flex items-start">
              <i className="far fa-calendar-alt mr-[5px]! mt-[4px] text-[var(--primary-color)]"></i> {props.duration}
            </span>
          )}

          <span className='flex items-start'>
            <i className="fas fa-map-marker-alt mr-[5px]! mt-[5px] text-[var(--primary-color)]"></i> {props.destinations}
          </span>
        </div>
        {/* <p className="text-[var(--text-light)] mb-[0.5rem]! text-[0.95rem]">{props.description}</p> */}

        {props.description && (
          <div className="pb-[1.5rem]!">
            {/* <div className="text-[0.9rem] font-semibold text-kent-purple">Tour Highlights:</div>
<ul className="text-[0.85rem] text-[var(--text-light)] p-0 ml-3">
 {props.highlights.length > 0 ? (
 props.highlights.slice(0, 3).map((highlight, index) => (
   <li key={index} className="flex items-start mb-1!">
     <span className="text-kent-purple2 mr-2!">✓</span>
     {highlight}
   </li>
 ))
) : (
 <p className="text-[var(--text-light)] mb-[1.5rem]! text-[0.95rem]">{description}</p>
)}
  {props.highlights.map((highlight, index) => (
 <li key={index} className="flex items-start mb-1">
   <span className="text-kent-purple2 mr-2">✓</span>
   {highlight}
 </li>
))}
</ul> */}
            <p className="mt-0 text-[var(--text-light)] mb-[0.8rem] text-[0.95rem]">{props.description}</p>
          </div>
        )}

        <div className="flex items-center absolute bottom-0">
          <div>
            <span className="text-[0.8rem] text-[var(--text-light)]">From </span>
            <span className="text-[var(--primary-color)] font-bold text-[1.3rem]">{props.currency} ${props.price}</span>
            <span className="text-[0.8rem] text-[var(--text-light)]"> per person</span>
          </div>
        </div>
      </div>
    </article>
  )
  return (
    isExpired ? (
      <div className="block cursor-not-allowed! opacity-75 grayscale">{cardContent}</div>
    ) : (
      <Link href={props.link} className="block">{cardContent}</Link>
    )
  );
}