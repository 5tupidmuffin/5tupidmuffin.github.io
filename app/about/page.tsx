import AboutPageComponent from "@/components/about";
import { NextPage } from "next";
import React from "react";

const AboutPage: NextPage = async () => {
  const about = await getAbout();
  return <AboutPageComponent aboutMe={about.aboutMe} />;
};

const getAbout = async (): Promise<Record<string, string>> => {
  return (await import("@/static-data/about.json")).default;
};

export default AboutPage;
