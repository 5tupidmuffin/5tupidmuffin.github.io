import React, { FC } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Rameshwar Kamble</h1>
      <Link href="/" className={styles.homepageLink}>
        [5tupidmuffin]
      </Link>
    </div>
  );
};

export default Header;
