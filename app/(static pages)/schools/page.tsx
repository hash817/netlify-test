import ProgramCard from "@/app/(static pages)/schools/components/program-card";
import TestimonialCard from "@/app/components/testimonial-card";

export default function SchoolsPage() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "My experience on this overseas student exchange program to China was truly enriching. The trip was well-organized, with comfortable accommodations and a great variety of buffet-style meals provided daily. I also had the opportunity to explore cutting-edge AI technologies like DeepSeek, interact with robots, and even learn traditional crafts like chopstick-making. One of the highlights was witnessing a Tai Chi master in action, which was both inspiring and culturally immersive. This trip gave me a deeper appreciation for both innovation and tradition, making it an unforgettable learning journey.",
      author: "Louis Yeo, @louisy.jpg",
      school: "Singapore Polytechnic, Information Technology",
      tour: "Shenzhen Shandong, March 2025",
      image: "/images/louis.jpeg"
    },
    {
      id: 2,
      rating: 4.5,
      quote: "As an ITE student, the hands-on sessions at Bangkok's technical college boosted my confidence tremendously. The instructors were patient and knowledgeable, and I made friends with local students too!",
      author: "Ahmad Bin Ismail",
      school: "ITE College West, Mechanical Engineering",
      tour: "Thailand Vocational Exchange, July 2023",
      image: "/images/user2.jpeg"
    }
  ];

  return (
    <main className="">
      <div
        className={`h-[60vh] flex items-center bg-cover bg-center`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80)`,
        }}
      >
        <div className="px-5 md:px-9 lg:px-30">
          <h1 className="text-white text-shadow-lg hero-title text-3xl md:text-4xl font-bold text-primary mb-8 relative inline-block">
            Educational School Trips
          </h1>
          <p className="hero-subtitle text-shadow-lg text-white text-lg mt-2">Industry-focused learning experiences for Singapore institutions</p>
        </div>

      </div>

      <section className="section-footer bg-white p-10">
        <div className="container ">
          <div className="section-header">
            <h2 className="section-title">Customized Programs for Singapore Institutions</h2>
            <p className="section-subtitle">
              We design specialized itineraries that align with your curriculum and learning objectives, featuring industry visits, cultural immersion, and hands-on workshops.
            </p>
          </div>
          <ProgramCard />
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Traveler Stories</h2>
            <p className="section-subtitle">
              What our customers say about their experiences
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}