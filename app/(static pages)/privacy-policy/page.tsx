import Link from "next/link"

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-8 divide-y divide-gray-200">
            {/* Introduction */}
            <div>
              <p className="text-gray-600 mb-4">
                This privacy policy sets out how Kent Holidays (S) Pte Ltd uses and protects any information that you give Kent Holidays (S) Pte Ltd when you use this website.
              </p>
              <p className="text-gray-600 mb-4">
                Kent Holidays (S) Pte Ltd is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
              </p>
              <p className="text-gray-600">
                Kent Holidays (S) Pte Ltd may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 15 September 2013.
              </p>
            </div>
  
            {/* What We Collect */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What we collect</h2>
              <p className="text-gray-600 mb-4">We may collect the following information:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
                <li>Name and job title</li>
                <li>Contact information including email address</li>
                <li>Demographic information such as postcode, preferences and interests</li>
                <li>Other information relevant to customer surveys and/or offers</li>
              </ul>
            </div>
  
            {/* Information Usage */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What we do with the information we gather</h2>
              <p className="text-gray-600 mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
                <li>Internal record keeping</li>
                <li>Improve our products and services</li>
                <li>Send promotional emails about new products and offers</li>
                <li>Contact for market research purposes</li>
                <li>Customize the website according to interests</li>
                <li>Share with third party partners for marketing purposes (never sell)</li>
              </ul>
            </div>
  
            {/* Security */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-600">
                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
              </p>
            </div>
  
            {/* Cookies */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How we use cookies</h2>
              <p className="text-gray-600 mb-4">
                A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.
              </p>
              <p className="text-gray-600 mb-4">
                We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website to tailor it to customer needs. Data is used for statistical analysis only.
              </p>
              <p className="text-gray-600 mb-4">
                Cookies help us provide you with a better website by monitoring page usefulness. A cookie gives no access to your computer or information beyond what you share.
              </p>
              <p className="text-gray-600">
                You can choose to accept or decline cookies through your browser settings. Declining cookies may limit website functionality.
              </p>
            </div>
  
            {/* External Links */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links to other websites</h2>
              <p className="text-gray-600">
                Our website may contain links to other sites. Note that we don't control external sites and this privacy statement doesn't apply to them. Exercise caution and review their privacy policies.
              </p>
            </div>
  
            {/* Data Control */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Controlling your personal information</h2>
              <p className="text-gray-600 mb-4">You can restrict collection/use of your personal information by:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-600">
                <li>Using opt-out links in forms</li>
                <li>Emailing us to revoke previous marketing consent</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We won't sell/distribute your personal information unless required by law. We may send third-party promotions if you permit us.
              </p>
            </div>
  
            {/* Contact Info */}
            <div className="pt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600">
                  To correct information or for inquiries:<br />
                  Kent Holidays (S) Pte Ltd<br />
                  400 Orchard Road, #14-08 (Front Block)<br />
                  Orchard Towers, Sinapore 238875<br />
                  Email: <Link href="mailto:sales@kentholidays.com" className="text-blue-600 hover:underline">sales@kentholidays.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }