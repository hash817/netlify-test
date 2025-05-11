import Image from 'next/image';

function MaybankInfo() {
  return (
    <div className="px-5 sm:px-30 lg:px-70 py-4 bg-light">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kent-purple2 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-kent-red after:to-kent-red/30">
          Maybank Singapore Limited - MBB
        </h1>
      </div>

      <div className="flex justify-start mb-6">
        <div className="w-48 sm:w-64 md:w-72">
          <Image
            className="object-contain"
            alt="maybank"
            src="/images/modeofpayment/maybank.png"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Account Details Section - Stack vertically on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full space-y-2 sm:space-y-0">
          <div className="flex gap-2">
            <div className="font-bold">Bank:</div>
            <div>7302</div>
          </div>
          <div className="flex gap-2">
            <div className="font-bold">Branch Number:</div>
            <div>017</div>
          </div>
          <div className="flex gap-2">
            <div className="font-bold">Current Account No:</div>
            <div>0-417-03-5288-9</div>
          </div>
        </div>

        {/* Overseas Transfer Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 my-6">
          <div className="mb-4">
            <div className="text-kent-red font-bold">For Overseas Telegraphic Transfer</div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row gap-2 md:w-1/2">
              <div className="font-bold">Swift Code:</div>
              <div>MBBESG52</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:w-1/2">
              <div className="font-bold">Bank Address:</div>
              <div>
                101 Upper Cross Street, #01-22 People&apos;s Park Centre<br />
                Singapore - 058357
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        {/* PayNow Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <div className="text-kent-purple2 font-bold text-lg sm:text-xl mb-2">
              Ease Payments with Maybank PayNow Corporate
            </div>
            <div className="text-kent-red mb-1">Unique Entity Number (UEN):</div>
            <div className="text-kent-red font-bold">198102577MMB1</div>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end">
            <div className="w-32 sm:w-40">
              <Image
                className="object-contain"
                alt="maybank paynow"
                src="/images/modeofpayment/maybank_paynow.png"
                width={200}
                height={230}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UOBInfo() {
  return (
    <div className="px-5 sm:px-30 lg:px-70 py-4 bg-white mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kent-purple2 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-kent-red after:to-kent-red/30">
          United Overseas Bank Limited - UOB
        </h1>
      </div>

      <div className="flex justify-start mb-6">
        <div className="w-48 sm:w-64 md:w-72">
          <Image
            className="object-contain"
            alt="maybank"
            src="/images/modeofpayment/uob.png"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Account Details Section - Stack vertically on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full space-y-2 sm:space-y-0">
          <div className="flex gap-2">
            <div className="font-bold">Bank:</div>
            <div>7375</div>
          </div>
          <div className="flex gap-2">
            <div className="font-bold">Branch Number:</div>
            <div>432</div>
          </div>
          <div className="flex gap-2">
            <div className="font-bold">Current Account No:</div>
            <div>403-304-180-7</div>
          </div>
        </div>

        {/* Overseas Transfer Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 my-6">
          <div className="mb-4">
            <div className="text-kent-red font-bold">For Overseas Telegraphic Transfer</div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row gap-2 md:w-1/2">
              <div className="font-bold">Swift Code:</div>
              <div>UOVBSGSG</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:w-1/2">
              <div className="font-bold">Bank Address:</div>
              <div>
                UOB City Square Mall Branch, 180 Kitchener Road,
                #B2-47/48, City Square Mall, Singapore 208539
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        {/* PayNow Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <div className="text-kent-purple2 font-bold text-lg sm:text-xl mb-2">
              Ease Payments with UOB PayNow Corporate
            </div>
            <div className="text-kent-red mb-1">Unique Entity Number (UEN):</div>
            <div className="text-kent-red font-bold">198102577M</div>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end">
            <div className="w-32 sm:w-40">
              <Image
                className="object-contain"
                alt="maybank paynow"
                src="/images/modeofpayment/uob_paynow.png"
                width={200}
                height={230}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className='px-5 sm:px-30 lg:px-70 py-4'>
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kent-purple2 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-kent-red after:to-kent-red/30">
          Mode of payments
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Authorised Name of Payee: Kent Holidays (S) Pte Ltd
        </p>
      </div>
    </section>
  );
}

function CreditCardPayment() {
  return (
    <div className="px-5 sm:px-30 lg:px-70 py-4 bg-light">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:pr-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kent-purple2 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-red-500 after:to-red-500/30">
            CREDIT CARD PAYMENT
          </h1>

          {/* AMEX/Diners section with text on right */}
          <div className="mb-10">
            <p className="text-lg mb-3 font-medium">For AMEX / Diners Club</p>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Images on left */}
              <div className="flex space-x-4">
                {['amex', 'diner_club'].map((img, i) => (
                  <div key={i} className="w-20 sm:w-32 rounded flex items-center justify-center">
                    <Image
                      className="object-contain rounded-lg"
                      alt={img}
                      src={`/images/modeofpayment/${img === 'diner_club' ? 'diner_club.jpeg' : img + '.png'}`}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
              
              {/* Fee text on right */}
              <div className="md:flex-1">
                <div className="bg-indigo-50 border-l-4 border-indigo-900 p-3 mb-3 ">
                  Download form:{' '}
                  <a href="http://www.kentholidays.com/card.doc" className="text-indigo-600 hover:text-indigo-900 underline">
                    www.kentholidays.com/card.doc
                  </a>{' '}
                  to complete and submit back.
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-3 ">
                  Credit Card Payment is subject to 2% Transaction Fee
                </div>
              </div>
            </div>
          </div>

          {/* HitPay section with text on left and image on right */}
          <div className="mt-12">
            <p className="text-lg mb-3 font-medium">Hitpay for Visa / Master</p>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Text on left */}
              <div className="md:flex-1 order-2 md:order-1">
                <div className="bg-indigo-50 border-l-4 md:border-l-0  md:border-r-4 border-indigo-900 p-3 mb-3 ">
                  We will send HitPay Invoice to confirm transaction charge
                </div>
                
                <div className="bg-red-50 border-l-4 md:border-l-0  md:border-r-4 border-red-500 p-3 mb-3 ">
                  HitPay Payment is subject to 3% Transaction Fee for Domestic Credit Card
                </div>
                
                <div className="bg-red-50 border-l-4 md:border-l-0  md:border-r-4 border-red-500 p-3 ">
                  HitPay Payment is subject to 4% Transaction Fee for International Credit Card
                </div>
              </div>
              
              {/* Image on right */}
              <div className="w-20 sm:w-32 rounded flex items-center justify-center order-1 md:order-2">
                <Image
                  className="object-contain rounded-lg"
                  alt='hitpay'
                  src={`/images/modeofpayment/hitpay.png`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlipayBanner() {
  return (
    <div className="pr-2 sm:px-30 lg:px-70 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="mr-1">
          <Image
            src="/images/modeofpayment/alipay.webp"
            width="200"
            height="100"
            alt="Alipay logo"
            className="w-55 h-40"
            layout='responsive'
          />
        </div>

        <div className="">
          <p className="text-sm sm:text-2xl font-bold text-kent-purple2">
            Alipay Payment is Subject to
            <span className="text-kent-red"> 1.5% Transaction Fee</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/modeofpayment/alipay_qr.png"
            width="200"
            height="200"
            alt="Alipay qr"
            className='w-30! sm:w-50!'
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
}

export default function ModeOfPayment() {
  return (
    <main className="my-1">
      <IntroSection />
      <MaybankInfo />
      <UOBInfo />
      <CreditCardPayment />
      <AlipayBanner />
    </main>
  );
}