import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import BackToTop from '@/app/components/back-to-top'
import WhatsAppFloat from '@/app/components/whatsapp-float'
import ChatFloat from "./components/chat-float";
import ChatWrapper from "./components/chat-wrapper";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kent Holidays (S) Pte Ltd | your worlds starts here',
  description: 'Your premier destination for customized tour packages across Asia and beyond',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="m-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        {/* <ChatFloat /> */}
      {/*   <iframe src="http://localhost:3000" title="chabot test" className="w-[374px] h-[572px] max-h-[-32px+100vh] p-0 my-2.5 mx-5 fixed bottom-0 right-0 overflow-visible opacity-100 border-none z-[999998] rounded-xl"></iframe> */}
        {/* <ChatWrapper /> */}
        {/* <script src="/chatbot.js"></script> */}
      </body>
    </html>
  );
}
