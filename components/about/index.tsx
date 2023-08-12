"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./about.module.scss";
import PageHeader from "@/components/common/page-header";

const AboutPageComponent: FC = () => {
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    getAboutMe().then(setAboutMe);
  }, []);

  const getAboutMe = async (): Promise<string> => {
    const response = await fetch("/json-data/about.json");
    const responseData = await response.json();
    return responseData.aboutMe;
  };

  return (
    <main className={styles.aboutPage}>
      <PageHeader pageTitle="About" />
      <div className={styles.aboutMe}>{aboutMe}</div>
    </main>
  );
};

export default AboutPageComponent;
