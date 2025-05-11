import Link from 'next/link';

export default function WhatsAppFloat() {
  return (
    // <Link
    //   href="https://wa.me/6591767552"
    //   className="whatsapp-float"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   aria-label="Chat on WhatsApp"
    // >
    //   <i className="fab fa-whatsapp"></i>
    // </Link>
    <Link
      href="/enquiry"
      className="contactus"
      // target="_blank"
      // rel="noopener noreferrer"
      aria-label="Contact us"
    >
      <span>Contact us</span>
    </Link>
  );
}