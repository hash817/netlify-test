"use client"
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SubmitEnquiry } from '@/app/action';


// Define the schema for form validation using Zod
const enquirySchema = z.object({
  salutation: z.enum(['Mr.', 'Mrs.', 'Ms.', 'Dr.']),
  familyName: z.string().min(1, { message: 'Family name is required' }),
  givenName: z.string().min(1, { message: 'Given name is required' }),
  nationality: z.string().min(1, { message: 'Nationality is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  telephone: z.string().min(1, { message: 'Telephone number is required' }),
  packageName: z.string().min(1, { message: 'Package name is required' }),
  passengers: z.string().min(1, { message: 'Passengers amount is required' }),
  comments: z.string().min(1, { message: 'Comments are required' })
});

// Infer TypeScript type from the schema
export type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      salutation: 'Mr.',
      familyName: '',
      givenName: '',
      nationality: '',
      email: '',
      telephone: '',
      packageName: '',
      passengers: '',
      comments: ''
    }
  });

  useEffect(() => {
    const packageName = searchParams.get('package_name');
    if (packageName) {
      setValue('packageName', packageName);
    }
  }, [searchParams, setValue]);

  const handleReset = () => {
    reset({
      salutation: 'Mr.',
      familyName: '',
      givenName: '',
      nationality: '',
      email: '',
      telephone: '',
      packageName: '',
      passengers: '',
      comments: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8! px-4! sm:px-6! lg:px-8!">
      <div className="max-w-3xl mx-auto!">
        {/* Header */}
        <div className="bg-white rounded-t-xl shadow-sm p-6! sm:p-8! border-b border-gray-100">
          <h1 className="text-2xl! sm:text-3xl! font-bold text-gray-800">Travel Package Enquiry</h1>
          <p className="mt-2! text-gray-500">Please complete the form below to enquire about our travel packages</p>
        </div>

        <form onSubmit={handleSubmit(SubmitEnquiry)} className="bg-white rounded-b-xl shadow-lg">
          <div className="divide-y divide-gray-100">
            {/* Personal Particulars Section */}
            <div className="p-6! sm:p-8!">
              <div className="mb-6! border-l-4 border-blue-500 pl-4!">
                <h2 className="text-lg! sm:text-xl! font-semibold text-blue-800">Personal Details</h2>
                <p className="mt-1! text-blue-600 text-sm!">Tell us about yourself</p>
              </div>

              <div className="space-y-5!">
                {/* Salutation */}
                <div>
                  <label htmlFor="salutation" className="block text-sm! font-medium text-gray-700 mb-1!">
                    Salutation
                  </label>
                  <select
                    id="salutation"
                    {...register('salutation')}
                    className="w-full sm:w-32 px-3! py-2! rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4! sm:gap-6!">
                  <div>
                    <label htmlFor="familyName" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Family Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="familyName"
                      {...register('familyName')}
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.familyName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.familyName && (
                      <p className="mt-1! text-sm! text-red-600">{errors.familyName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="givenName" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Given Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="givenName"
                      {...register('givenName')}
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.givenName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.givenName && (
                      <p className="mt-1! text-sm! text-red-600">{errors.givenName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4! sm:gap-6!">
                  <div>
                    <label htmlFor="nationality" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      {...register('nationality')}
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.nationality ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.nationality && (
                      <p className="mt-1! text-sm! text-red-600">{errors.nationality.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Telephone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      {...register('telephone')}
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.telephone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.telephone && (
                      <p className="mt-1! text-sm! text-red-600">{errors.telephone.message}</p>
                    )}
                  </div>
                </div>
           
                  <div>
                    <label htmlFor="email" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`sm:w-[95%] w-[90%] px-3! py-2! rounded-lg border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.email && (
                      <p className="mt-1! text-sm! text-red-600">{errors.email.message}</p>
                    )}
                  </div>

              </div>
            </div>

            {/* Trip Enquiry Section */}
            <div className="p-6! sm:p-8!">
              <div className="mb-6! border-l-4 border-blue-500 pl-4!">
                <h2 className="text-lg! sm:text-xl! font-semibold text-blue-800">Your Trip</h2>
                <p className="mt-1! text-blue-600 text-sm!">Tell us about your travel plans</p>
              </div>

              <div className="space-y-5!">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4! sm:gap-6!">
                  <div>
                    <label htmlFor="packageName" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Package Name <span className="text-red-500">*</span>
                      <span className="block sm:inline text-xs! text-gray-500 sm:ml-1!">(as found on our website)</span>
                    </label>
                    <input
                      type="text"
                      id="packageName"
                      {...register('packageName')}
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.packageName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.packageName && (
                      <p className="mt-1! text-sm! text-red-600">{errors.packageName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="passengers" className="block text-sm! font-medium text-gray-700 mb-1!">
                      Number of Passengers
                    </label>
                    <input
                      type="number"
                      id="passengers"
                      {...register('passengers')}
                      min="1"
                      className={`w-[90%] px-3! py-2! rounded-lg border ${errors.passengers ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                    />
                    {errors.passengers && (
                      <p className="mt-1! text-sm! text-red-600">{errors.passengers.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm! font-medium text-gray-700 mb-1!">
                    Additional Information <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="comments"
                    {...register('comments')}
                    rows={5}
                    placeholder="Tell us about your ideal travel dates, special requirements, or any questions you may have..."
                    className={`sm:w-[95%] w-[90%] px-3! py-2! rounded-lg border ${errors.comments ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400'} focus:border-transparent transition duration-200`}
                  ></textarea>
                  {errors.comments && (
                    <p className="mt-1! text-sm! text-red-600">{errors.comments.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="p-6! sm:p-8! bg-gray-50 flex flex-col sm:flex-row items-center justify-center gap-3! sm:gap-4!">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-[0] w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2! px-6! rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto mt-2! sm:mt-0! bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2! px-6! rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset Form
              </button>
            </div>
          </div>
        </form>

        <div className="mt-4! text-center text-sm! text-gray-500">
          <p>We'll respond to your enquiry within 24 hours during business days</p>
        </div>
      </div>
    </div>
  );
}