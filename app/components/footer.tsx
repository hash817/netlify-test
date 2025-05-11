import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">Kent Holidays (S) Pte Ltd</h3>
            <p className="footer-about">
              Incorporated under Singapore Companies Act in 1981 Registered
              Travel Agent with STB (Singapore Tourism Board) in 1986 IATA
              (International Air Transport Association) member since 1991 GIA
              (General Insurance Association) Appointed Trade Specific Agent
              since 2009 from Asia Pacific Insurance Pte Ltd & Etiqa Insurance Pte Ltd
            </p>
            <div className="footer-social">
              <Link href="https://www.facebook.com/kentholidays" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
              {/* <Link href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
              <Link href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
              <Link href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></Link> */}
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links p-0 list-none">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Singapore Packages</Link></li>
              <li><Link href="#">International Packages</Link></li>
              <li><Link href="#">Customized Programme</Link></li>
              <li><Link href="#">Cruise Packages</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links p-0 list-none">
              <li><Link href="/about-us">About Us</Link></li>
              {/* <li><Link href="#">Our Team</Link></li> */}
              <li><Link href="/mode-of-payment">Mode Of Payments</Link></li>
              {/* <li><Link href="#">Travel Blog</Link></li>
              <li><Link href="#">Careers</Link></li> */}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <address className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i>400 Orchard Road, #14-08
                (Front Block), Orchard Towers, Sinapore 238875
              </p>
              <p>
                <i className="fas fa-phone"></i>
                <Link href="tel:+6565341033">+65 6534 1033</Link>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <Link href="mailto:sales@kentholidays.com">sales@kentholidays.com</Link>
              </p>
              <p>
                <i className="fas fa-clock"></i> Mon-Fri: 10am-6pm | Sat/Sun: Closed
              </p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            {/* <Link href="#">Cookie Policy</Link> */}
          </div>
          <p className="footer-copyright m-0">
            &copy; {new Date().getFullYear()} Kent Holidays (S) Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}