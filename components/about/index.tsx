"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./about.module.scss";
import PageHeader from "@/components/common/page-header";

interface Props {
  aboutMe: string;
}

const AboutPageComponent: FC<Props> = ({ aboutMe }) => {
  return (
    <main className={styles.aboutPage}>
      <PageHeader pageTitle="About" />
      <div className={styles.aboutMe}>{aboutMe}</div>
    </main>
  );
};

export default AboutPageComponent;
