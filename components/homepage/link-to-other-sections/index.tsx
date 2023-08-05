import React, { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./link-to-other-sections.module.scss";

const LinkToOtherSections: FC = () => {
  const links = [
    ["Projects", "projects/"],
    ["Contact", "contact/"],
    ["About", "about/"],
  ];

  const singleLink = (title: string, url: string): ReactNode => {
    return (
      <div className={styles.link}>
        <Link href={url}>{title}</Link>
      </div>
    );
  };

  return (
    <div className={styles.linksContainer}>
      {links.map(([title, url]) => singleLink(title, url))}
    </div>
  );
};

export default LinkToOtherSections;
