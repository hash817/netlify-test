import { Suspense } from 'react';
import EnquiryForm from '@/app/(static pages)/enquiry/enquiry-form';

export default function EnquiryPage() {
  return (
    <Suspense>
      <EnquiryForm />
    </Suspense>
  );
}