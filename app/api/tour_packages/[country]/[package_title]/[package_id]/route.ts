import { NextRequest, NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; 

function formatTourPackages(json, country) {
  const fileMap = {};

  // Index all file entities from `included` array
  if (json.included) {
    json.included.forEach((item) => {
      if (item.type === 'file--file') {
        fileMap[item.id] = item.attributes.uri?.url;
      }
    });
  }
  return json.data.map((item) => {
    const { id, attributes, relationships } = item;
    const title = attributes.title;
    const imageId = relationships.field_first_image?.data?.id;
    const pdfId = relationships.field_itinery_pdf?.data?.id;
    const chinesePdfId = relationships.field_itinery_pdf_chinese?.data?.id;

    return {
      id: parseInt(attributes.drupal_internal__nid),
      title,  
      description: attributes.field_description,
      price: parseFloat(attributes.field_price),
      image: imageId && fileMap[imageId] ? `${baseUrl}${fileMap[imageId]}` : '/images/kent.jpg',
      destinations: attributes.field_tour_destinations,
      dayTour: attributes.field_package_type === 'day_tour' || false,
      timeLimited: attributes.field_package_type?.includes('time_limited') || false,
      expiryDate: attributes.field_package_type?.includes('time_limited') ? attributes.field_expiry_time : '',
      originalPrice: attributes.field_package_type?.includes('time_limited') ? attributes.field_original_price : '',
      multiDay: attributes.field_package_type?.includes('multi_day_tour') || false,
      transportation: attributes.field_package_type?.includes('transportation') || false,
      duration: attributes.field_tour_duration || '',
      pdf: pdfId && fileMap[pdfId] ? `${baseUrl}${fileMap[pdfId]}` : '',
      chinesePdf: chinesePdfId && fileMap[chinesePdfId] ? `${baseUrl}${fileMap[chinesePdfId]}` : '',
      terms: attributes.field_terms_and_conditions || [],
      highlights: attributes.field_tour_highlights || [],
      endValidityDate: attributes.field_end_of_validity || '',
      currency: attributes.field_price_currency || '',
    };
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { package_id: string, package_title: string, country: string } },
) {
  const {package_id, country, package_title} = await params;
  const res = await fetch(
    `${baseUrl}/jsonapi/node/tour_package?filter[nid][value]=${package_id}&include=field_first_image,field_itinery_pdf,field_itinery_pdf_chinese`
  );
  const json = await res.json();
  // console.log(json)
  const formatted = formatTourPackages(json, country);
  return NextResponse.json(formatted);
}
