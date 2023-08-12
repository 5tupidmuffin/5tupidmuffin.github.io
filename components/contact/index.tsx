"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./contact.module.scss";
import PageHeader from "@/components/common/page-header";
import Link from "next/link";
import Image from "next/image";

const ContactPageComponent: FC = () => {
  const [socials, setSocials] = useState<Record<string, string>>({});

  useEffect(() => {
    getSocials().then(setSocials);
  }, []);

  const getSocials = async (): Promise<Record<string, string>> => {
    const response = await fetch("/contact.json");
    const responseData = await response.json();
    return responseData;
  };

  const socialLink = (label: string, url: string): ReactNode => {
    return (
      <Link className={styles.socialLink} href={url}>
        {label}{" "}
        <Image
          src="/images/external-link-arrow.svg"
          height={18}
          width={18}
          alt=""
        />
      </Link>
    );
  };

  return (
    <main className={styles.contactPage}>
      <PageHeader pageTitle="Contact" />
      <div className={styles.socials}>
        {Object.keys(socials).map((key) => socialLink(key, socials[key]))}
      </div>
    </main>
  );
};

export default ContactPageComponent;
