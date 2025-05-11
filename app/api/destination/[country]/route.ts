import { count } from 'console';
import { NextRequest, NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; 

function formatTourPackages(json, country) {
  const fileMap = {};
  // console.log(json)
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

    return {
      id: parseInt(attributes.drupal_internal__nid),
      title,
      description: attributes.field_description,
      price: parseFloat(attributes.field_price),
      image: imageId && fileMap[imageId] ? `${baseUrl}${fileMap[imageId]}` : '/images/kent.jpg',
      // link: `/${country.toLowerCase()}/${title.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      link: `/destinations/${country.toLowerCase()}/${title}/${parseInt(attributes.drupal_internal__nid)}`,
      destinations: attributes.field_tour_destinations,
      highlights: attributes.field_shown_on_home_page ? attributes.field_tour_highlights : [],
      dayTour: attributes.field_package_type === 'day_tour' || false,
      timeLimited: attributes.field_package_type?.includes('time_limited') || false,
      expiryDate: attributes.field_package_type?.includes('time_limited') ? attributes.field_expiry_time : '',
      originalPrice: attributes.field_package_type?.includes('time_limited') ? attributes.field_original_price : '',
      multiDay: attributes.field_package_type?.includes('multi_day_tour') || false,
      transportation: attributes.field_package_type?.includes('transportation') || false,
      duration: attributes.field_tour_duration || '',
      endValidityDate: attributes.field_end_of_validity || '',
      currency: attributes.field_price_currency || '',
    };
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { country: string } }
) {
  const searchParams = request.nextUrl.searchParams
  console.log(searchParams)
  const { country } = await params;
  let filters:  Record<string, string>;
  if (country !== 'all'){
    filters = {
      'field_country_of_package': country.replace(/-/g, ' ')
    };  
  }else {
    filters = {};  
  }

  // Dynamically add any additional filters from query params
  // Convert query param names to Drupal field names if needed
  searchParams.forEach((value, key) => {
    if (value) {
      // You could add a mapping here if the query param names differ from API field names
      const fieldName = `field_${key}`;
      filters[fieldName] = value;
    }
  });
  
  // Build the API URL with all filters
  let api_url = `${baseUrl}/jsonapi/node/tour_package?`;

  // Add each filter to the URL
  Object.entries(filters).forEach(([field, value], index) => {
    api_url += `filter[${field}]=${encodeURIComponent(value)}`;
    if (index < Object.entries(filters).length - 1) {
      api_url += '&';
    }
  });

  // Add the includes
  api_url += '&include=field_first_image,field_itinery_pdf&sort=field_tour_duration';
  const res = await fetch(api_url);
  const json = await res.json();
  console.log(api_url)
  // console.log(json);
  const formatted = formatTourPackages(json, country);
  // console.log(formatted)
  return NextResponse.json(formatted);
} 