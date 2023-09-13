import { NextPage } from "next";
import React from "react";
import ContactPageComponent from "@/components/contact";

const ContactPage: NextPage = async () => {
  const contactDetails = await getContactDetails();
  return <ContactPageComponent contactDetails={contactDetails} />;
};

const getContactDetails = async () => {
  return (await import("@/static-data/contact.json")).default;
};

export default ContactPage;
