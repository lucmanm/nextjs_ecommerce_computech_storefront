import Image from "next/image";
import Link from "next/link";
// All Footer Informations
export const logoUrl = [
  { title: "square logo", url: "/computech-logo.png", link: "/" },
  {
    title: "landscape logo",
    url: "/computech-landscape-logo.png",
    link: "/",
  },
];

// Payment Methid Categories
export const paymentMethod = [
  {
    title: "We Accept",
  },
  {
    paymentCard: [
      { title: "Mada", imageUrl: "/payment-cards-logo/mada.png", url: "/" },
      { title: "Visa", imageUrl: "/payment-cards-logo/visa.png", url: "/" },
      {
        title: "MasterCard",
        imageUrl: "/payment-cards-logo/mastercard.png",
        url: "/",
      },
    ],
  },
];

export const footerInfo = [
  {
    title: "Contact Us!",
    info: [
      { title: "Phone: ", info: "012 651 5259 Ext. 103" },
      { title: "Email: ", info: "sales@compu-tech.com.sa" },
      {
        title: "Adddress: ",
        info: "Khalid Bin Al Walid St., Jeddah, Saudi Arabia",
      },
    ],
  },
  {
    title: "Company",
    info: [
      { title: "About" },
      { title: "Affiliates" },
      { title: "Contact Us" },
    ],
  },
  {
    title: "Help",
    info: [
      { title: "My Account" },
      { title: "Customer Service" },
      { title: "Find a Store" },
    ],
  },
];

const Footer = () => {
  // Destructuring Payment Methid
  const [{ title }, { paymentCard }] = paymentMethod;
  return (
    // The Entire Footer Container
    <footer className="mt-auto bg-gray-200 text-sm md:text-base">
      {/* Container for the entire div */}
      <div className="container flex flex-wrap px-4">
        <div className="flex w-full py-4 ">
          <div className="flex flex-wrap  gap-4 md:flex-1">
            <div className="py-1">
              <Link href={logoUrl[0].link}>
                <Image
                  src={logoUrl[0].url}
                  height={100}
                  width={100}
                  alt={logoUrl[0].title}
                />
              </Link>
            </div>
            {/* Looped for contact us company and help */}
            {footerInfo.map(({ title, info }) => (
              <div key={title} className="grow ">
                <span className="font-semibold">{title}</span>
                {info.map((data, index) => (
                  <ol key={index} className="leading-7">
                    {data.title} {data.title}
                  </ol>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Payment Methdd Container */}
        <div className="relative flex-1 items-center justify-center gap-x-2 pb-2 ">
          {/* Payment Method Acceptable */}
          <div>
            <span className="font-semibold">{title}</span>
          </div>
          {/* Payment Methods Logos */}
          <div className="flex gap-4">
            {paymentCard?.map(({ title, imageUrl }) => (
              <div key={title}>
                <Image src={imageUrl} width={50} height={50} alt={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright information */}
      <div className="bg-blue-950 ">
        <p className="px-4 py-2 text-center text-white">
          COPYRIGHT © 2023. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID
          311079231900003. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
