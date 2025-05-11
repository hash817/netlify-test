import Image from 'next/image';

function IntroSection() {
  return (
    <section className='px-5 sm:px-20 lg:px-50 py-4'>
      <div className="flex flex-col flex-row gap-x-10">
        <div className="sm:w-3/5">
          <p className="text-kent-red font-medium text-lg mb-6 tracking-wide">ESTABLISHED SINCE 1981</p>
          <h1 className="text-2xl md:text-4xl font-bold text-kent-purple mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-kent-red after:to-kent-red/30">
            KENT Holidays
          </h1>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-8">
            We are a premier travel agency in Singapore with four decades of experience crafting memorable journeys for our clients.
            Our specialized team of travel consultants is dedicated to providing personalized service and comprehensive travel solutions
            that turn your travel dreams into reality. From luxury cruises to corporate travel arrangements, we handle every detail with precision and care.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center relative">
              <div className="text-3xl font-bold text-kent-purple mb-2">40+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Years Experience</div>
            </div>
            <div className="text-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[70%] md:after:w-[1px] md:after:bg-gray-200 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[70%] md:before:w-[1px] md:before:bg-gray-200">
              <div className="text-3xl font-bold text-kent-purple mb-2">30+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Airline Partners</div>
            </div>
            <div className="text-center relative">
              <div className="text-3xl font-bold text-kent-purple mb-2">1000s</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Happy Clients</div>
            </div>
          </div>
        </div>
        <Image className="hidden! sm:block! object-cover! sm:w-50! sm:h-50! lg:w-100! lg:h-100! sm:mt-40 lg:mt-5" src="/images/kent.jpg" width={500} height={500} alt="Kent Holidays Logo"
         layout='responsive'/>
      </div>
    </section>
  );
}

