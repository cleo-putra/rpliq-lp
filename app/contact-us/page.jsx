import React from "react";
import Faq from "@/components/Pricing/Faq";
import ContactForm from "@/components/ContactUs/ContactForm";
import Map from "@/components/ContactUs/Map";

const ContactUs = () => {
  return (
    <>
      <ContactForm />
      {/* FAQ */}
      <Faq />
      <Map />
    </>
  );
};

export default ContactUs;
