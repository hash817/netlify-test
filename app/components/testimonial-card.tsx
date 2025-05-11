import Image from 'next/image';

interface TestimonialCardProps {
  id: number;
  rating: number;
  quote: string;
  author: string;
  tour: string;
  school?: string;
  image: string;
}

export default function TestimonialCard({
  rating,
  quote,
  author,
  tour,
  school,
  image
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card flex flex-col">
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star ${i < rating ? 'filled' : ''}`}
          ></i>
        ))}
      </div>
      <blockquote className="testimonial-quote m-0!">
        {quote}
      </blockquote>
      <div className="testimonial-author mt-auto!">
        <Image
          src={image}
          alt={author}
          width={80}
          height={80}
          className="author-image"
        />
        <div className="author-info">
          <h4 className="author-name">{author}</h4>
          <p className="author-tour m-0 p-0">{tour}</p>
          <p className="text-gray-950 m-0 p-0 ">{school}</p>
        </div>
      </div>
    </div>
  );
}