function AccreditationsSection() {
  const accreditations = [
    'Incorporated under Singapore Companies Act in 1981',
    'Registered Travel Agent with STB (Singapore Tourism Board) in 1986',
    'IATA (International Air Transport Association) member since 1991',
    'GIA (General Insurance Association) Appointed Trade Specific Agent since 2009 from Asia Pacific Insurance Pte Ltd & Etiqa Insurance Pte Ltd'
  ];

  const partners = [
    {
      name: 'Singapore Tourism Board',
      image: '/images/aboutus/STB.png'
    },
    {
      name: 'IATA',
      image: '/images/aboutus/iata.svg'
    },
    {
      name: 'AIG',
      image: '/images/aboutus/aig.png'
    },
    {
      name: 'Etiqa',
      image: '/images/aboutus/etiqa.jpeg'
    },
  ];

  return (
    <section className='px-5 sm:px-20 lg:px-50 bg-light py-4'>
      <h2 className="text-2xl font-semibold text-kent-purple mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
        Our Accreditations
      </h2>

      <ul className="ml-4 mb-8">
        {accreditations.map((item, index) => (
          <li key={index} className="mb-4 pl-6 text-sm md:text-lg">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-around items-center">
        {partners.map((partner, index) => (
          <div key={index} className="w-[150px] h-[75px] m-4 relative transition-all hover:scale-105">
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    'Cruises',
    'Hotel Reservations',
    'Inbound & Outbound Tour',
    'MICE Travel (Meetings, Incentives, Conferences & Exhibitions)',
    'Travel Insurance',
    'Travel Visa',
    'Worldwide Air Ticketing'
  ];

  return (
    <section className='px-5 sm:px-20 lg:px-50 py-6'>
      <h2 className="text-2xl font-semibold text-kent-purple mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
        Our Services
      </h2>

      <ul className="ml-4">
        {services.map((service, index) => (
          <li key={index} className="mb-4 relative pl-6  text-sm md:text-lg">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

function TicketingSection() {
  const airlines = [
    '8M - Myanmar Airways',
    'AA - American Airlines',
    'AC - Air Canada',
    'AF - Air France',
    'AI - Air India',
    'AM - Aeromexico',
    'AY - Finnair',
    'BI - Royal Brunei',
    'BP - Air Botswana',
    'BR - Eva Air',
    'CI - China Airlines',
    'CX - Cathay Pacific',
    'CZ - China Southern',
    'DL - Delta Airlines',
    'DT - Taag',
    'DY - Norwegian Air',
    'EK - Emirates',
    'ET - Ethiopian Airlines',
    'EY - Ethihad Airways',
    'FJ - Fiji Airways',
    'GA - Garuda Indonesia',
    'GF - Gulf Air',
    'GP - APG Airlines',
    'GX - GX Airlines',
    'HR - Hahn Air',
    'HU - Hainan Airlines',
    'HX - Hong Kong Airlines',
    'HY - Uzbekistan Airways',
    'JL - Japan Airlines',
    'K6 - Cambodia Angkor',
    'KC - JSC Air Astana',
    'KL - KLM Royal Dutch',
    'KQ - Kenya Airways',
    'LA - Latam Airlines',
    'LH - Lufthansa',
    'LO - LOT Polish Airlines',
    'LQ - Lanmei Airlines',
    'LX - Swiss International',
    'MD - Air Madagascar',
    'MH - Malaysia Airlines',
    'MK - Air Mauritius',
    'MR - Hunnu Air',
    'MS - Egypt Air',
    'MU - China Eastern Airlines',
    'NX - Air Macau',
    'NZ - Air Newzealand',
    'OM - Miat Mongolian',
    'OS - Austrian Airlines',
    'OU - Croatia Airlines',
    'OZ - Asiana Airlines',
    'PG - Bangkok Airways',
    'PN - West Air',
    'PR - Philippine Airlines',
    'PX - Air Niugini',
    'QD - JC Cambodia',
    'QR - Qatar Airways',
    'QV - Lao Airlines',
    'RJ - Royal Jordanian',
    'S7 - Siberia Airlines',
    'SV - Saudi Arabian Airlines',
    'SQ - Singapore Airlines',
    'TG - Thai Airways',
    'TK - Turkish Airlines',
    'TP - Tap Portugal',
    'UB - Myanmar National',
    'UK - Vistara',
    'UL - Srilankan Airlines',
    'UQ - Urumqi Airlines',
    'UX - Air Europa',
    'VA - Virgin Australia',
    'VN - Vietnam Airlines',
    'WY - Oman Air'
  ];

  return (
    <section className='bg-light px-5 sm:px-20 lg:px-50 pt-4 pb-10'>
      <h2 className="text-2xl font-semibold text-kent-purple mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
        Our Ticketing Appointments
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {airlines.map((airline, index) => (
          <div 
          key={index} 
          className={`p-4 text-xs md:text-lg rounded-lg shadow-sm text-center transition-all hover:translate-y-1 hover:shadow-md ${
            airline === "SQ - Singapore Airlines" 
              ? "bg-yellow-200 border-yellow-400 border-2" 
              : "bg-white"
          }`}
        >
          <div className="font-medium">{airline}</div>
        </div>
        ))}
      </div>
    </section>
  );
}

function LowCostSection() {
  const airlines = [
    '5J - Cebu Air',
    '6E - Indigo',
    '7C - Jeju Air',
    '9C - Spring Airlines',
    'AK/D7 - Air Asia',
    'FY - Firefly',
    'G8 - Go Airlines',
    'IX - Air India Express',
    'JQ/3K/BL - Jet Star',
    'JT - Lion Airlines',
    'TR - Scoot',
    'UQ - Urumqi Airlines',
    'VJ - Viet Jet'
  ];

  return (
    <section className='px-5 sm:px-20 lg:px-50 pt-4 pb-10'>
      <h2 className="text-2xl font-semibold text-kent-purple mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
      Low Cost Carrier
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {airlines.map((airline, index) => (
          <div 
          key={index} 
          className={`text-xs md:text-lg p-4 rounded-lg shadow-sm text-center transition-all hover:translate-y-1 hover:shadow-md ${
            airline === "SQ - Singapore Airlines" 
              ? "bg-yellow-200 border-yellow-400 border-2" 
              : "bg-white"
          }`}
        >
          <div className="font-medium">{airline}</div>
        </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const businessHours = [
    { day: 'Monday to Friday', hours: '10:00 am to 06:00 pm' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Public Holidays', hours: 'Closed' }
  ];

  const directions = [
    {
      className: 'mb-6',
      method: 'By MRT',
      description: 'Orchard Towers is located nearest to Orchard MRT Station (NS 22).'
    },
    {
      className: 'mb-6',
      method: 'By Bus',
      description: 'Orchard Towers is located near to several bus stops at the Royal Thai Embassy and Delfi Orchard.'
    },
    {
      className: '',
      method: 'By Car - Parking Charges',
      description: (
        <div className="text-sm">
          <p className="mb-2"><strong>Monday - Friday before 5/6 PM</strong><br />
            $5.00/hr from 7am to 5.59pm</p>

          <p className="mb-2"><strong>Monday - Friday after 5/6 PM</strong><br />
            $9.00/entry from 6pm to 1.59am the following day, $9.00/entry from 2am to 6.59am the following day</p>

          <p className="mb-2"><strong>Saturday</strong><br />
            Charges same as weekdays</p>

          <p className="mb-2"><strong>Sunday and Public Holiday</strong><br />
            $9.00/entry from 7am to 1.59am the following day, $9.00/entry from 2am to 6.59am the following day</p>
        </div>
      )
    }
  ];

  return (
    <section className='bg-light px-5 sm:px-20 lg:px-50 py-4'>
      <h2 className="text-2xl font-semibold text-kent-purple mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 text-sm md:text-lg">
          <div className="flex ">
            <div className="w-36 text-sm md:text-lg font-bold">Address:</div>
            <div className='text-sm md:text-lg'>
              KENT Holidays (S) Pte Ltd<br />
              400 Orchard Road,<br />
              #14-08 (Front Block),<br />
              Orchard Towers,<br />
              Singapore 238875
            </div>
          </div>

          <div className="flex text-sm md:text-lg">
            <div className="w-36 font-bold">Telephone:</div>
            <div>(65) 6534 1033</div>
          </div>

          <div className="flex text-sm md:text-lg">
            <div className="w-36 font-bold">Email:</div>
            <div>sales@kentholidays.com</div>
          </div>

          <div className="my-8">
            <h4 className="font-semibold mb-2">Business Hours:</h4>
            {businessHours.map((item, index) => (
              <div key={index} className="flex mb-2">
                <div className="w-36 font-bold">{item.day}:</div>
                <div>{item.hours}</div>
              </div>
            ))}
          </div>

          <div className="text-sm md:text-lg bg-red-50 text-kent-red font-bold p-3 rounded-lg inline-block transition-transform hover:scale-[1.03]">
            Emergency Telephone Number: (65) 9299 0123
          </div>
        </div>

        <div className="h-[450px] rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779916874584!2d103.8271436140919!3d1.307234662076645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198cd0333dfb%3A0xedd3d56634ad335e!2sOrchard%20Towers!5e0!3m2!1sen!2sin!4v1670941044484!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-none"
            loading="lazy"
            title="KENT Holidays Location Map"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Maps showing location of KENT Holidays at Orchard Towers"
          ></iframe>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[3px] after:bg-kent-red">
          How to Reach Us
        </h3>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Directions Column */}
          <div className="w-full md:w-1/2">
            {directions.map((item, index) => (
              <div key={index} className={`${item.className} text-sm md:text-lg bg-blue-50 px-5 pb-3 py-3 rounded-lg transition-transform hover:translate-x-1`}>
                <h4 className="text-blue-900 font-semibold m-0! pb-2">{item.method}</h4>
                <div>{item.description}</div>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-full relative">
              <Image
                src="/images/aboutus/orchard.jpg"
                alt="Orchard Towers Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <main className="my-1">
      <IntroSection />
      <AccreditationsSection />
      <ServicesSection />
      <TicketingSection />
      <LowCostSection />
      <ContactSection />
    </main>
  );
}