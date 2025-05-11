"use server";

import { EnquiryFormData } from "@/app/enquiry/enquiry-form";
import { sendMail } from "@/app/lib/send-mail";
import path from 'path';
import { encodedRedirect } from "@/app/utils/utils";
// Function to handle email submission with the HTML template
export async function SubmitEnquiry(data: EnquiryFormData) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Inquiry</title>
</head>
<body style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.5; color: #374151; margin: 0; padding: 0; background-color: #f3f4f6;">
    <!-- Main container with max width -->
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);">
        
    <!-- Header with logo left and text right -->
    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; padding: 20px;">
      <tr>
        <!-- Logo cell -->
        <td style="vertical-align: middle; width: 90px;">
          <img src="https://hash817.github.io/images/kent.jpg" alt="Logo" style="width: 80px; display: block;">
        </td>
        <!-- Text block cell - adjusted to be closer to the logo -->
        <td style="vertical-align: middle; padding-left: 10px;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size: 24px; font-weight: bold; color: #0c2162; line-height: 1.2;">Kent</td>
            </tr>
            <tr>
              <td style="font-size: 24px; font-weight: bold; color: #0c2162; line-height: 1.2;">Holidays</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
        
        <!-- Content area -->
        <div style="padding: 1.5rem;">
            <p style="font-size: 1.125rem; margin-bottom: 1.25rem;">Dear ${
              data.salutation || ""
            } ${data.givenName || ""} ${data.familyName || ""},</p>
            
            <div style="margin-bottom: 1.25rem;">
                <p>Thank you for contacting us about the <strong>${
                  data.packageName || "travel package"
                }</strong>. We've received your inquiry and appreciate your interest in traveling with us.</p>
            </div>
            
            <!-- Highlighted message -->
            <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 1rem; margin: 1.25rem 0;">
                <p style="margin: 0;"><strong>Our team will respond to your inquiry within 24 hours</strong> to discuss your travel plans in more detail.</p>
            </div>
            
            <p>If you have any urgent questions in the meantime, please contact us at <strong>+65 6534 1033</strong>.</p>
            
            <div style="margin-top: 1.5rem; color: #6b7280;">
                <p>Best regards,<br>
                Kent Holidays Team</p>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 1rem; text-align: center; font-size: 0.875rem; color: #6b7280;">
            <p style="margin: 0 0 0.5rem 0;">© 2025 Kent Holidays (S) Pte Ltd. All rights reserved.</p>
            <p style="margin: 0;"><small>If you did not submit this inquiry, please disregard this email.</small></p>
        </div>
    </div>
</body>
</html>
  `;
  console.log(path.join(process.cwd(), '/public/images/kent.jpg'));
  const response = await sendMail({
    from: process.env.SMTP_SERVER_USERNAME,
    to: data.email,
    subject: `Thank you for your inquiry about ${data.packageName}`,
    text: `Thank you for contacting us about the ${data.packageName}. Our team will respond to your inquiry within 24 hours to discuss your travel plans in more detail.`,
    html: htmlContent,
  });

  if(!response?.messageId){
    return encodedRedirect("error", "/enquiry/result", "Something went wrong, please try again later.");
  }else{
    return encodedRedirect("success", "/enquiry/result", `Thank you for contacting us about the ${data.packageName}. Our team will respond to your inquiry within 24 hours to discuss your travel plans in more detail.`);
  }
  // return response;
}

// export async function SubmitSearch(formData: FormData) {
//   const query = formData.get('query')
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/search?fulltext=${query}&field_country_of_package=${}`
//   );
//   const data = await res.json();
//   console.log(data)
// }

// export async function SubmitSearch(query: string, country: string) {
//   console.log(query, country)
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/tour_packages/search?fulltext=${query}&field_country_of_package=${country}`
//   );
//   const data = await res.json();
//   console.log(data)
// }