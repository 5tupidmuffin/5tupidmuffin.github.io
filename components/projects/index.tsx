import React, { FC, useEffect, useState } from "react";
import styles from "./projects.module.scss";
import SingleProject from "./single-project";
import PageHeader from "@/components/common/page-header";
import Image from "next/image";
import Link from "next/link";

export interface ProjectData {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  URLs: Record<string, string>;
}

interface Props {
  projects: ProjectData[];
}

const ProjectsPageComponent: FC<Props> = ({ projects }) => {
  return (
    <main className={styles.projectsPage}>
      <PageHeader pageTitle="Projects" />
      {!!projects.length &&
        projects.map((data, idx) => (
          <SingleProject key={idx} projectData={data} />
        ))}
      <Link
        className={styles.moreProjects}
        href="https://github.com/5tupidmuffin"
      >
        More Projects at Github
        <Image
          src="/images/external-link-arrow.svg"
          height={18}
          width={18}
          alt="external link icon"
        />
      </Link>
    </main>
  );
};

export default ProjectsPageComponent;
