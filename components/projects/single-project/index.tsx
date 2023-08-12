import React, { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./single-project.module.scss";

interface Props {
  projectData: {
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
    URLs: Record<string, string>;
  };
}

const SingleProject: FC<Props> = ({ projectData }) => {
  const singleTech = (tech: string): ReactNode => {
    return <p className={styles.singleTech}>{tech}</p>;
  };

  const singleLink = (label: string, url: string): ReactNode => {
    return (
      <Link className={styles.singleLink} href={url} target="_blank">
        {label}
      </Link>
    );
  };

  return (
    <div className={styles.singleProject}>
      <div className={styles.headline}>
        <h1 className={styles.title}>
          {projectData.title}
          <p className={styles.subTitle}>{projectData.subTitle}</p>
        </h1>
        <div className={styles.dateLine}>
          <p className={styles.startDate}>{projectData.startDate}</p>
          <p className={styles.dateLine}></p>
          <p className={styles.endDate}>{projectData.endDate}</p>
        </div>
      </div>
      <div className={styles.links}>
        <h4 className={styles.linksHeading}>URLs -</h4>
        {Object.keys(projectData.URLs).map((key) =>
          singleLink(key, projectData.URLs[key])
        )}
      </div>
      <div className={styles.description}>{projectData.description}</div>
      <div className={styles.tech}>
        <h4 className={styles.techStackHeading}>Technologies Used -</h4>
        <div className={styles.techStack}>
          {projectData.technologies.map(singleTech)}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
