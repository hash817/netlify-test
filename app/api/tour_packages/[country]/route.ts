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
// const test = [
//   {
//     "id": 1,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 2,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 3,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 4,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 5,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 6,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 7,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 8,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 9,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 10,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 11,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 12,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 13,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 14,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 15,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 16,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 17,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 18,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 19,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 20,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 21,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 22,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 23,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 24,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 25,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 26,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 27,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 28,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 29,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 30,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 31,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 32,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 33,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 34,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 35,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 36,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 37,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 38,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 39,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 40,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 41,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 42,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 43,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 44,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 45,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 46,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 47,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 48,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   },
//   {
//     "id": 49,
//     "title": "Rose Forest Getaway Trip 6D",
//     "description": "scape to Taiwan’s floral highlands & forest paths.",
//     "price": 999,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/rose-forest.png",
//     "link": "/taiwan/Rose Forest Getaway Trip 6D/5",
//     "dayTour": true,
//     "timeLimited": false,
//     "multiDay": false,
//     "transportation": true,
//     "duration": "6 Days / 5 Nights"
//   },
//   {
//     "id": 50,
//     "title": "Alishan Tribal 7D Customs Tour",
//     "description": "Cultural tribes, misty forests & mountain sunrise.",
//     "price": 1099,
//     "image": "https://www.lck.com.sg/cms/sites/default/files/2025-04/alishan.png",
//     "link": "/taiwan/Alishan Tribal 7D Customs Tour/4",
//     "dayTour": false,
//     "timeLimited": false,
//     "multiDay": true,
//     "transportation": true,
//     "duration": "7 Days / 6 Nights"
//   }
// ]
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