"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./contact.module.scss";
import PageHeader from "@/components/common/page-header";
import Link from "next/link";
import Image from "next/image";

interface Props {
  contactDetails: Record<string, string>;
}

const ContactPageComponent: FC<Props> = ({ contactDetails }) => {
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
        {Object.keys(contactDetails).map((key) =>
          socialLink(key, contactDetails[key])
        )}
      </div>
    </main>
  );
};

export default ContactPageComponent;
