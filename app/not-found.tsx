"use client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import styles from "@/styles/not-found.module.scss";

const Custom404Page: NextPage = () => {
  useEffect(() => {
    setTimeout(easterEgg, 2 * 1000);
  }, []);

  const easterEgg = (): void => {
    document.location.href = "/";
  };

  return (
    <div className={styles.four0FourPage}>
      <p>One must imagine Sisyphus Happy</p>
      <p>btw, you lost?</p>
    </div>
  );
};

export default Custom404Page;
