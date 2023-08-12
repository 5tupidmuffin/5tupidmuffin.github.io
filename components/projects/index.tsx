import React, { FC, useEffect, useState } from "react";
import styles from "./projects.module.scss";
import SingleProject from "./single-project";
import PageHeader from "@/components/common/page-header";

interface ProjectData {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  URLs: Record<string, string>;
}

const ProjectsPageComponent: FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const getProjects = async (): Promise<ProjectData[]> => {
    const response = await fetch("/json-data/projects.json");
    const responseData = await response.json();
    return responseData;
  };

  return (
    <main className={styles.projectsPage}>
      <PageHeader pageTitle="Projects" />
      {!!projects.length &&
        projects.map((data, idx) => (
          <SingleProject key={idx} projectData={data} />
        ))}
    </main>
  );
};

export default ProjectsPageComponent;
