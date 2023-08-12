import React, { FC } from "react";
import styles from "./page-header.module.scss";

interface Props {
  pageTitle: string;
}

const PageHeader: FC<Props> = ({ pageTitle }) => {
  return <h1 className={styles.pageHeader}>{pageTitle}</h1>;
};

export default PageHeader;
